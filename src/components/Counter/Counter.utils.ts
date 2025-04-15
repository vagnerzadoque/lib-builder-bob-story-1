import { DefaultTheme } from 'styled-components/native';
import { SurfaceProps } from "../GayaButton/GayaButton.styles";

export const getCounterStyleBySize = ({
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