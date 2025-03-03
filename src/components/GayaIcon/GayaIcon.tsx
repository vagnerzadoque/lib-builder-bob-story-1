import React from 'react';
import { IconName, icons } from '@naturacosmeticos/natds-icons';
import { GayaIconBaseProps, GayaIconProps } from './GayaIcon.props';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import { buildTheme } from '../../common/theme';

const defaultIconName = 'outlined-default-mockup';

export const checkIconName = (iconName: IconName) =>
  (icons[iconName]
    ? icons[iconName].replace('%', '\\')
    : icons[defaultIconName]
  ).replace('%', '\\');

export const GayaIconBase = ({
  color = 'primary',
  disabled,
  internal,
  brand,
  name = defaultIconName,
  size = 'standard',
}: GayaIconBaseProps) => {
  const theme = brand ? buildTheme(brand, "light") : useTheme();
  const unicodeName = checkIconName(name);
  const code = JSON.parse(`["${unicodeName}"]`)[0];

  return (
    <Text
      disabled={disabled}
      style={[
        {
          color: theme.color[color],
          fontFamily: 'natds-icons',
          fontSize: theme.size[size],
        },
        internal?.text?.style,
      ]}
    >
      {code}
    </Text>
  );
};

export const GayaIcon = (dirtyProps: GayaIconProps) => {
  const { internal, ...props }: GayaIconBaseProps = dirtyProps;
  return <GayaIconBase {...props} />;
};
