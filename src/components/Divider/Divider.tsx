import React from 'react'
import { View } from 'react-native'
import styled, { useTheme, withTheme } from 'styled-components/native'
import { Theme } from '../../common/theme'

export type DividerTypes = 'fullBleed' | 'inset' | 'middle';

export interface DividerProps {
  /**
   * Divider variants `fullBleed` | `inset` | `middle`
   */
  type?: DividerTypes;

  /**
   * Optional ID for testing
   */
  testID?: string;
}



const getViewStyles = (type: DividerTypes, theme: Theme) => {
  const styles = {
    inset: {
      marginLeft: Number(theme.spacing.standard)
    },
    middle: {
      marginLeft: Number(theme.spacing.standard),
      marginRight: Number(theme.spacing.standard)
    },
    fullBleed: {}
  }

  return styles[type]
}

const DividerBase = styled.View<DividerProps>(({ theme }) => ({
  backgroundColor: theme.color.lowEmphasis,
  height: 1,
  margin: theme.spacing.none,
  width: '100%'
}))

const DividerComponent = ({
  type = 'fullBleed',
  testID = 'divider'
}: DividerProps) => {
  const theme = useTheme()
  return (
  <View style={getViewStyles(type,  theme)}>
    <DividerBase type={type} testID={testID} />
  </View>
)
}

export const Divider = DividerComponent
