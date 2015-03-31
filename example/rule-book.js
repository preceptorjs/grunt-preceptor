module.exports = {

	"ci": { // "ci" profile

		"configuration": {
			"reportManager": {
				"reporter": [
					{"type": "Spec"},
					{"type": "List", "progress": false}
				]
			}
		},

		"tasks": {

			"smoke": [ // "smoke"-test sub-profile

				{
					"type": "shell",
					"title": "Example shell task",

					"suite": true,

					"configuration": {
						"cwd": __dirname,
						"cmd": "date > date.txt"
					}
				}
			]
		}
	}
};
