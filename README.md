# Test ESLint with different language environment

## JavaScript (JSX) compile with Babel
`/js-babel/`
```
{
  // parser: '@babel/eslint-parser',
  parserOptions: {
    // requireConfigFile: false, // for babel parser
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
    // 'airbnb',
    'eslint:recommended', // node_modules/eslint/conf/eslint-recommended.js
    'plugin:react/recommended', // node_modules/eslint-plugin-react/index.js
    'plugin:jsx-a11y/recommended' // node_modules/eslint-plugin-jsx-a11y/lib/index.js
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
}
```

## TypeScript (JSX) compile with TSC
`/ts-tsc/`
```
{
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
    // es2017: true,
    node: true, // `module.exports`
    // browser: true, // `window`
  },
}
```

## JavaScript + TypeScript (JSX) compile with Babel
`/tsjs-babel-tsc/`
```
{
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 10,
    ecmaFeatures: {
      'jsx': true
    },
  },
  settings: {
    react: {
      version: 'detect',
    }
  },
  plugins: [
    'react',
  ],
  extends: [
    'eslint:recommended', // node_modules/eslint/conf/eslint-recommended.js
    'plugin:react/recommended', // node_modules/eslint-plugin-react/index.js
  ],
  rules: {
    'linebreak-style': 0, // airbnb set to 'LF', not friendly to Windows which by default use CRLF from github clone
    'no-tabs': 0,
    indent: [2, 'tab'],
    'react/jsx-indent': [2, 'tab'], // airbnb set to '[2, 2]', conflict with 'indent' setting
    quotes: [2, 'single'],
    /**
     * The rule being disabled by `plugin:@typescript-eslint/recommended`
     * see https://stackoverflow.com/questions/65054079/eslint-with-typescript-and-firebase-no-undef-error
     * still no idea why it says 'TypeScript just does this significantly better'
     */
    // 'no-undef': 2,
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
      plugins: [
        '@typescript-eslint/eslint-plugin',
      ],
      files: ['*.{ts,tsx}'],
      extends: [
        'plugin:@typescript-eslint/recommended', // node_modules/@typescript-eslint/eslint-plugin/dist/index.js
      ],
    }
  ],
}
```
