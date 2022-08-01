const sassResourcesLoader = require('craco-sass-resources-loader');
const pathToScssVars = `./src/app/styles`;

module.exports = {
	mode: "development",
	output: {
		path: __dirname,
	},
	plugins: [
		{
			plugin: sassResourcesLoader,
			options: {
				resources: [
					`${pathToScssVars}/_mixins.scss`,
					`${pathToScssVars}/_normalize.scss`,
					`${pathToScssVars}/_variables.scss`,
				],
			},
		},
	],
};
