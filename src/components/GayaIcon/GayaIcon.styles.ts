import styled from 'styled-components/native';
import { BaseGayaIconProps } from './GayaIcon.props';

export const BaseIcon = styled.Text<BaseGayaIconProps>(
  ({ color = 'primary', size = 'standard', theme }) => ({
    color: theme.color[color],
    fontFamily: 'natds-icons',
    fontSize: theme.size[size],
  })
);
