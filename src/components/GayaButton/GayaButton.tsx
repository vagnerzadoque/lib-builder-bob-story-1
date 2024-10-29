import React from 'react';
import { useTheme } from 'styled-components/native';
import { GayaIconBase } from '../GayaIcon/GayaIcon';
import { LabelContainer, LabelText, Surface } from './GayaButton.styles';
import { getSelectTheme } from './GayaButton.utils';
import { GayaTouchableRippleBase } from '../GayaTouchableRipple/GayaTouchableRipple';
import { GayaButtonProps, GayaButtonBaseProps } from './GayaButton.props';
import { buildTheme } from '../../common/theme';

export const GayaButtonBase = ({
  brand,
  color = 'primary',
  disabled = false,
  iconName,
  iconPosition = 'right',
  internal,
  mode,
  onPress,
  size = 'medium',
  text,
  textTransform,
  type = 'contained',
}: GayaButtonBaseProps) => {
  const theme = useTheme();
  const selectedTheme = brand ? buildTheme(brand, mode) : theme;

  const iconColor = disabled
    ? selectedTheme.button[type].color.disable.label
    : selectedTheme.button[type].color[color ?? 'primary'].label;

  return (
    <GayaTouchableRippleBase
      color="highlight"
      disabled={disabled}
      hideOverflow
      onPress={disabled ? undefined : onPress}
      internal={{
        touchableHighlight: {
          style: {
            borderRadius: getSelectTheme(brand, { theme, type, color })
              ?.buttonBorderRadius,
          },
        },
      }}
    >
      <Surface
        accessibilityRole="button"
        brand={brand}
        color={color}
        disabled={disabled}
        mode={mode}
        size={size}
        type={type}
      >
        <LabelContainer iconPosition={iconPosition}>
          <LabelText
            textTransform={textTransform}
            iconName={iconName}
            iconPosition={iconPosition}
            type={type}
            brand={brand}
            mode={mode}
            color={color}
            disabled={disabled}
            {...internal?.labelText}
          >
            {text}
          </LabelText>
          {iconName && (
            <GayaIconBase
              disabled={disabled}
              name={iconName}
              size="small"
              internal={{
                icon: { style: { color: iconColor } },
              }}
            />
          )}
        </LabelContainer>
      </Surface>
    </GayaTouchableRippleBase>
  );
};

export const GayaButton = (dirtyProps: GayaButtonProps) => {
  const { internal, ...props }: GayaButtonBaseProps = dirtyProps;
  return <GayaButtonBase {...props} />;
};
