import { buildTheme } from '../../common/theme';
import { BrandTypes } from '../../common/brandTypes';
import { SurfaceProps, ThemeTypes } from './GayaButton.styles';

export const getSelectTheme = (
  brand: BrandTypes | undefined,
  {
    theme,
    type,
    color,
    mode,
  }: Pick<SurfaceProps, 'type' | 'color' | 'mode'> & ThemeTypes
) => {
  if (brand) {
    const colorTheme = buildTheme(brand, mode);
    let propBrandsColor = {};
    if (type && color) {
      propBrandsColor = {
        back: colorTheme.button[type].color[color].background,
        border: colorTheme.button[type].color[color].border,
        label: colorTheme.button[type].color[color].label,
        buttonBorderRadius: colorTheme.button.borderRadius,
        textransform: colorTheme.button.textTransform as
          | 'uppercase'
          | 'lowercase'
          | 'capitalize',
      };
      return (
        type && {
          ...propBrandsColor,
        }
      );
    }
  }
  

    return (
      type &&
      color && {
        back: theme?.button[type].color[color].background,
        border: theme?.button[type].color[color].border,
        label: theme?.button[type].color[color].label,
        buttonBorderRadius: theme?.button.borderRadius,
        textransform: theme?.button.textTransform as
          | 'uppercase'
          | 'lowercase'
          | 'capitalize',
      }
    );
  
};

export const getButtonStylesBySize = ({
  size,
  theme,
  brand,
  mode,
}: Pick<SurfaceProps, 'size' | 'theme' | 'brand' | 'mode'>) => {
  if (brand) {
    const colorThemeBrand = buildTheme(brand, mode);
    const buttonSizesBrand = {
      large: {
        minHeight: colorThemeBrand.size.medium,
        paddingHorizontal: colorThemeBrand.spacing.small,
      },
      medium: {
        minHeight: colorThemeBrand.size.medium,
        paddingHorizontal: colorThemeBrand.spacing.small,
      },
      semi: {
        minHeight: colorThemeBrand.size.semi,
        paddingHorizontal: colorThemeBrand.spacing.micro,
      },
      semiX: {
        minHeight: colorThemeBrand.size.semiX,
        paddingHorizontal: colorThemeBrand.button.paddingX,
      },
      small: {
        minHeight: colorThemeBrand.size.semi,
        paddingHorizontal: colorThemeBrand.spacing.micro,
      },
    };
    return size && buttonSizesBrand[size];
  }


    const buttonSizes = {
      large: {
        minHeight: theme?.size.medium,
        paddingHorizontal: theme?.button.paddingX,
      },
      medium: {
        minHeight: theme?.size.medium,
        paddingHorizontal: theme?.button.paddingX,
      },
      semi: {
        minHeight: theme?.size.semi,
        paddingHorizontal: theme?.button.paddingX,
      },
      semiX: {
        minHeight: theme?.size.semiX,
        paddingHorizontal: theme?.button.paddingX,
      },
      small: {
        minHeight: theme?.size.semi,
        paddingHorizontal: theme?.button.paddingX,
      },
    };
    return size && buttonSizes[size];
  
};

export const getButtonShadowByType = ({
  disabled,
  theme,
  type,
}: Omit<SurfaceProps, 'size'>) =>
  type === 'contained' && !disabled ? ( theme ?theme.elevation.none: {elevation: 0}) : { elevation: 0 };
