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
		 * In 'eslint:recommended', "no-undef" is "error",
		 * 'plugin:@typescript-eslint/recommended' disabled this rule and use its own rule but set 'warn'
		 * This is why there is no 'error' for "no-undef", looks like being turn off
		 * See https://stackoverflow.com/questions/65054079/eslint-with-typescript-and-firebase-no-undef-error
		 * No idea why it says 'TypeScript just does this significantly better'
		 */
		// 'no-undef': 2,
		// 'no-multi-spaces': 2
		'@typescript-eslint/no-unused-vars': 2, // override 'plugin:@typescript-eslint/recommended'
	},
	env: {
		// es6: true, // alias of 'es2015'
		// es2017: true,
		node: true, // `module.exports`
		// browser: true, // `window`
	},
};
