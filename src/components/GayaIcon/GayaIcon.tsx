import React from 'react';
import styled from 'styled-components/native';
import { IconName, icons } from '@naturacosmeticos/natds-icons';
import { Theme } from '../../common/theme';
import { IconProps } from '../GayaIcon/GayaIcon.types';

type IconStyleProps = {
  theme: Theme;
} & IconProps;

// export const getIconColor = (theme: Theme, color: IconColors) => {
//   switch (color) {
//     case '#333333':
//       return color
//     case 'default':
//       return getColorHighEmphasis(theme)
//     default:
//       return getColorByName(theme, color)
//   }
// }

export const IconComponent = styled.Text<IconProps>(
  ({ color = 'neutral', size = 'standard', type, disabled, theme }: IconStyleProps) => ({
    color: disabled ? theme.button[type ?? 'contained'].color.disable.label : theme.button[type ?? 'contained'].color[color ?? 'primary'].label,
    fontFamily: 'natds-icons',
    fontSize: theme.size[size],
  })
);

const defaultIconName = 'outlined-default-mockup';

export const checkIconName = (iconName: IconName) =>
  (icons[iconName]
    ? icons[iconName].replace('%', '\\')
    : icons[defaultIconName]
  ).replace('%', '\\');

export const Icon = ({
  accessibilityHint,
  accessibilityLabel,
  accessibilityRole = 'image',
  color = 'neutral',
  name = defaultIconName,
  testID = 'natds-icon',
  theme,
  size = 'standard',
  disabled,
  type,
  style,
}: IconProps) => {
  const unicodeName = checkIconName(name);
  const code = JSON.parse(`["${unicodeName}"]`)[0];

  return (
    <IconComponent
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      color={color}
      size={size}
      type={type}
      disabled={disabled}
      style={style}
      testID={testID}
      theme={theme}
    >
      {code}
    </IconComponent>
  );
};
