module.exports = {
	root: true,
	env: {
		// es6: true, // Allow: 'Symbol'. alias of 'es2015'
		// es2017: true,
		es2020: true, // Allow: BigInt(including literal: 1n)
		// es2021: true, // Allow: String.prototype.replaceAll
		node: true, // Allow: `module.exports`
		browser: true, // Allow: `window`, `alert`
	},
	extends: [
		'eslint:recommended', // node_modules/eslint/conf/eslint-recommended.js
		'plugin:react/recommended', // node_modules/eslint-plugin-react/index.js
		'plugin:jsx-a11y/recommended', // node_modules/eslint-plugin-jsx-a11y/lib/index.js
		// 'airbnb',
	],
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,	// for babel parser
		sourceType: 'module', // included in airbnb
		// ecmaVersion: 2015 // included in 'env.es6'
	},
	plugins: [
		'eslint-plugin-react',
		'eslint-plugin-jsx-a11y',
	],
	settings: {
		react: {
			version: 'detect',
		}
	},
	rules: {
		'linebreak-style': 0, // airbnb set to 'LF', not friendly to Windows which by default use CRLF from github clone
		'no-tabs': 0,
		indent: [2, 'tab'],
		'react/jsx-indent': [2, 'tab'], // airbnb set to '[2, 2]', conflict with 'indent' setting
		quotes: [2, 'single'],
		/**
		 * The rule being disabled by `plugin:@typescript-eslint/recommended`
		 * see
		 * https://stackoverflow.com/questions/65054079/eslint-with-typescript-and-firebase-no-undef-error
		 * still no idea why it says 'TypeScript just does this significantly better'
		 */
		// 'no-undef': 2,
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'ForOfStatement',
				message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
	},
};
