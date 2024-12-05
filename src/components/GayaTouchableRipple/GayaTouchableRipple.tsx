import React from 'react';
import { TouchableHighlight } from 'react-native';
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

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={onPress}
      underlayColor={buildColorWithOpacity(getColorByName, getColorOpacity)}
      {...internal?.touchableHighlight}
    >
      {children}
    </TouchableHighlight>
  );
};

export const GayaTouchableRipple = (dirtyProps: GayaTouchableRippleProps) => {
  const { internal, ...props }: GayaTouchableRippleBaseProps = dirtyProps;
  return <GayaTouchableRippleBase {...props} />;
};
