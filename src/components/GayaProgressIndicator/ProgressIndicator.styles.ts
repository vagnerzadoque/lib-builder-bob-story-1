/* eslint-disable max-len */
import styled from 'styled-components/native'

// buildTheme might not be needed here anymore if GayaProvider handles it fully
// import { buildTheme, Theme } from '../../common/theme'; 
import { Theme } from '../../common/theme'; // Keep Theme type
import { BrandTypes } from '../../common/brandTypes';
import { ProgressIndicatorSizes } from './ProgressIndicator.types';

// getThemeProgress simplified: theme is already brand/mode specific if brand prop was passed to GayaProvider
const getThemeProgress = (theme: Theme) => {
  // The 'theme' prop here is the one processed by GayaProvider or the default.
  // If a brand was active in GayaProvider, 'theme' IS the branded theme.
  return theme.color.primary;
}

// Common props for styled components
interface StyledIndicatorProps {
  theme: Theme; // This theme comes from ThemeProvider (GayaProvider)
  brand?: BrandTypes; // Keep brand if needed for OTHER logic, but not for buildTheme here
  size: ProgressIndicatorSizes;
  // mode?: 'light' | 'dark'; // Removed mode
}

export const Layer = styled.View<StyledIndicatorProps>(
  ({ size, theme, brand }) => { // Removed mode from destructuring
    // If 'brand' prop is used by ProgressIndicator, GayaProvider should have already
    // provided a theme that is brand AND mode specific.
    // So, 'theme' here IS the selectedTheme.
    const selectedTheme = theme; 
    return {
      height: selectedTheme.progressIndicator[size].borderRadius ,
      width: selectedTheme.progressIndicator[size].borderRadius 
    };
  }
)

export const View = styled(Layer)<StyledIndicatorProps & { showLayer: boolean; }>(
  ({ size, showLayer, theme, brand }) => { // Removed mode
    const selectedTheme = theme;
    return {
      alignItems: 'center',
      backgroundColor: showLayer ? selectedTheme.color.surface : 'transparent', 
      borderRadius: (selectedTheme.progressIndicator[size].borderRadius  + 4) / 2,
      display: 'flex',
      height: selectedTheme.progressIndicator[size].borderRadius + 4,
      justifyContent: 'center',
      width: selectedTheme.progressIndicator[size].borderRadius  + 4
    };
  }
)

export const Line = styled(Layer)<StyledIndicatorProps>(
  ({ theme, size, brand }) => { // Removed mode
    const selectedTheme = theme;
    return {
      borderColor: getThemeProgress(selectedTheme), // Pass the already correct theme
     borderRadius: selectedTheme.progressIndicator[size].borderRadius, 
      borderWidth: selectedTheme.progressIndicator[size].borderRadius  / 10
    };
  }
)

export const Container = styled(Layer)<StyledIndicatorProps>(
  ({ size, theme, brand }) => { // Removed mode
    const selectedTheme = theme;
    return {
      height: selectedTheme.progressIndicator[size].borderRadius  / 2,
      overflow: 'hidden'
    };
  }
)

