module.exports = {
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 10,
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: [
		'react',
	],
	extends: [
		'eslint:recommended', // node_modules/eslint/conf/eslint-recommended.js
		'plugin:react/recommended', // node_modules/eslint-plugin-react/index.js
		'plugin:jsx-a11y/recommended', // node_modules/eslint-plugin-jsx-a11y/lib/index.js
		// 'airbnb',
	],
	rules: {
		'linebreak-style': 0, // airbnb set to 'LF', not friendly to Windows which by default use CRLF from github clone
		'no-tabs': 0,
		indent: [2, 'tab'],
		'react/jsx-indent': [2, 'tab'], // airbnb set to '[2, 2]', conflict with 'indent' setting
		quotes: [2, 'single'],
		'no-multi-spaces': [2, {
			ignoreEOLComments: false,
		}],
	},
	env: {
		// es6: true, // Allow: 'Symbol'. alias of 'es2015'
		// es2017: true,
		es2020: true, // Allow: BigInt(including literal: 1n)
		// es2021: true, // Allow: String.prototype.replaceAll
		node: true, // Allow: `module.exports`
		browser: true, // Allow: `window`, `alert`
	},
	overrides: [
		{
			parser: '@typescript-eslint/parser',
			parserOptions: {
				/**
				 * Resolve issue:
				 * Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which
				 * requires parserServices to be generated. You must therefore provide a value for the
				 * "parserOptions.project" property for @typescript-e slint/parser.
				 * This rule is enabled in `airbnb-typescript`
				 */
				project: ['tsconfig.json'],
			},
			plugins: [
				'@typescript-eslint/eslint-plugin',
			],
			files: ['*.{ts,tsx}'],
			extends: [
				'plugin:@typescript-eslint/recommended', // node_modules/@typescript-eslint/eslint-plugin/dist/index.js
				// 'airbnb-typescript',
			],
			rules: {
				'@typescript-eslint/indent': [2, 'tab'],
				'@typescript-eslint/no-unused-vars': 2,
			},
		},
	],
};
