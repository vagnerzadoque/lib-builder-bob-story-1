module.exports = {
    preset: 'react-native',
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
      'node_modules/(?!(react-native' +
        '|@react-native' +
        '|@react-native-community' +
        '|@react-native/js-polyfills' +
        ')/)',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  };
  