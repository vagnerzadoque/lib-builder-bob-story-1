import { Theme } from '../../common/theme'

export type GayaDividerTypes = 'fullBleed' | 'inset' | 'middle';

export interface GayaDividerProps {
  /**
   * Divider variants `fullBleed` | `inset` | `middle`
   * @default fullBleed
   */
  type?: GayaDividerTypes;

  /**
   * Custom theme to be applied to the component.
   */
  theme?: Theme;

  /**
   * Optional ID for testing
   */
  testID?: string;
} 