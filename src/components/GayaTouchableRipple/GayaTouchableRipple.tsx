import React from 'react';

import { ReactElement } from 'react';
import { TouchableHighlight, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { buildColorWithOpacity, Theme } from '../../common/theme';

export type TouchableRippleColors = 'primary' | 'secondary' | 'highlight';

export interface TouchableRippleProps {
  /**
   * Children component
   */
  children?: ReactElement;
  /**
   * Ripple color: `primary` | `secondary` | `highlight`
   * @default: `primary`
   */
  color?: TouchableRippleColors;
  /*
   * Deactivates the palpable effect, will not call the callback function when pressing;
   */
  disabled?: boolean;
  /**
   * Controls if the ripple should overflow the content of not
   */
  hideOverflow?: boolean;
  /**
   * Size of the children, the ripple will have the double of this size.
   */
  size?: number;
  /**
   * Will be called as soon the ripple animation start
   */
  onPress?: () => void;
  /**
   * Optional testID
   */
  testID?: string;
  /**
   * App's theme
   */
  theme?: Theme;
  /**
   *
   */
  style?: StyleProp<ViewStyle>;
}

export const GayaTouchableRipple = ({
  children,
  disabled = false,
  onPress,
  testID = 'touchable-ripple',
  style,
  color = 'highlight',
}: TouchableRippleProps) => {
  const theme = useTheme() as Theme;
  const getColorByName = theme.color[color] as unknown as string;
  const getColorOpacity = theme.opacity.medium as unknown as string;

  return (
    <TouchableHighlight
      style={style}
      underlayColor={buildColorWithOpacity(getColorByName, getColorOpacity)}
      disabled={disabled}
      onPress={onPress}
      testID={testID}
    >
      {children}
    </TouchableHighlight>
  );
};
