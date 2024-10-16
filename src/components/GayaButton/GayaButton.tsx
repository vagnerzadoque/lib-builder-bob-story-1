import React from 'react';
import { GayaButtonBase } from './GayaButtonBase';
import { GayaButtonProps } from './GayaButton.props';

export const GayaButton = ({
  accessibilityHint,
  accessibilityLabel,
  accessibilityActions,
  accessibilityState,
  onAccessibilityAction,
  textTransform,
  disabled = false,
  iconName,
  color = 'primary',
  iconPosition,
  onPress,
  size = 'semiX',
  testID = 'button',
  text,
  type = 'contained',
  brand,
  mode,
  ...rest
}: GayaButtonProps) => (
  <GayaButtonBase
    accessibilityHint={accessibilityHint}
    accessibilityLabel={accessibilityLabel}
    accessibilityActions={accessibilityActions}
    accessibilityState={accessibilityState}
    onAccessibilityAction={onAccessibilityAction}
    disabled={disabled}
    textTransform={textTransform}
    iconName={iconName}
    color={color}
    iconPosition={iconPosition}
    onPress={onPress}
    size={size}
    brand={brand}
    mode={mode}
    testID={testID}
    text={text}
    type={type}
    {...rest}
  />
);
