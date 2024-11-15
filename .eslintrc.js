module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    node: true,
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
  ignorePatterns: ['storybook-static/', 'babel.config.js', 'metro.config.js'], // Certifique-se de que esta linha esteja presente
  rules: {
    // Desabilita a regra base
    'no-unused-vars': 'off',
    // Configura a regra do TypeScript
    '@typescript-eslint/no-unused-vars': [
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
      files: [
        '**/*.stories.*',
        '**/*.story.*',
        '**/*.tsx',
        'src/**/*tsx',
        '**/.storybook/**/*.*',
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off', // Desabilita a regra para esses arquivos
      },
    },
  ],
};
