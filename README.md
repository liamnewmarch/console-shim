`console()` shim
============

Some browsers require their developer tools to be open before `console.log()` is available ([particularly IE9](http://stackoverflow.com/questions/8095348/website-with-js-doesnt-work-in-ie9-until-the-developer-tools-is-activated/9227381#9227381)). This is a (tiny!) shim that:

* Allows developers to use `console.log`, `console.error`, `console.warn` and `console.info` as normal
* Stores all log data in a buffer
* Checks every 1000ms for the existance of the native developer tools and outputs the buffer

### Help me debug ###

I've only used this script on IE9 - can you help me test IE10 and IE11? Create an issue or fire a tweet at <a href="https://twitter.com/liamnewmarch">@liamnewmarch</a>.

### Licensing ###

This code is distributed under a <a href="http://creativecommons.org/licenses/by/3.0/">CC-BY</a> license.
