import { SurfaceProps } from './GayaButton.styles';
import { DefaultTheme } from 'styled-components/native';

export const getButtonTokens = ({
  color,
  theme,
  type,
}: Pick<SurfaceProps, 'type' | 'color' | 'mode'> & {
  theme: DefaultTheme;
}) => {
  return (
    type &&
    color && {
      background: theme.button[type].color[color].background,
      border: theme.button[type].color[color].border,
      label: theme.button[type].color[color].label,
      buttonBorderRadius: theme.button.borderRadius,
      textTransform: theme.button.textTransform as
        | 'uppercase'
        | 'lowercase'
        | 'capitalize',
    }
  );
};

export const getButtonStyleBySize = ({
  size,
  theme,
}: Pick<SurfaceProps, 'size' | 'brand' | 'mode'> & {
  theme: DefaultTheme;
}) => {
  const buttonSizes = {
    large: {
      minHeight: theme.size.medium,
      paddingHorizontal: theme.button.paddingX,
    },
    medium: {
      minHeight: theme.size.medium,
      paddingHorizontal: theme.button.paddingX,
    },
    semi: {
      minHeight: theme.size.semi,
      paddingHorizontal: theme.button.paddingX,
    },
    semiX: {
      minHeight: theme.size.semiX,
      paddingHorizontal: theme.button.paddingX,
    },
    small: {
      minHeight: theme.size.semi,
      paddingHorizontal: theme.button.paddingX,
    },
  };

  return size && buttonSizes[size];
};

export const getButtonShadowByType = ({
  disabled,
  theme,
  type,
}: Omit<SurfaceProps, 'size'> & { theme: DefaultTheme }) =>
  type === 'contained' && !disabled
    ? theme
      ? theme.elevation.none
      : { elevation: 0 }
    : { elevation: 0 };
