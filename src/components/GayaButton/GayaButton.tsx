import React from 'react';
import { useTheme } from 'styled-components/native';
import { GayaIconBase } from '../GayaIcon/GayaIcon';
import { LabelContainer, LabelText, Surface } from './GayaButton.styles';
import { getButtonTokens } from './GayaButton.utils';
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
  const ctxTheme = useTheme();
  const theme = brand ? buildTheme(brand, mode) : ctxTheme;
  const tokens = getButtonTokens({
    color,
    theme,
    type,
  });

  const iconColor = disabled
    ? theme.button[type].color.disable.label
    : theme.button[type].color[color ?? 'primary'].label;

  return (
    <GayaTouchableRippleBase
      color="highlight"
      disabled={disabled}
      hideOverflow
      onPress={disabled ? undefined : onPress}
      internal={{
        touchableHighlight: {
          style: {
            borderRadius: tokens?.buttonBorderRadius,
          },
        },
      }}
    >
      <Surface
        role="button"
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
                text: { style: { color: iconColor } },
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
