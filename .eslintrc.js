module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2017,
		sourceType: 'module',
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: [
		'eslint:recommended',
		'plugin:vue/recommended',
	],
	// required to lint *.vue files
	plugins: [
		'vue',
	],
	env: {
		browser: true,
		jest: true,
	},
	// add your custom rules here
	rules: {
		'no-prototype-builtins': 'off',
		'vue/no-unused-vars': 'off',
		'vue/no-use-v-if-with-v-for': 'warn',
		"no-unused-vars": ["warn"],
		"no-mixed-spaces-and-tabs": "warn",
		"vue/valid-template-root": "warn",
		"vue/no-unused-components": "warn",
		"vue/singleline-html-element-content-newline": "off",
		"vue/require-default-prop": "off",
		"vue/space-unary-ops": "warn",
		"semi": ["warn", "always"],
		"semi-style": ["warn", "last"],
		"semi-spacing": ["warn", {"before": false, "after": true}],
		"vue/max-len": ["warn", {
			"code": 120,
			"template": 120,
			"tabWidth": 4,
			"comments": 120,
			"ignorePattern": "",
			"ignoreComments": true,
			"ignoreTrailingComments": true,
			"ignoreUrls": true,
			"ignoreStrings": true,
			"ignoreTemplateLiterals": false,
			"ignoreRegExpLiterals": false,
			"ignoreHTMLAttributeValues": true,
			"ignoreHTMLTextContents": false,
		}],
		"vue/html-indent": ["warn", "tab", {
			"attribute": 1,
			"baseIndent": 1,
			"closeBracket": 0,
			"alignAttributesVertically": true,
			"ignores": []
		}],
		"brace-style": ["warn", "allman"],
		"indent": ["warn", "tab", {"SwitchCase": 1}],
		"vue/html-closing-bracket-newline": ["warn", {
			"singleline": "never",
			"multiline": "never"
		}],
		'vue/no-reserved-keys': 'warn',
		'no-empty': 'off',
    
	}
};
