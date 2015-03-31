
var expect = require('chai').expect;

var profiles = require('../lib/profiles');

describe('Profiles', function () {

	describe('loadProfile', function () {

		before(function () {
			this.options1 = {
				"ci": { // "ci" profile
					"configuration": {},
					"tasks": [
						{ "task": "shell", "name": "test1" }
					]
				}
			};
			this.options2 = {
				"configuration": {},
				"tasks": [
					{ "task": "shell", "name": "test1" }
				]
			};
		});

		it('should load a profile', function () {
			var options = profiles.loadProfile('ci', this.options1);
			expect(options).to.be.deep.equal(this.options2);
		});

		it('should fail with unknown profile', function () {
			try {
				profiles.loadProfile('dev', this.options1);
			} catch (err) {
				return;
			}
			throw new Error('Unexpected behavior.');
		});

		it('should ignore when no profile given', function () {
			var options = profiles.loadProfile(undefined, this.options2);
			expect(options).to.be.deep.equal(this.options2);
		});
	});

	describe('loadSubProfile', function () {

		before(function () {
			this.options1 = {
				"configuration": {},
				"tasks": {
					"smoke": [
						{"task": "shell", "name": "test1"}
					]
				}
			};
			this.options2 = {
				"configuration": {},
				"tasks": [
					{ "task": "shell", "name": "test1" }
				]
			};
		});

		it('should load a profile', function () {
			var options = profiles.loadSubProfile('smoke', this.options1);
			expect(options).to.be.deep.equal(this.options2);
		});

		it('should fail with unknown profile', function () {
			try {
				profiles.loadSubProfile('acceptance', this.options1);
			} catch (err) {
				return;
			}
			throw new Error('Unexpected behavior.');
		});

		it('should ignore when no profile given', function () {
			var options = profiles.loadSubProfile(undefined, this.options2);
			expect(options).to.be.deep.equal(this.options2);
		});
	});
});
