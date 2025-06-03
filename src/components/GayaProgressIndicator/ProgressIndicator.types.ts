import { BrandTypes } from "../../common/brandTypes";

export type ProgressIndicatorSizes = 'standard' | 'semi' | 'medium' | 'large';

export interface ProgressIndicatorProps {
  /**
   * Defines the size of the progress indicator.
   * Available sizes: 'standard', 'semi', 'medium', 'large'.
   * @default 'medium'
   */
  size?: ProgressIndicatorSizes;
  /**
   * Determines whether to show a background layer.
   * @default false
   */
  showLayer?: boolean;
  /**
   * Optional brand to theme the component.
   */
  brand?: BrandTypes;
  // mode?: 'light' | 'dark'; // Removed mode
  // Add other specific props for ProgressIndicator if any
}
