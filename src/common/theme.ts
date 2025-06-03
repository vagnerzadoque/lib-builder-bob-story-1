import themes, {
  Elevation,
  Theme as ExternalTheme,Size
} from '@naturacosmeticos/natds-themes/react-native';
import { Neutral } from '@naturacosmeticos/natds-themes'

import { Color } from '@naturacosmeticos/natds-themes/react-native'



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
getColor: () => string, getOpacityMedium: (theme: Theme) => number, theme: unknown, colorSelector: string, opacitySelector: number) => {
  const colorHex = colorSelector;
  const opacityScaleOne = opacitySelector;
  const opacityScaleHundred =
    opacityScaleOne && typeof opacityScaleOne === 'number'
      ? opacityScaleOne * 100
      : '';

  return `${colorHex}${opacityScaleHundred}`;
};


/* APAGAR */
const getColors = (theme: Theme) => checkTheme(theme).color
const getSpacings = (theme: Theme) => checkTheme(theme).spacing
const getOpacity = (theme: Theme) => checkTheme(theme).opacity
const getAssets = (theme: Theme) => checkTheme(theme).asset
const getBrandAssets = (theme: Theme) => getAssets(theme).brand



type BrandAssetsType = keyof Brand;
type NeutralBrandAssetsModel = keyof Neutral;

const getBrandAssetsByModel = (
  theme: Theme, type: BrandAssetsType, model: NeutralBrandAssetsModel
) => getBrandAssets(theme)[type][model]

export const getNeutralLogoA = (theme: Theme) => ({
  es: getBrandAssetsByModel(theme, 'neutral', 'a').es,
  file: getBrandAssetsByModel(theme, 'neutral', 'a').file,
  height: getBrandAssetsByModel(theme, 'neutral', 'a').height,
  pt: getBrandAssetsByModel(theme, 'neutral', 'a').pt,
  width: getBrandAssetsByModel(theme, 'neutral', 'a').width
})
export const getNeutralLogoB = (theme: Theme) => ({
  es: getBrandAssetsByModel(theme, 'neutral', 'b').es,
  file: getBrandAssetsByModel(theme, 'neutral', 'b').file,
  height: getBrandAssetsByModel(theme, 'neutral', 'b').height,
  pt: getBrandAssetsByModel(theme, 'neutral', 'b').pt,
  width: getBrandAssetsByModel(theme, 'neutral', 'b').width
})
export const getCustomLogoA = (theme: Theme) => ({
  es: getBrandAssetsByModel(theme, 'custom', 'a').es,
  file: getBrandAssetsByModel(theme, 'custom', 'a').file,
  height: getBrandAssetsByModel(theme, 'custom', 'a').height,
  pt: getBrandAssetsByModel(theme, 'custom', 'a').pt,
  width: getBrandAssetsByModel(theme, 'custom', 'a').width
})
export const getCustomLogoB = (theme: Theme) => ({
  es: getBrandAssetsByModel(theme, 'custom', 'b').es,
  file: getBrandAssetsByModel(theme, 'custom', 'b').file,
  height: getBrandAssetsByModel(theme, 'custom', 'b').height,
  pt: getBrandAssetsByModel(theme, 'custom', 'b').pt,
  width: getBrandAssetsByModel(theme, 'custom', 'b').width
})


export const getSize = (theme: Theme, size: keyof Size) => checkTheme(theme).size[size]
export const getOpacityMediumLow = (theme: Theme) => getOpacity(theme).mediumLow
export const getOpacityMedium = (theme: Theme) => getOpacity(theme).medium

export const getColorPrimary = (theme: Theme) => getColors(theme).primary
export const getColorOnPrimary = (theme: Theme) => getColors(theme).onPrimary
export const getColorPrimaryLight = (theme: Theme) => getColors(theme).primaryLight

export const getColorSecondary = (theme: Theme) => getColors(theme).secondary
export const getColorOnSecondary = (theme: Theme) => getColors(theme).onSecondary

export const getColorBackground = (theme: Theme) => getColors(theme).background
export const getColorOnBackground = (theme: Theme) => getColors(theme).onBackground

export const getColorSuccess = (theme: Theme) => getColors(theme).success
export const getColorOnSuccess = (theme: Theme) => getColors(theme).onSuccess

export const getColorAlert = (theme: Theme) => getColors(theme).alert
export const getColorOnAlert = (theme: Theme) => getColors(theme).onAlert

export const getColorLowEmphasis = (theme: Theme) => getColors(theme).lowEmphasis
export const getColorMediumEmphasis = (theme: Theme) => getColors(theme).mediumEmphasis
export const getColorHighEmphasis = (theme: Theme) => getColors(theme).highEmphasis

export const getColorSurface = (theme: Theme) => getColors(theme).surface

export const getColorOnSurface = (theme: Theme) => getColors(theme).onSurface

export const getColorHighlight = (theme: Theme) => getColors(theme).highlight

export const getColorLink = (theme: Theme) => getColors(theme).link

export const getColorByName = (theme: Theme, colorName: keyof Color) => getColors(theme)[colorName]

export const getSpacingTiny = (theme: Theme) => getSpacings(theme).tiny



const getElevation = (theme: Theme) => checkTheme(theme).elevation

export const getShadowBySize = (theme: Theme, size: keyof Elevation) => {
  const {
    elevation,
    shadowColor,
    shadowOffsetHeight,
    shadowOffsetWidth,
    shadowOpacity,
    shadowRadius
  } = getElevation(theme)[size]

  return {
    elevation,
    shadowColor,
    shadowOffset: `${shadowOffsetWidth}px ${shadowOffsetHeight}px`,
    shadowOpacity,
    shadowRadius
  }
}