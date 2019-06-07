module.exports = {

	"env": {
		"es6": true,
		"node": true,
		"browser": true
	},

	"parserOptions": {
		"ecmaVersion": 2017,
		"sourceType": "module",
		"ecmaFeatures": {
			"impliedStrict": true
		}
	},

	"globals": {},

	"extends": [
		// "eslint:recommended",
		"plugin:vue/recommended"
	],

	"rules": {

		// @override
		"semi": "warn",
		"indent": ["warn", "tab"],

		// @override - vue/recommended
		"vue/html-indent": ["warn", "tab"],

		// off
		"vue/require-prop-types": "off",
		"vue/max-attributes-per-line": "off",
		"vue/html-self-closing": "off",
		"vue/singleline-html-element-content-newline": "off",
		"no-console": "off"
	}
}
