// https://github.com/liamnewmarch/console-shim 2014 CC-BY @liamnewmarch

/**
 * Methods we want to (try to) map onto the native window.console. Methods that
 * don’t exist will get passed to console.log.
 */
const methodsToShim = [
  'assert',
  'count',
  'debug',
  'dir',
  'dirxml',
  'error',
  'exception',
  'group',
  'groupCollapsed',
  'groupEnd',
  'info',
  'log',
  'table',
  'trace',
  'warn',
];


/**
 * Methods we can’t replicate and are handled by a no-op function.
 */
const methodsToIgnore = [
  'clear',
  'count',
  'profile',
  'profileEnd',
  'timeStamp',
];


/**
* The console shim class.
*/
class ConsoleShim {

  /**
   * Initialise the buffer, setup methods and watch for console.
   *
   * @constructor
   */
  constructor() {
    this.__buffer = [];
    this.__mapMethods();
    this.__watchForConsole();
  }

  /**
   * Add a method to mirror window.console.
   *
   * @param {string} key Name of the console method.
   * @private
   */
  __addMethod(key) {
    return (...args) => this.__buffer.push(key, args);
  }

  /**
   * Call a method on the native window.console.
   *
   * @param {string} method Method to call.
   * @param {array} args Args to pass to method.
   * @private
   */
  __callNativeMethod(method, args) {
    method = method in window.console || 'log';
    window.console.log(...args);
  }

  /**
   * Iterate method keys, and shim or ignore as appropriate.
   *
   * @private
   */
  __mapMethods() {
    const noop = function() {/* noop */};
    methodsToShim.forEach(key => this[key] = this.__addMethod(key));
    methodsToIgnore.forEach(key => this[key] = noop);
  }

  /**
   * Watch for the native window.console. If it’s not available wait a second
   * and try again.
   *
   * @private
   */
  __watchForConsole() {
    if (window.console instanceof ConsoleShim) {
      return;
    }

    if ('check' in this) {
      clearTimeout(this.check);
    }

    this.__buffer.forEach(args => {
      this.__logToConsole(...args);
    });

    this.check = setTimeout(this.__watchForConsole, 1000);
  }
}


/**
* Expose our console shim instance.
*/
export default new ConsoleShim();
