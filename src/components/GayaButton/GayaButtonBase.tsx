/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { withTheme } from 'styled-components/native';
import { Icon } from '../GayaIcon/GayaIcon';
import { LabelContainer, LabelText, Surface } from './GayaButton.styles';
import { getSelectTheme } from './GayaButton.utils';
import { GayaTouchableRipple } from '../GayaTouchableRipple/GayaTouchableRipple';
import { GayaButtonBaseProps, GayaButtonProps } from './GayaButton.props';

export const GayaButtonComponent = ({
  accessibilityHint,
  accessibilityLabel,
  accessibilityActions,
  accessibilityState,
  onAccessibilityAction,
  textTransform,
  disabled = false,
  iconName,
  color,
  iconPosition = 'right',
  onPress,
  size = 'medium',
  testID = 'button-base',
  text,
  brand,
  mode,
  theme,
  type = 'contained',
  textLabelStyle,
}: GayaButtonBaseProps) => {
  // const themeUse = useTheme() as Theme
  const iconColor = disabled
    ? theme.button[type].color.disable.label
    : theme.button[type].color.enable.label;

  return (
    <GayaTouchableRipple
      color="highlight"
      disabled={disabled}
      hideOverflow
      onPress={disabled ? () => ({}) : onPress}
      style={{
        borderRadius: getSelectTheme(brand, { theme, type, color })
          ?.buttonBorderRadius,
      }}
    >
      <Surface
        onAccessibilityAction={onAccessibilityAction}
        accessibilityActions={accessibilityActions}
        accessibilityHint={accessibilityHint}
        accessibilityLabel={accessibilityLabel}
        accessibilityState={accessibilityState}
        accessibilityRole="button"
        disabled={disabled}
        size={size}
        brand={brand}
        mode={mode}
        color={color}
        testID={testID}
        type={type}
      >
        <LabelContainer iconPosition={iconPosition}>
          <LabelText
            textTransform={textTransform}
            iconName={iconName}
            iconPosition={iconPosition}
            testID="button-label"
            type={type}
            brand={brand}
            mode={mode}
            color={color}
            disabled={disabled}
            style={textLabelStyle}
          >
            {text}
          </LabelText>
          {iconName && (
            <Icon
              accessibilityRole="imagebutton"
              style={{ color: iconColor }}
              name={iconName}
              size="small"
            />
          )}
        </LabelContainer>
      </Surface>
    </GayaTouchableRipple>
  );
};

// export const GayaButtonBase: React.FC<GayaButtonProps> = withTheme(GayaButtonComponent);
export const GayaButtonBase = withTheme(
  GayaButtonComponent
) as React.ForwardRefExoticComponent<
  GayaButtonProps & React.RefAttributes<any>
>;
