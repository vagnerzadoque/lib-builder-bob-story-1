import { IconName } from '@naturacosmeticos/natds-icons';
import { BrandTypes } from '../../common/brandTypes';
import { AccessibilityProps, StyleProp, TextStyle } from 'react-native';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';

type AccessibilityButtonProps = Pick<
  AccessibilityProps,
  | 'accessibilityActions'
  | 'onAccessibilityAction'
  | 'accessibilityState'
  | 'accessibilityHint'
  | 'accessibilityLabel'
>;
export interface GayaButtonBaseProps extends GayaButtonProps {
  theme: Theme;
  textLabelStyle?: StyleProp<TextStyle>;
}

export interface GayaButtonProps extends AccessibilityButtonProps {
  theme?: Theme;
  /**
   * A disabled button is unusable and un-clickable.
   * The disabled attribute can be set to keep a user from clicking on the button until some
   * other condition has been met (like selecting a checkbox, etc.).
   * @default false
   */
  disabled?: boolean;
  /**
   * Name of the icon that will be rendered on the button at the previously selected position.
   */
  iconName?: IconName;
  /**
   * Name of the brand that will be rendered on the button at the previously selected.
   */
  brand?: BrandTypes;
  /**
   * Name of the brand that will be rendered on the button at the previously selected.
   */
  mode?: 'light' | 'dark';
  /**
   * Specifies an optional color to be added to your Button
   */
  color?:
    | 'primary'
    | 'onPrimary'
    | 'secondary'
    | 'onSecondary'
    | 'neutral'
    | 'inverse';

  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
  /**
   * Position of the icon to be rendered in relation to the label text.
   *
   * - Available positions: `left`, `right`.
   */
  iconPosition?: 'left' | 'right';
  /**
   * Handler to be called when the user taps the button.
   */
  onPress: () => void;
  /**
   * Optional ID for testing.
   */
  testID?: string;
  /**
   * This defines the height of the button, according to corresponding theme Size token.
   *
   * - Available sizes: `semi`, `semiX`, `medium`.
   *
   * #### Deprecated sizes: `small` and `large`.
   * @default `semiX`
   */
  size?: 'semi' | 'semiX' | 'medium';
  /**
   * Text to display inside the button.
   * @required
   */
  text: string;
  /**
   * Parameter that will determine button style such as border rendering and background color.
   *
   * - Available types: `contained`, `outlined`, `text`.
   * @default `contained`
   */
  type?: 'contained' | 'outlined' | 'ghost' | 'tonal';

  textLabelStyle?: StyleProp<TextStyle>;
}
