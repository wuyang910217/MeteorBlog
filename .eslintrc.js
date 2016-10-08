module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:meteor/recommended"],
  "parserOptions": {
    "allowImportExportEverywhere": true,
    "sourceType": "module"
  },
  "plugins": [
    "meteor"
  ],
  "settings": {
    "import/resolver": "meteor",
  },
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-extraneous-dependencies": [0],
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
    "dot-notation": [2, { "allowPattern": "^[a-z]+([\\s_-][a-zA-Z0-9]+)+$" }],
    "dot-location": [2, "property"],
    "no-else-return": [2],
    "array-bracket-spacing": [2, "always", {
      "singleValue": false,
      "objectsInArrays": false,
      "arraysInArrays": false
    }],
    "prefer-arrow-callback": [2],
    "prefer-spread": [2],
    "prefer-template": [2],
    "require-yield": [2],
    "no-unused-vars": [1]
  }
}
