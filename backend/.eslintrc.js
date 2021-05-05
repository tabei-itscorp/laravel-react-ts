module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    // ecmaFeatures: {
    //   "jsx": true,
    // },
    ecmaVersion: 2020,
    sourceType: 'module',
    // tsconfigRootDir: __dirname,
    // project: ['./tsconfig.eslint.json'],
  },
  plugins: [
    // '@typescript-eslint',
    'react',
  ],
  extends: [
    'eslint:recommended',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'prettier',
    // 'prettier/@typescript-eslint',
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
  },
};