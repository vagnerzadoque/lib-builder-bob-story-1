import '@storybook/addon-console';
import type { StorybookConfig } from '@storybook/react-webpack5';
import { join, dirname } from 'path';
import type { Configuration, RuleSetRule } from 'webpack';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      savePropValueAsString: true,
      propFilter: (prop) => {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    },
  },
  webpackFinal: async (config: Configuration) => {
    // 1) Ajuste aliases para Web
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        'react-native$': 'react-native-web',
        'styled-components/native$': 'styled-components',
        'react-native-svg': 'react-native-svg-web',
      },
    };

    // 2) Localize a regra que processa .js e inclua 'react-native' se necessário
    //    (Alguns setups do Storybook já vêm com Babel, mas sem incluir react-native)
    const babelLoaderRule = config.module?.rules?.find(
      (rule) =>
        typeof rule !== 'string' &&
        rule !== null &&
        (rule as RuleSetRule).test instanceof RegExp &&
        ((rule as RuleSetRule).test as RegExp).test('.js')
    ) as RuleSetRule | undefined;

    if (babelLoaderRule) {
      if (!babelLoaderRule.include) {
        babelLoaderRule.include = [];
      }
      if (Array.isArray(babelLoaderRule.include)) {
        // Adicione o react-native e (opcional) react-native-svg
        babelLoaderRule.include.push(/node_modules\/react-native/);
        babelLoaderRule.include.push(/node_modules\/react-native-svg/);
      } else {
        babelLoaderRule.include = [
          babelLoaderRule.include,
          /node_modules\/react-native/,
          /node_modules\/react-native-svg/,
        ];
      }
    }

    // 3) Adicione também uma regra explícita para .js dentro de node_modules/react-native,
    //    usando babel-loader + metro preset. Isso garante que a sintaxe Flow/Type seja removida.
    config.module?.rules?.push({
      test: /\.m?js$/,
      include: /node_modules\/(react-native|react-native-svg)/,
      use: {
        loader: 'babel-loader',
        options: {
          // O preset que sabe lidar com Flow e "import type" de RN
          presets: ['module:metro-react-native-babel-preset'],
        },
      },
    });

    return config;
  },
};

export default config;
