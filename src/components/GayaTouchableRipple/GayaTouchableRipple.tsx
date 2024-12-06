import React from 'react';
import { Pressable } from 'react-native';
import { useTheme } from 'styled-components/native';
import { buildColorWithOpacity } from '../../common/theme';
import {
  GayaTouchableRippleProps,
  GayaTouchableRippleBaseProps,
} from './GayaTouchableRipple.props';

export const GayaTouchableRippleBase = ({
  children,
  color = 'highlight',
  disabled = false,
  onPress,
  internal,
}: GayaTouchableRippleBaseProps) => {
  const theme = useTheme();
  const getColorByName = theme.color[color];
  const getColorOpacity = theme.opacity.medium;
  
  // Cor que será aplicada ao pressionar
  const pressedColor = buildColorWithOpacity(getColorByName, getColorOpacity);

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        internal?.touchableHighlight?.style,
        { backgroundColor: pressed ? pressedColor : 'transparent' },
      ]}
      
    >
      {children}
    </Pressable>
  );
};

export const GayaTouchableRipple = (dirtyProps: GayaTouchableRippleProps) => {
  const { internal, ...props }: GayaTouchableRippleBaseProps = dirtyProps;
  return <GayaTouchableRippleBase {...props} />;
};
