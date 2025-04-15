import React from 'react'
import { View } from 'react-native'
import { GayaButton } from '../GayaButton/GayaButton'
import { Container, Input, Label, RadiusButtonLeft, RadiusButtonRight } from './Counter.styles'
import { CounterProps } from './Counter.types'
import { GayaTouchableRippleBase } from '../GayaTouchableRipple/GayaTouchableRipple'
import { useTheme } from 'styled-components/native'

export const CounterPropsDefault: CounterProps  = {
  minValue: 0,
  maxValue: 99,
  size: 'medium',
  testID: 'counter',
  value: 0,
  onDecrement: function (): void {
    throw new Error('Function not implemented.')
  },
  onIncrement: function (): void {
    throw new Error('Function not implemented.')
  }
}


export const Counter = ({
  decrementButtonAccessibilityHint,
  decrementButtonAccessibilityLabel,
  incrementButtonAccessibilityHint,
  incrementButtonAccessibilityLabel,
  inputAccessibilityHint,
  inputAccessibilityLabel,
  disabled,
  label,
  minValue = 0,
  maxValue = 99,
  onDecrement,
  onIncrement,
  size = 'medium',
  testID = 'counter',
  value = 0
}: CounterProps) => {
  
  const theme = useTheme()
  
  return (
  <View>
    { label
        && (
        <Label testID="counter-label">
          { label }
        </Label>
        )}
    <Container size={size} testID={testID} accessibilityLiveRegion="assertive">
    <GayaTouchableRippleBase
      color="highlight"
      disabled={disabled}
      hideOverflow
      onPress={disabled ? undefined : onDecrement}
      internal={{
        touchableHighlight: {
          style: {
            borderRadius: theme?.buttonBorderRadius,
          },
        },
      }}
    >
      
      <RadiusButtonLeft
        accessibilityHint={decrementButtonAccessibilityHint}
        accessibilityLabel={decrementButtonAccessibilityLabel}
        size={size}
        disabled={disabled || value <= minValue}
      >
        -
      </RadiusButtonLeft>
      </GayaTouchableRippleBase>
      <Input
        accessibilityHint={inputAccessibilityHint}
        accessibilityLabel={inputAccessibilityLabel}
        editable={false}
        value={value.toString()}
        testID="counter-input"
      />

      <GayaTouchableRippleBase
      color="highlight"
      disabled={disabled}
      hideOverflow
      onPress={disabled ? undefined : onIncrement}
      internal={{
        touchableHighlight: {
          style: {
            borderRadius: theme?.buttonBorderRadius,
          },
        },
      }}
    >
      <RadiusButtonRight
        accessibilityHint={incrementButtonAccessibilityHint}
        accessibilityLabel={incrementButtonAccessibilityLabel}
        size={size}
        disabled={disabled || value >= maxValue}
      >
        +
      </RadiusButtonRight>
      </GayaTouchableRippleBase>
    </Container>
  </View>
)
}


