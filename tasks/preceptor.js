'use strict';

var PreceptorManager = require('preceptor');
var profiles = require('../lib/profiles');

module.exports = function (grunt) {

  grunt.registerMultiTask('preceptor', 'Grunt plugin for Preceptor', function () {

	  var options,
		  ruleBook,
		  done,
		  manager;

	  // Get rule-book options
	  options = this.options();

	  ruleBook = profiles.loadProfile(options.profile, options.ruleBook);
	  ruleBook = profiles.loadSubProfile(options.subProfile, ruleBook);

	  // Mark task as async
	  done = this.async();

	  // Create Preceptor manager and run it
	  manager = new PreceptorManager(ruleBook);
	  manager.run().then(function () {
		  done(true);
	  }, function (err) {
		  done(err);
	  });
  });
};
