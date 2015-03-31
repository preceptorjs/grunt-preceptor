Grunt-Preceptor
===============

Grunt plugin for Preceptor


[![Build Status](https://img.shields.io/travis/preceptorjs/grunt-preceptor.svg)](http://travis-ci.org/preceptorjs/grunt-preceptor)
[![Coveralls Coverage](https://img.shields.io/coveralls/preceptorjs/grunt-preceptor.svg)](https://coveralls.io/r/preceptorjs/grunt-preceptor)
[![Code Climate Grade](https://img.shields.io/codeclimate/github/preceptorjs/grunt-preceptor.svg)](https://codeclimate.com/github/preceptorjs/grunt-preceptor)

[![NPM version](https://badge.fury.io/js/grunt-preceptor.svg)](https://www.npmjs.com/package/grunt-preceptor)
[![NPM License](https://img.shields.io/npm/l/grunt-preceptor.svg)](https://www.npmjs.com/package/grunt-preceptor)

[![NPM](https://nodei.co/npm/grunt-preceptor.png?downloads=true&stars=true)](https://www.npmjs.com/package/grunt-preceptor)
[![NPM](https://nodei.co/npm-dl/grunt-preceptor.png?months=3&height=2)](https://www.npmjs.com/package/grunt-preceptor)

[![Coverage Report](https://img.shields.io/badge/Coverage_Report-Available-blue.svg)](http://preceptorjs.github.io/grunt-preceptor/coverage/lcov-report/)
[![API Documentation](https://img.shields.io/badge/API_Documentation-Available-blue.svg)](http://preceptorjs.github.io/grunt-preceptor/docs/)

[![Gitter Support](https://img.shields.io/badge/Support-Gitter_IM-yellow.svg)](https://gitter.im/preceptorjs/support)


**Table of Contents**
* [Installation](#installation)
* [Getting Started](#getting-started)
* [The "preceptor" Task](#the-preceptor-task)
    * [Overview](#overview)
    * [Options](#options)
    * [Usage Examples](#usage-examples)
* [Third-party libraries](#third-party-libraries)
* [License](#license)


##Installation

Install this module with the following command:
```shell
npm install grunt-preceptor
```

Add the module to your ```package.json``` dependencies:
```shell
npm install --save grunt-preceptor
```
Add the module to your ```package.json``` dev-dependencies:
```shell
npm install --save-dev grunt-preceptor
```

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.


## Getting Started

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```javascript
grunt.loadNpmTasks('grunt-preceptor');
```

## The "preceptor" task

### Overview
In your project's Gruntfile, add a section named `preceptor` to the data object passed into `grunt.initConfig()`.

```javascript
grunt.initConfig({
  preceptor: {
    your_target: {
      // Target-specific Preceptor options go here.
    },
  },
})
```


### Options

#### options.ruleBook
Type: `Object` **required**

Options that would be otherwise in a ```rule-book.js``` or ```rule-book.json```. 
You can also require the js or json file instead of adding here all the options.

#### options.profile
Type: `String` --optional--

Selects a profile in the root of the ```ruleBook``` option.

#### options.subProfile
Type: `String` --optional--

Selects a sub-profile in the root of the ```tasks``` object of the ```ruleBook``` option.

### Usage Examples

#### Default Options

You can supply the rule-book file in the options object of a task:

```javascript
grunt.initConfig({
  preceptor: {
  	ci: {
		options: {
			ruleBook: require('./rule-book.js')
		}
	}
  }
})
```

#### Inline Options 

You can supply the rule-book file in the options object of a task - in the following case for the ```preceptor:ci``` task:

```javascript
grunt.initConfig({
  preceptor: {
  	ci: {
		options: {
			ruleBook: {
				"configuration": {
					"reportManager": {
						"reporter": [
							{"type": "Spec"},
							{"type": "List", "progress": false}
						]
					}
				},

				"tasks": [
					...
				]
			}
		}
	}
  }
})
```

#### Profile and Sub-Profile Options

For multiple configurations, you can supply the profile or sub-profile options:

```javascript
grunt.initConfig({

  preceptor: {
  
  	ciSmoke: {
		options: {
		
			ruleBook: {
			
				"ci": { // "ci" profile (see example)
				
					"configuration": {
						"reportManager": {
							"reporter": [
								{"type": "Spec"},
								{"type": "List", "progress": false}
							]
						}
					},
	
					"tasks": {
					
						"smoke": [ // "smoke"-test sub-profile (see example)
							...
						]
					}
				}
			}
		}
	}
  }
})
```

##Third-party libraries

The following third-party libraries are used by this module:

###Dependencies
* preceptor: https://github.com/yahoo/preceptor

###Dev-Dependencies
* grunt: http://gruntjs.com
* chai: http://chaijs.com
* codeclimate-test-reporter: https://github.com/codeclimate/javascript-test-reporter
* coveralls: https://github.com/cainus/node-coveralls
* istanbul: https://github.com/gotwarlost/istanbul
* mocha: https://github.com/visionmedia/mocha
* sinon: http://sinonjs.org
* sinon-chai: https://github.com/domenic/sinon-chai
* yuidocjs: https://github.com/yui/yuidoc

##License

The MIT License

Copyright 2015 Marcel Erz
