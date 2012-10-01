`console()` shim
============

Some browsers require their developer tools to be open before `console.log()` is available (particularly IE9). This is a (tiny!) shim that:

* Allows developers to use `console.log`, `console.error`, `console.warn` and `console.info` as normal
* Stores all log data in a buffer
* Checks every 1000ms for the existance of the native developer tools and outputs the buffer

### Help me debug ###

I've only used this script on IE9 - can you help me test IE10? Let me know if this shim is needed, and whether it works.
