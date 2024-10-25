export type TouchableRippleColors = 'primary' | 'secondary' | 'highlight';
import { ReactElement } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface GayaTouchableRippleBaseProps {
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
   *
   */
  internal?: {
    touchableHighlight?: { style: StyleProp<ViewStyle> };
  };
}

export type GayaTouchableRippleProps = Omit<GayaTouchableRippleBaseProps, 'internal'>
