/* eslint-disable complexity */
import React from 'react'

import { useTheme } from 'styled-components/native'
import {
  Container, getTextColorByName, Label, LabelContainer
} from './Tag.styles'
import { TagProps } from './Tag.types'
import { GayaIcon, GayaIconBase } from '../GayaIcon/GayaIcon'
import { buildTheme } from '../../common/theme'

export const tagPropsDefault: TagProps = {
    testID: 'ds-tag', color : 'primary', 
    size : 'small', 
    borderPosition : 'default',
    accessible: undefined, 
    accessibilityRole: undefined, 
    accessibilityHint: undefined,  
    accessibilityLabel: undefined,  
    accessibilityState: undefined, 
    allowFontScaling: undefined,  
    maxFontSizeMultiplier: undefined,  
    text: '', 
    brand: undefined, 
    iconLeft: undefined, 
    iconRight: undefined
}

export const Tag = (props: TagProps) => {
  const {
    testID = 'ds-tag', color = 'primary', size = 'small', borderPosition = 'default',
    accessible, accessibilityRole, accessibilityHint, accessibilityLabel, accessibilityState,
    allowFontScaling, maxFontSizeMultiplier, text, brand, iconLeft, iconRight
  } = props
  const ctxTheme = useTheme()
  const theme = brand ? buildTheme(brand, 'light') : ctxTheme
  const iconColor = getTextColorByName({ theme, color, brand })

  return (
    <Container
      testID={testID}
      brand={brand}
      color={color}
      size={size}
      borderPosition={borderPosition}
    >
      <LabelContainer>
        {(iconLeft)
          && (
            <GayaIconBase
              name={iconLeft}
              size="small"
              internal={{
                text: { style: { color: iconColor } },
              }}
            />
          )}
        {
          text
          && (
          <Label
            color={color}
            brand={brand}
            testID={`${testID}-label`}
            accessible={accessible}
            accessibilityRole={accessibilityRole}
            accessibilityHint={accessibilityHint}
            accessibilityLabel={accessibilityLabel}
            accessibilityState={accessibilityState}
            allowFontScaling={allowFontScaling}
            maxFontSizeMultiplier={maxFontSizeMultiplier}
          >
            {text}
          </Label>
          )
        }
        {(iconRight)
          && (
            <GayaIconBase
              name={iconRight}
              size="small"
              internal={{
                text: { style: { color: iconColor } },
              }}
            />
          )}

      </LabelContainer>
    </Container>
  )
}
