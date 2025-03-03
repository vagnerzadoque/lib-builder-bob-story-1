/* eslint-disable max-len */
import { IconName } from '@naturacosmeticos/natds-icons'
import { Size } from '@naturacosmeticos/natds-themes/react-native'
import { BrandTypes } from '../../common/brandTypes'
import { ImageSourcePropType } from 'react-native';


export type AvatarSizes = keyof Pick<Size, 'standard' | 'semi' | 'semiX' | 'medium' | 'largeXXX'>;

export type AvatarTypes = 'image' | 'icon' | 'letter';



export interface AvatarBaseProps {
  /**
   * Optional size of the avatar.
   * Deprecated `tiny`, `small`, `large` and `huge` sizes.
   */
  size?: AvatarSizes;
  /**
   * Optional accessibilityLabel.
   */
  brand?: BrandTypes;
  /**
   * Optional accessibilityLabel.
   */
  accessibilityLabel?: string;
  /**
   * Optional accessibilityHint.
   */
  accessibilityHint?: string;
  /**
   * Optional ID for testing.
   */
  testID?: string;
}

export type AvatarAnonymousProps = AvatarBaseProps & {
  type?: 'anonymous';
}

export type AvatarImageProps = AvatarBaseProps & {
  type?: 'image';
  /**
  * URL image.
  * @example imgSource={{uri: IMG_URL}}
  */
  imgSource?: ImageSourcePropType;
}

export type AvatarIconProps = AvatarBaseProps & {
  type?: 'icon';
  /**
  * Icon name
  */
  iconName?: IconName;
}

export type AvatarLetterProps = AvatarBaseProps & {
  type?: 'letter';
  /**
  * Label text
  */
  text?: string;
}

export type AvatarProps =  AvatarImageProps | AvatarIconProps | AvatarLetterProps | AvatarAnonymousProps;
