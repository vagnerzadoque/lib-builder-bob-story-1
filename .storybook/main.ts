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
    config.resolve = {
      ...(config.resolve || {}),
      alias: {
        ...(config.resolve?.alias || {}),
        'react-native$': 'react-native-web',
        'styled-components/native$': 'styled-components',
      },
    };

    

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
        babelLoaderRule.include = [
          babelLoaderRule.include,
          /node_modules\/react-native/,
        ];
      }
    }

    return config;
  },
  managerHead: (head) => `
  ${head}
  <style>
    /* Menu dropdown do toolbar */
    .os-content button[role="menuitem"] {
      color: #CCCCCC; /* Cor do texto não selecionado */
      background-color: transparent; /* Fundo padrão */
      padding: 8px 12px;
      border-radius: 4px;
    }
    .os-content button[role="menuitem"]:hover {
      background-color: #444444; /* Fundo no hover */
      color: #FF4785; /* Cor do texto no hover */
    }
    .os-content button[role="menuitem"][aria-checked="true"] {
      background-color: #1EA7FD; /* Fundo do item selecionado */
      color: #FFFFFF; /* Cor do texto do item selecionado */
    }
  </style>
`,
};



export default config;
