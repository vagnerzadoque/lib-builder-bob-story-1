import themes, {
  Theme as ExternalTheme,
} from '@naturacosmeticos/natds-themes/react-native';

export type Theme = ExternalTheme;
export type ThemeMode = 'dark' | 'light';
export type Brand =
  | 'aesop'
  | 'avon'
  | 'avon_v2'
  | 'avon_v3'
  | 'biome'
  | 'natura'
  | 'theBodyShop'
  | 'consultoriaDeBeleza'
  | 'consultoriaDeBeleza_v2'
  | 'forcaDeVendas'
  | 'forcaDeVendas_v2'
  | 'natura_v2'
  | 'natura_v3'
  | 'casaEestilo'
  | 'casaEestilo_v2';

export interface ThemeSelector {
  // eslint-disable-next-line no-unused-vars
  (theme: Theme): string | number | undefined;
}

export const buildTheme = (brand?: Brand, mode: ThemeMode = 'light') => {
  if (!brand || !mode)
    throw new Error(
      'No brand or mode found. To build a theme, you have to provide this.'
    );
  if (!themes)
    throw new Error(
      'Unable to load tokens dependency. Check the installation logs for errors'
    );

  return themes[brand][mode];
};

export const getTheme =
  (selector: ThemeSelector) =>
  ({ theme }: { theme: Theme }) =>
    selector(theme);

export const checkTheme = (theme: Theme) => {
  if (!theme)
    throw new Error('Can not find theme. Check your ThemeProvider setup');

  return theme;
};

export const buildColorWithOpacity = (
  colorSelector: string,
  opacitySelector: number
) => {
  const colorHex = colorSelector;
  const opacityScaleOne = opacitySelector;
  const opacityScaleHundred =
    opacityScaleOne && typeof opacityScaleOne === 'number'
      ? opacityScaleOne * 100
      : '';

  return `${colorHex}${opacityScaleHundred}`;
};
