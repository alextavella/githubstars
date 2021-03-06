module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["react-app", "airbnb", "prettier", "prettier/react"],
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
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["warn", { "extensions": [".jsx", ".js"] }],
    "import/prefer-default-export": "off",
    "react/no-array-index-key": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/forbid-foreign-prop-types": "off",
    "no-console": ["error", { "allow": ["tron"] }],
    "no-param-reassign": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  },
};
