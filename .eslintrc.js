module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
  node: true
},
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Outras regras
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        varsIgnorePattern: '^React$',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'react/jsx-uses-react': 'off', // Desabilita a verificação do uso do React em JSX
    'react/react-in-jsx-scope': 'off', // Desabilita a exigência de React no escopo
  },
  overrides: [
    {
      files: ['**/*.stories.*', '**/*.story.*', '**/*.tsx', 'src/**/*tsx', '**/.storybook/**/*.*'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
};
