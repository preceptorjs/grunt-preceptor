var path = require('path');

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		preceptor: {
			aTask: {
				options: {
					profile: 'ci',
					subProfile: 'smoke',
					ruleBook: require('./rule-book.js')
				}
			}
		}
	});

	// Load local tasks.
	grunt.loadTasks(path.join(__dirname, '..', 'tasks'));

	// Default task.
	grunt.registerTask('default', 'preceptor');
};
