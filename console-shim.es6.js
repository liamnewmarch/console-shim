// https://github.com/liamnewmarch/console-shim 2014 CC-BY @liamnewmarch


const methodsToShim = [
  'assert',
  'count',
  'debug',
  'dir',
  'dirxml',
  'error',
  'exception',
  'info',
  'log',
  'table',
  'trace',
  'warn'
];


const methodsToIgnore = [
  'clear',
  'count',
  'group',
  'groupCollapsed',
  'groupEnd',
  'profile',
  'profileEnd',
  'timeStamp'
];


/**
* ConsoleShim class.
*/
class ConsoleShim {

  /**
   * @constructor
   */
  constructor() {
    this.__buffer = [];
    this.__mapMethods();
    this.__watchForConsole();
  }

  /**
   * @param {...*} args Value to buffer.
   * @private
   */
  __addMethod(key) {
    return (...args) => this.__buffer.push(key, args);
  }

  /**
   * @param {string} method Method to call.
   * @param {array} args Args to pass to method.
   */
  __callNativeMethod(method, args) {
    method = method in window.console || 'log';
    window.console.log(...args);
  }

  /**
   * @private
   */
  __mapMethods() {
    const noop = function() {/* noop */};
    methodsToShim.forEach(key => this[key] = this.__addMethod(key));
    methodsToIgnore.forEach(key => this[key] = noop);
  }

  /**
   * @private
   */
  __watchForConsole() {
    if (window.console instanceof ConsoleShim) {
      return;
    }

    if ('check' in this) {
      clearTimeout(check);
    }

    this.__buffer.forEach(args => {
      this.__logToConsole(...args);
    });

    this.check = setTimeout(this.__watchForConsole, 1000);
  }
}


/**
* ConsoleShim instance.
*/
window.console = new ConsoleShim();
