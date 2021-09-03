module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: [
		'@typescript-eslint/eslint-plugin',
	],
	extends: [
		'eslint:recommended', // node_modules/eslint/conf/eslint-recommended.js
		'plugin:@typescript-eslint/recommended', // node_modules/@typescript-eslint/eslint-plugin/dist/index.js
	],
	rules: {
		/**
		 * The rule being disabled by `plugin:@typescript-eslint/recommended`
		 * see https://stackoverflow.com/questions/65054079/eslint-with-typescript-and-firebase-no-undef-error
		 * still no idea why it says 'TypeScript just does this significantly better'
		 */
		// 'no-undef': 2,
		// 'no-multi-spaces': 2
	},
	env: {
		// es6: true, // alias of 'es2015'
		// es2017: true,
		node: true, // `module.exports`
		// browser: true, // `window`
	},
};
