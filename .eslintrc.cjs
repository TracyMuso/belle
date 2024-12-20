module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['plugin:react/recommended', 'react-hooks', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-definitions': ['off'],
    'import/no-anonymous-default-export': 'off',
    'import/extensions': 'off',
    'react/no-unescaped-entities': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
