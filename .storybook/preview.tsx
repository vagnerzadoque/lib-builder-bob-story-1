import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { buildTheme } from '../src/common/theme';
import type { Decorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

const brands = [
  'aesop',
  'avon',
  'avon_v2',
  'biome',
  'natura',
  'natura_v2',
  'natura_v3',
  'theBodyShop',
  'consultoriaDeBeleza',
  'forcaDeVendas',
  'casaEestilo',
  'casaEestilo_v2',
];
const modes = ['light', 'dark'] as const;

const themes = brands.reduce((acc: Record<string, any>, brand: any) => {
  acc[`${brand}_light`] = buildTheme(brand, 'light');
  acc[`${brand}_dark`] = buildTheme(brand, 'dark');
  return acc;
}, {});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const globalTypes = {
  brand: {
    name: 'Brand',
    description: 'Selecione a marca',
    defaultValue: 'natura_v3',
    toolbar: {
      icon: 'paintbrush',
      items: brands.map((brand) => ({ value: brand, title: brand })),
    },
  },
  mode: {
    name: 'Mode',
    description: 'Selecione o modo de exibição',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: modes.map((mode) => ({
        value: mode,
        title: mode.charAt(0).toUpperCase() + mode.slice(1),
      })),
    },
  },
};

export const decorators: Decorator[] = [
  (storyFn, context) => withConsole()(storyFn)(context),
  (Story, context) => {
    const { brand, mode } = context.globals;
    const themeKey = `${brand}_${mode}`;
    const selectedTheme = themes[themeKey] || themes['natura_v3_light'];

    return (
      <ThemeProvider theme={selectedTheme}>
        <Story />
      </ThemeProvider>
    );
  },
];
