import React from 'react';
import { buildTheme } from '../src/common/theme';
import type { Decorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import { GayaProvider } from '../src/common/providers/GayaProvider';
import {brands} from '../src/common/brandTypes'

const modes = ['light', 'dark'] as const;

const themes = brands.reduce((acc: Record<string, any>, brand: any) => {
  acc[`${brand.value}_light`] = buildTheme(brand.value, 'light');
  acc[`${brand.value}_dark`] = buildTheme(brand.value, 'dark');
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
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#FFFFFF' },
      { name: 'dark', value: '#000000' },
    ],
  },
};

export const globalTypes = {
  brand: {
    name: 'Brand',
    description: 'Selecione a marca',
    defaultValue: 'natura_v3',
    toolbar: {
      icon: 'paintbrush',
      items: brands.map((brand) => ({ value: brand.value, title: brand.name })),
    },
  },

};

export const decorators: Decorator[] = [
  (storyFn, context) => withConsole()(storyFn)(context),
  (Story, context) => {
    const { brand } = context.globals;
    const backgroundValue = context.globals.backgrounds?.value;

    // Determinar o modo com base no background selecionado
    const mode = backgroundValue === '#000000' ? 'dark' : 'light';




    return (
      <GayaProvider brand={brand ?? 'natura_v3'} mode={mode}>
        <Story />
      </GayaProvider>
    );
  },
];
