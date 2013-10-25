if (!('console' in window)) (function() {

	var __console, Console, log;

	Console = function() {
		var check = setInterval(function() {
			var func, i;
			if (window.console && console.log && !console.__buffer) {
				clearInterval(check);
				if (Function.prototype.bind) {
					Function.prototype.bind.call(console.log, console);
				} else {
					func = console.log;
				}
				for (i = 0; i < __console.__buffer.length; i++) {
					func.apply(console, __console.__buffer[i]);
				}
			}
		}, 1000);

		log = function() {
			this.__buffer.push(arguments);
		};

		this.log = log;
		this.error = log;
		this.warn = log;
		this.info = log;
		this.__buffer = [];
	};

	__console = window.console = new Console();
}());