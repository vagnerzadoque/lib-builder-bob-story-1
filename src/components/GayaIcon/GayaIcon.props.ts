import { IconName } from '@naturacosmeticos/natds-icons';
import { Size, Color } from '@naturacosmeticos/natds-themes/react-native';
import { StyleProp, TextStyle } from 'react-native';

export type IconSizesType = keyof Size;

export interface GayaIconBaseProps {
  /**
   * Icon color
   */
  color?: keyof Color;
  /**
   * Icon name
   */
  name?: IconName;
  /**
   * Icon size
   */
  size?: IconSizesType;
  /**
   *
   */
  disabled?: boolean;
  /**
   *
   */
  internal?: {
    text?: { style: StyleProp<TextStyle> };
  };
}

export type GayaIconProps = Omit<GayaIconBaseProps, 'internal'>;
