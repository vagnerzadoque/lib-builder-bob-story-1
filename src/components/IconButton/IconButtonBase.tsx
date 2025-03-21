import React from 'react'
import { useTheme } from 'styled-components/native'
import { GayaTouchableRippleBase } from '../GayaTouchableRipple/GayaTouchableRipple'

import { IconButtonBaseProps } from './IconButton.types'

export const IconButtonBase = ({
  size = 'semi',
  IconComponent,
  disabled = false,
  onPress,
  testID
}: IconButtonBaseProps) => {
  const theme = useTheme()
  const calcSize = theme.size[size] / 2 + 5
  return (
    <GayaTouchableRippleBase
      color="highlight"
      size={calcSize}
      onPress={onPress}
      disabled={disabled}
      internal={{
        touchableHighlight: {
          style: {
            borderRadius: 50,
          },
        },
      }}
    >
      {IconComponent}
    </GayaTouchableRippleBase>
  )
}
