import React from 'react';
import { IconName, icons } from '@naturacosmeticos/natds-icons';
import { BaseGayaIconProps, GayaIconProps } from './GayaIcon.props';
import { Text } from 'react-native';
import { useTheme } from 'styled-components/native';

const defaultIconName = 'outlined-default-mockup';

export const checkIconName = (iconName: IconName) =>
  (icons[iconName]
    ? icons[iconName].replace('%', '\\')
    : icons[defaultIconName]
  ).replace('%', '\\');

export const BaseGayaIcon = ({
  color = 'primary',
  disabled,
  internal,
  name = defaultIconName,
  size = 'standard',
}: BaseGayaIconProps) => {
  const theme = useTheme();
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
        internal?.icon?.style,
      ]}
    >
      {code}
    </Text>
  );
};

export const GayaIcon = (dirtyProps: GayaIconProps) => {
  const { internal, ...props }: BaseGayaIconProps = dirtyProps;
  return <BaseGayaIcon {...props} />;
};
