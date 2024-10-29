import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { buildTheme } from '../theme';
import { BrandTypes } from '../brandTypes';

export interface GayaProviderProps {
  brand: BrandTypes;
  mode: 'light' | 'dark';
  children: React.ReactNode;
}

export const GayaProvider = ({
  children,
  brand,
  mode,
}: GayaProviderProps): JSX.Element => {
  const selectedTheme = buildTheme(brand, mode);

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
};
