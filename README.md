Console shim
============

Some browsers require the developer tools to be open before `window.console` is available.

This is a tiny shim, written in ES6, that provides a dummy `console` object to the global scope.

It saves all calls to `console.log`, `console.error` and other standard methods in a buffer. Once the real `window.console` exists it forwards everything that’s been saved.


### Development

If you plan to work on this console shim you will need Node and npm installed.

To install dependencies and build, run:

```
$ npm start
```


### Licensing ###

This code is distributed under a <a href="http://creativecommons.org/licenses/by/3.0/">CC-BY</a> license.
