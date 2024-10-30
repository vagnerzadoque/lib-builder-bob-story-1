import styled from 'styled-components/native';
import { StyleProp, TextStyle } from 'react-native';
import { GayaButtonProps } from './GayaButton.props';
import {
  getTokens,
  getButtonStyleBySize,
  getButtonShadowByType,
} from './GayaButton.utils';
import { buildTheme } from '../../common/theme';

export type ILabelContainer = {
  iconPosition: 'left' | 'right';
} & { textLabelStyle?: StyleProp<TextStyle> };

export type SurfaceProps = Pick<
  GayaButtonProps,
  'type' | 'disabled' | 'size' | 'brand' | 'color' | 'mode'
> & { textLabelStyle?: StyleProp<TextStyle> };

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
> & { textLabelStyle?: StyleProp<TextStyle> };

export const LabelContainer = styled.View<ILabelContainer>(
  ({ iconPosition }) => ({
    alignItems: 'center',
    flexDirection: iconPosition === 'right' ? 'row' : 'row-reverse',
  })
);

export const LabelText = styled.Text<LabelProps>(
  ({
    iconName,
    iconPosition,
    type,
    color,
    theme: ctxTheme,
    brand,
    mode,
    textTransform,
    disabled = false,
  }) => {
    const theme = brand ? buildTheme(brand, mode) : ctxTheme;

    return {
      color: disabled
        ? theme.color.onSurfaceDisabled
        : getTokens({
            theme,
            type,
            color,
          })?.label,
      fontFamily: theme.button.label.primary.fontFamily,
      fontSize: theme.button.label.fontSize,
      fontWeight: theme.button.label.primary.fontWeight,
      letterSpacing: theme.button.label.letterSpacing,
      lineHeight: 19,
      textTransform:
        textTransform ||
        getTokens({
          theme,
          type,
          color,
        })?.textTransform,
      marginEnd: iconName && iconPosition === 'right' ? theme.spacing.tiny : 0,
      marginStart: iconName && iconPosition === 'left' ? theme.spacing.tiny : 0,
    };
  }
);

export const Surface = styled.View<SurfaceProps>(
  ({
    disabled = false,
    size,
    theme: ctxTheme,
    color,
    brand,
    mode,
    type = 'contained',
  }) => {
    const theme = brand ? buildTheme(brand, mode) : ctxTheme;

    return {
      ...getButtonStyleBySize({
        size,
        theme,
      }),
      ...getButtonShadowByType({ disabled, theme, type }),
      alignContent: 'center',
      alignItems: 'center',
      background: disabled
        ? theme.color.surfaceDisabled
        : getTokens({
            theme,
            type,
            color,
          })?.background,
      borderColor: disabled
        ? theme.color.surfaceDisabled
        : getTokens({
            theme,
            type,
            color,
          })?.border,
      borderRadius: getTokens({
        theme,
        type,
        color,
      })?.buttonBorderRadius,
      borderWidth: type === 'outlined' ? 1 : 0,
      justifyContent: 'center',
    };
  }
);
