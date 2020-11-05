const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	extends: ['airbnb', 'prettier', 'prettier/react'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				paths: ['src'],
				extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
			},
		},
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'arrow-body-style': [2, 'as-needed'],
		'arrow-parens': 0,
		'brace-style': 0,
		'class-methods-use-this': 0,
		'comma-dangle': ['off', 'never'],
		'linebreak-style': ['off', 'windows'],
		'import/imports-first': 0,
		'import/newline-after-import': 0,
		'import/no-dynamic-require': 0,
		'import/no-extraneous-dependencies': 0,
		'import/no-named-as-default': 0,
		'import/no-unresolved': "off",
		'import/prefer-default-export': 0,
		'import/no-webpack-loader-syntax': 0,
		indent: 0,
		'jsx-a11y/alt-text': 2,
		'jsx-a11y/aria-props': 2,
		'jsx-a11y/click-events-have-key-events': 2,
		'jsx-a11y/heading-has-content': 0,
		'jsx-a11y/html-has-lang': 2,
		'jsx-a11y/href-no-hash': 'off',
		'jsx-a11y/label-has-associated-control': [
			2,
			{
				// NOTE: If this error triggers, either disable it or add
				// your custom components, labels and attributes via these options
				// See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
				controlComponents: ['Input'],
			},
		],
		'jsx-a11y/label-has-for': 0,
		'jsx-a11y/mouse-events-have-key-events': 2,
		'jsx-a11y/no-autofocus': 2,
		'jsx-a11y/role-has-required-aria-props': 2,
		'jsx-a11y/role-supports-aria-props': 2,
		'max-len': 0,
		'max-lines': ['warn', 450],
		'newline-per-chained-call': 0,
		'no-confusing-arrow': 0,
		'no-console': 2,
		'no-unused-vars': 2,
		'no-use-before-define': 0,
		'object-curly-newline': 'off',
		'prefer-destructuring': [
			'warn',
			{
				array: false,
				object: true,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		'prefer-template': 2,
		'prettier/prettier': ['error', prettierOptions],
		'react/no-danger': 0,
		'react/no-multi-comp': 2,
		'react/require-default-props': 2,
		'react/jsx-no-target-blank': 2,
		'react/destructuring-assignment': 0,
		'react/jsx-closing-tag-location': 0,
		'react/forbid-prop-types': [
			'error',
			{
				forbid: ['any'],
				checkContextTypes: true,
				checkChildContextTypes: true,
			},
		],
		'react/jsx-first-prop-new-line': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-uses-vars': 2,
		'react/require-extension': 0,
		'react/self-closing-comp': 0,
		'react/sort-comp': 0,
		"import/extensions": "off"
	},
};
