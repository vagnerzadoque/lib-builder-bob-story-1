// .storybook/preview.tsx
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { buildTheme } from "../src/common/theme";
import type { Decorator } from '@storybook/react';


// Definição das marcas e modos disponíveis
const brands = [
  'aesop', 'avon', 'avon_v2', 'biome', 'natura', 'natura_v2', 'natura_v3',
  'theBodyShop','consultoriaDeBeleza', 'forcaDeVendas', 'casaEestilo', 'casaEestilo_v2'
];
const modes = ['light', 'dark'] as const;

// Construção dos temas para cada combinação de marca e modo
const themes = brands.reduce((acc: Record<string, any>, brand: any) => {
  acc[`${brand}_light`] = buildTheme(brand, 'light');
  acc[`${brand}_dark`] = buildTheme(brand, 'dark');
  return acc;
}, {});

// Definição dos parâmetros
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Definição dos globalTypes para a toolbar
export const globalTypes = {
  brand: {
    name: 'Brand',
    description: 'Selecione a marca',
    defaultValue: 'avon_v2', // Corrigido para 'avon_v2'
    toolbar: {
      icon: 'paintbrush',
      items: brands.map(brand => ({ value: brand, title: brand })),
    },
  },
  mode: {
    name: 'Mode',
    description: 'Selecione o modo de exibição',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: modes.map(mode => ({ value: mode, title: mode.charAt(0).toUpperCase() + mode.slice(1) })),
    },
  },
};

// Decorator para aplicar o tema selecionado
export const decorators: Decorator[] = [
  (Story, context) => {
    const { brand, mode } = context.globals;
    const themeKey = `${brand}_${mode}`;
    const selectedTheme = themes[themeKey] || themes['avon_v2_light']; // Fallback válido

    return (
      <ThemeProvider theme={selectedTheme}>
        <Story />
      </ThemeProvider>
    );
  },
];
