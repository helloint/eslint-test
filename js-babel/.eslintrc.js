module.exports = {
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,	// for babel parser
		sourceType: 'module', // included in airbnb
		// ecmaVersion: 2015 // included in 'env.es6'
	},
	settings: {
		react: {
			version: 'detect',
		}
	},
	plugins: [
		'eslint-plugin-react',
		'eslint-plugin-jsx-a11y',
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
		/**
		 * The rule being disabled by `plugin:@typescript-eslint/recommended`
		 * see
		 * https://stackoverflow.com/questions/65054079/eslint-with-typescript-and-firebase-no-undef-error
		 * still no idea why it says 'TypeScript just does this significantly better'
		 */
		// 'no-undef': 2,
	},
	env: {
		// es6: true, // Allow: 'Symbol'. alias of 'es2015'
		// es2017: true,
		es2020: true, // Allow: BigInt(including literal: 1n)
		// es2021: true, // Allow: String.prototype.replaceAll
		node: true, // Allow: `module.exports`
		browser: true, // Allow: `window`, `alert`
	},
};
