module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 自定义规则
    'no-misleading-character-class': 'off',
    'no-useless-escape': 'off',
    'no-prototype-builtins': 'off',
    'no-cond-assign': 'off',
    'no-empty': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['dist/**', 'node_modules/**', '*.min.js'],
};
