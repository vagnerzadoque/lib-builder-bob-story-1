import { IconName } from '@naturacosmeticos/natds-icons';
import { Size, Color } from '@naturacosmeticos/natds-themes/react-native';
import { StyleProp, TextStyle } from 'react-native';
import { BrandTypes } from '../../common/brandTypes';

export type IconSizesType = keyof Size;
export type IconColors = keyof Color 
export type IconSizes = keyof Size

export interface GayaIconBaseProps {
  /**
   * Icon color
   */
  brand?: BrandTypes;
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
