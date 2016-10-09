module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "allowImportExportEverywhere": true,
    "sourceType": "module"
  },
  "plugins": ["react","jsx-a11y"],
  "rules": {
    "indent": [2, 2, { "SwitchCase": 1 }],
    "linebreak-style": [2, "unix"],
    "quotes": [2, "single"],
    "semi": [2, "always"],
    "no-console": [1],
    "no-var": [2],
    "prefer-const": [2],
    "arrow-parens": [2, "always"],
    "arrow-spacing": [2, { "before": true, "after": true }],
    "space-in-parens": [2, "never"],
    "object-shorthand": [2, "always"],
    "constructor-super": [2],
    "no-this-before-super": [2],
    "camelcase": 2,
    "no-else-return": [2],
    "prefer-arrow-callback": [2],
    "prefer-template": [2],
  }
}
