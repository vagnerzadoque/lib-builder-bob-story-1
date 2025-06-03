import React from 'react'


import { useTheme } from 'styled-components/native'
import {
  Container, Circle, Center, Label, Wrapper
} from './RadioButton.styles'
import { BrandTypes } from '../../common/brandTypes';
import { GayaTouchableRipple, GayaTouchableRippleBase } from '../GayaTouchableRipple/GayaTouchableRipple';


/**
 * @deprecated use `primary` instead
 */
type RadioButtonDeprecatedColor = 'secondary'
export type RadioButtonColors = 'primary' | RadioButtonDeprecatedColor;

export interface RadioButtonProps {
  /**
   * RadioButton color: `primary`
   *
   * deprecated color: `secondary`
   */
  color?: RadioButtonColors;
  /**
   * Optional brand that appears to the component,
   */
  brand?: BrandTypes;
  /**
   * Called when the touch is released, but not if cancelled
   */
  onPress?: (value: string) => void;
  /**
   * Programmatically tell if the component is selected
   */
  selected?: boolean;
  /**
   * Optional property that tells if the select is disabled,
   * if so, the user cannot click on this item.
   */
  disabled?: boolean;
  /**
   * Optional label that appears to the right of the component,
   * if the user clicks that label, the onPress function will be called
   */
  label?: string;
  /**
   * The value of the component.
   */
  value?: string;
  /**
   * Optional testID
   */
  testID?: string;

  mode?: 'light' | 'dark'
}



export const RadioButton = ({
  color = 'primary',
  onPress,
  selected,
  disabled = false,
  label,
  brand,
  mode,
  value = '',
  testID = 'radio-button'
}: RadioButtonProps) => {
  const theme = useTheme()
  const onPressWithValue = () => {
    if (onPress) {
      onPress(value)
    }
  }
  const radio = (
    <GayaTouchableRippleBase
      size={20}
      color={color}
      onPress={onPressWithValue}
      disabled={disabled}
      internal={{ touchableHighlight: { style: { borderRadius: 50 } } }}
    >
      <Wrapper>
        <Circle theme={theme} brand={brand} disabled={disabled} color={color} selected={selected} mode={mode} testID={`${testID}-circle`}>
          {
            selected
              ? (
                <Center
                  brand={brand}
                  disabled={disabled}
                  color={color}
                  selected={selected}
                  mode={mode}
                  testID={`${testID}-circle-selected`}
                />
              ) : null
          }
        </Circle>
      </Wrapper>
    </GayaTouchableRippleBase>
  )

  if (label) {

    return (
      <Container disabled={disabled} testID={`${testID}-label`} onPress={onPressWithValue}>
        {radio}
        <Label disabled={disabled} brand={brand} mode={mode}>{label}</Label>
      </Container>
    )
  }

  return radio
}
