import React from 'react'
import { GayaIconBase } from '../GayaIcon/GayaIcon'
import { IconButtonProps } from './IconButton.types'
import {
  getIconColor,
  getIconSize
} from './IconButton.helpers'
import { IconButtonBase } from './IconButtonBase'
import { IconContainer } from './IconButton.styles'

export const IconButtonPropsDefault : IconButtonProps = {
  color: 'highEmphasis',
  iconColor: 'highEmphasis',
  size: 'semi',
  backgroundStyle: 'none',
  disabled: false,
  onPress: function (): void {
    throw new Error('Function not implemented.')
  },
  testID : 'ds-icon-button'
}

export const IconButton = ({
  color = 'highEmphasis',
  iconColor = color,
  icon,
  size = 'semi',
  backgroundStyle = 'none',
  disabled = false,
  onPress,
  testID = 'ds-icon-button'
}: IconButtonProps) => (
  <IconButtonBase
    disabled={disabled}
    size={size}
    testID={testID}
    onPress={disabled ? undefined : onPress}
    IconComponent={(
      <IconContainer
        disabled={disabled}
        size={size}
        backgroundStyle={backgroundStyle}
        testID={`${testID}-background`}
      >
        <GayaIconBase
          size={getIconSize(size)}
          color={getIconColor(iconColor, disabled)}
          name={icon}
        />
      </IconContainer>
      )}
  />
)
