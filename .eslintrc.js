/* eslint-disable*/

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    "comma-dangle": "off",
    'react/jsx-filename-extension': 'off',
    "react/default-props-match-prop-types": [
      "error",
      {
        "allowRequiredDefaults": true
      }
    ],
    "react/forbid-prop-types": "warn",
    "react/jsx-closing-bracket-location": [
      "error",
      {
        "selfClosing": "after-props",
        "nonEmpty": "after-props"
      }
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "jsx-ally/label-has-associated-control": 'off',
    "react/jsx-indent-props": ["error", 4],
    "react/jsx-one-expression-per-line": "warn",
    "react/no-did-update-set-state": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/prefer-stateless-function": "warn",
    "react/require-default-props": [
      "error",
      {
        "forbidDefaultForRequired": false,
      }
    ],
    "react/sort-comp": "off",
    "react/state-in-constructor": ["warn", "always"],
    "react/static-property-placement": ["error", "static public field"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-array-index-key": 'off'
  },
};

/* eslint-enable */
