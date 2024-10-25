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
  webpackFinal: async (config: Configuration) => {
    // Alias para 'react-native-web'
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        'react-native$': 'react-native-web',
        'styled-components/native$': 'styled-components',
      },
    };

    // Incluir 'node_modules/react-native' na transpilação do Babel
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
        babelLoaderRule.include.push(/node_modules\/react-native/);
      } else {
        babelLoaderRule.include = [babelLoaderRule.include, /node_modules\/react-native/];
      }
    }

    return config;
  },
};

export default config;
