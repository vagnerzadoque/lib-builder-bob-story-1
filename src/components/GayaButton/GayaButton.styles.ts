import styled from 'styled-components/native';
import { StyleProp, TextStyle } from 'react-native';
// import { Theme } from "../../common/theme";
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { GayaButtonProps } from './GayaButton.props';
import {
  getSelectTheme,
  getButtonStylesBySize,
  getButtonShadowByType,
} from './GayaButton.utils';

export type ThemeTypes = {
  theme?: Theme;
  textLabelStyle?: StyleProp<TextStyle>;
};

export type ILabelContainer = {
  iconPosition: 'left' | 'right';
} & ThemeTypes;

export type SurfaceProps = Pick<
  GayaButtonProps,
  'type' | 'disabled' | 'size' | 'brand' | 'color' | 'mode'
> &
  ThemeTypes;
type LabelProps = Pick<
  GayaButtonProps,
  | 'iconName'
  | 'iconPosition'
  | 'disabled'
  | 'type'
  | 'brand'
  | 'textTransform'
  | 'color'
  | 'mode'
> &
  ThemeTypes;

export const LabelContainer = styled.View<ILabelContainer>(
  ({ iconPosition }) => ({
    alignItems: 'center',
    flexDirection: iconPosition === 'right' ? 'row' : 'row-reverse',
  })
);

// export const LabelText = styled.Text<LabelProps>`
//     color: ${({ disabled, theme, type, color, mode, brand }) => disabled ? theme.color.onSurfaceDisabled : getSelectTheme(brand, {
//     theme, type, color, mode
//     })?.label};

//     text-transform: ${({ textTransform, theme, type, color, mode, brand }) => textTransform || getSelectTheme(brand, {
//     theme, type, color, mode
//     })?.textransform};

//   `

export const LabelText = styled.Text<LabelProps>(
  ({
    iconName,
    iconPosition,
    type,
    color,
    theme,
    brand,
    mode,
    textTransform,
    disabled = false,
  }) => ({
    color: disabled
      ? theme.color.onSurfaceDisabled
      : getSelectTheme(brand, {
          theme,
          type,
          color,
          mode,
        })?.label,
    fontFamily: theme.button.label.primary.fontFamily,
    fontSize: theme.button.label.fontSize,
    fontWeight: theme.button.label.primary.fontWeight,
    letterSpacing: theme.button.label.letterSpacing,
    lineHeight: 19,
    textTransform:
      textTransform ||
      getSelectTheme(brand, {
        theme,
        type,
        color,
        mode,
      })?.textransform,
    marginEnd: iconName && iconPosition === 'right' ? theme.spacing.tiny : 0,
    marginStart: iconName && iconPosition === 'left' ? theme.spacing.tiny : 0,
  })
);

export const Surface = styled.View<SurfaceProps>(
  ({
    disabled = false,
    size,
    theme,
    color,
    brand,
    mode,
    type = 'contained',
  }: SurfaceProps) => ({
    ...getButtonStylesBySize({
      size,
      theme,
      brand,
      mode,
    }),
    ...getButtonShadowByType({ disabled, theme, type }),
    alignContent: 'center',
    alignItems: 'center',
    background: disabled
      ? theme?.color.surfaceDisabled
      : getSelectTheme(brand, {
          theme,
          type,
          color,
          mode,
        })?.back,
    borderColor: disabled
      ? theme?.color.surfaceDisabled
      : getSelectTheme(brand, {
          theme,
          type,
          color,
          mode,
        })?.border,
    borderRadius: getSelectTheme(brand, {
      theme,
      type,
      color,
      mode,
    })?.buttonBorderRadius,
    borderWidth: type === 'outlined' ? 1 : 0,
    justifyContent: 'center',
  })
);
