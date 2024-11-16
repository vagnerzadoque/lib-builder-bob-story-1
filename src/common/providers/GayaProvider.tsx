import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { buildTheme } from '../theme';
import { BrandTypes } from '../brandTypes';

export interface GayaProviderProps {
  brand: BrandTypes;
  children: React.ReactNode;
  mode?: 'light' | 'dark';
}

export const GayaProvider = ({
  brand,
  children,
  mode = 'light',
}: GayaProviderProps): JSX.Element => {
  const theme = buildTheme(brand, mode);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
