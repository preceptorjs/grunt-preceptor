/**
 * Loads a profile from rulebook options
 *
 * @method loadProfile
 * @param {string|undefined} name Name of profile
 * @param {object} ruleBook Rulebook options
 * @return {object} Rulebook options filtered by profile
 */
var loadProfile = function (name, ruleBook) {

	var result = ruleBook;

	if (name) {

		if (ruleBook[name]) {
			result = ruleBook[name];
		} else {
			throw new Error('Could not find profile "' + name + '"');
		}
	}

	return result;
};

/**
 * Loads a sub-profile from rulebook options
 *
 * @method loadSubProfile
 * @param {string|undefined} name Name of sub-profile
 * @param {object} ruleBook Rulebook options
 * @return {object} Rulebook options filtered by sub-profile
 */
var loadSubProfile = function (name, ruleBook) {

	var result = ruleBook;

	if (name) {

		if (ruleBook.tasks[name]) {
			result.tasks = ruleBook.tasks[name];
		} else {
			throw new Error('Could not find sub-profile "' + name + '"');
		}
	}

	return result;
};


module.exports = {
	loadProfile: loadProfile,
	loadSubProfile: loadSubProfile
};
