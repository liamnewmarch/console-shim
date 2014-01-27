### https://github.com/liamnewmarch/console-shim 2014 CC-BY @liamnewmarch ###

# If the console exists, don't shim it
unless 'console' of window then do ->
	
	Console = ->

		# __buffer holds log messages
		@__buffer = []

		# log() adds messages to __buffer
		log = -> @__buffer.push arguments

		# add public methods to console for log, error, warn and info
		@[key] = log for key in 'log error warn info'.split()

		# Check every second to check if the real console exists
		check = setInterval ->

			# console.__buffer won't exist on the real console
			if window.console?.log? and not console.__buffer
				
				# Stop checking
				clearInterval check

				# Get the real console.log
				func = if Function::bind
					Function::bind.call console.log, console
				else
					console.log
				
				# Output everything in __buffer to the console
				for data in __console.__buffer
					func.apply console, data

			return
		, 1000

		return

	# Expose
	__console = window.console = new Console()