module.exports = (api) => {
  api.cache(true);

  const presets = [];

  if (process.env.BABEL_ENV === 'production') {
    presets.push([
      'module:react-native-builder-bob/babel-preset',
      { modules: 'commonjs' },
    ]);
  } else {
    presets.push(
      'module:metro-react-native-babel-preset', // Adicionado
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      '@babel/preset-typescript'
    );
  }

  return {
    presets,
    plugins: [],
  };
};
