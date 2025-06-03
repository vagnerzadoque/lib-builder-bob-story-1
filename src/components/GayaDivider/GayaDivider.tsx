import React from 'react'
import { View } from 'react-native'
import styled, { useTheme as useStyledTheme } from 'styled-components/native'
import { GayaDividerProps, GayaDividerTypes } from './GayaDivider.types'
import { Theme } from '../../common/theme'

const getViewStyles = (type: GayaDividerTypes, theme: Theme) => {
  const baseMargin = Number(theme.spacing.standard) || 16; // Default margin if theme value is invalid
  const styles = {
    inset: {
      marginLeft: baseMargin
    },
    middle: {
      marginLeft: baseMargin,
      marginRight: baseMargin
    },
    fullBleed: {}
  };

  return styles[type] || styles.fullBleed; // Fallback to fullBleed
}

const DividerBase = styled.View<{ theme: Theme }>(({ theme }) => ({
  backgroundColor: theme.color.lowEmphasis,
  height: 1,
  width: '100%'
}));

export const GayaDivider = ({
  type = 'fullBleed',
  testID = 'gaya-divider',
  theme: propTheme,
  ...rest
}: GayaDividerProps) => {
  const styledTheme = useStyledTheme();
  const theme = propTheme || styledTheme;

  if (!theme) {
    // Handle case where no theme is available
    // You might want to log an error or use default styles
    console.error("GayaDivider: Theme is not available.");
    return null;
  }

  return (
    <View style={getViewStyles(type, theme)} testID={`${testID}-wrapper`}>
      <DividerBase theme={theme} testID={testID} {...rest} />
    </View>
  )
} 