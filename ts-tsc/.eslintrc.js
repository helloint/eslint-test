module.exports = {
	root: true,
	env: {
		// es6: true, // alias of 'es2015'
		// es2017: true,
		node: true, // `module.exports`
		// browser: true, // `window`
	},
	extends: [
		'eslint:recommended', // node_modules/eslint/conf/eslint-recommended.js
		'plugin:@typescript-eslint/recommended', // node_modules/@typescript-eslint/eslint-plugin/dist/index.js
		'plugin:react/recommended', // node_modules/eslint-plugin-react/index.js
		'plugin:jsx-a11y/recommended', // node_modules/eslint-plugin-jsx-a11y/lib/index.js
		// 'airbnb',
		// 'airbnb-typescript',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		/**
		 * Enable 'project' option to resolve the issue:
		 *  Error while loading rule '@typescript-eslint/dot-notation': You have used a rule which
		 *  requires parserServices to be generated. You must therefore provide a value for the
		 *  "parserOptions.project" property for @typescript-eslint/parser.
		 * Note: This rule is enabled in `airbnb-typescript`
		 */
		// project: ['tsconfig.json'],
	},
	plugins: [
		'@typescript-eslint/eslint-plugin',
	],
	settings: {
		'react': {
			'version': 'detect',
		}
	},
	rules: {
		'linebreak-style': 0, // airbnb set to 'LF', not friendly to Windows which by default use CRLF from github clone
		'no-tabs': 0,
		'react/jsx-indent': [2, 'tab'], // airbnb set to '[2, 2]', conflict with 'indent' setting
		'@typescript-eslint/indent': [2, 'tab'],
		quotes: [2, 'single'],
		/**
		 * In 'eslint:recommended', "no-undef" is "error",
		 * 'plugin:@typescript-eslint/recommended' disabled this rule and use its own rule but set
		 * 'warn' This is why there is no 'error' for "no-undef", looks like being turn off.
		 * See:
		 * https://stackoverflow.com/questions/65054079/eslint-with-typescript-and-firebase-no-undef-error
		 * No idea why it says 'TypeScript just does this significantly better'
		 */
		// 'no-undef': 2,
		// 'no-multi-spaces': 2
		'@typescript-eslint/no-unused-vars': 2, // override 'plugin:@typescript-eslint/recommended'
		'no-shadow': 0,
		'@typescript-eslint/no-shadow': 2,
	},
};
