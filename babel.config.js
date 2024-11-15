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
          runtime: 'automatic', // Adicione esta linha
        },
      ],
      '@babel/preset-typescript',
      // '@babel/preset-flow'
    );
  }

  return {
    presets,
    plugins: [
     
    ],
  };
};
