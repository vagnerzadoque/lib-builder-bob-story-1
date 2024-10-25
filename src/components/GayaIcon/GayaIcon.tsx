import React from 'react';
import { IconName, icons } from '@naturacosmeticos/natds-icons';
import { BaseGayaIconProps, GayaIconProps } from './GayaIcon.props';
import { BaseIcon } from './GayaIcon.styles';

const defaultIconName = 'outlined-default-mockup';

// TODO: Verify logic
export const checkIconName = (iconName: IconName) =>
  (icons[iconName]
    ? icons[iconName].replace('%', '\\')
    : icons[defaultIconName]
  ).replace('%', '\\');

export const BaseGayaIcon = ({
  color,
  disabled,
  internal,
  name = defaultIconName,
  size = 'standard',
}: BaseGayaIconProps) => {
  const unicodeName = checkIconName(name);
  const code = JSON.parse(`["${unicodeName}"]`)[0];

  return (
    <BaseIcon color={color} disabled={disabled} size={size} {...internal?.icon}>
      {code}
    </BaseIcon>
  );
};

export const GayaIcon = (dirtyProps: GayaIconProps) => {
  const { internal, ...props }: BaseGayaIconProps = dirtyProps;
  return <BaseGayaIcon {...props} />;
};
