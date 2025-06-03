/* eslint-disable max-len */
/* eslint-disable complexity */
import styled, { useTheme } from 'styled-components/native'


import { RadioButtonColors } from './RadioButton'
import { BrandTypes } from '../../common/brandTypes';
import { buildTheme, Theme, ThemeMode } from '../../common/theme';

type RadioButtonProps = {
  theme: Theme;
  color: RadioButtonColors;
  selected?: boolean;
  disabled: boolean;
  brand?: BrandTypes;
  mode?: ThemeMode;
}




function getCircleColor(
  selected = false,
  disabled: boolean,
  color: RadioButtonColors,
  theme: Theme,
  brand?: BrandTypes,
  mode?: ThemeMode
) {
  const selectedTheme = brand ? buildTheme(brand, mode) : theme;
  if (disabled) {
    return selectedTheme.color.lowEmphasis
  }

  if (selected) {

    return color === 'secondary' ? selectedTheme.color.secondary : selectedTheme.color.primary
  }

  return selectedTheme.color.mediumEmphasis
}



const getlabelColor = (theme: Theme, brand?: BrandTypes, mode?: ThemeMode) => {
  const selectedTheme = brand ? buildTheme(brand, mode) : theme;
  if (brand) {

    return selectedTheme.color.onBackground
  }
  return selectedTheme.color.onBackground
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  flex-direction: row;
  align-items: center;
`

export const Label = styled.Text<{ theme: Theme; disabled: boolean; brand?: BrandTypes, mode?: ThemeMode }>(({ theme, disabled, brand, mode }) => ({
  color: disabled ? theme.color.lowEmphasis : getlabelColor(theme, brand, mode),
  fontFamily: theme.radioButton.label.primary.fontFamily,
  fontSize: theme.radioButton.label.fontSize,
  fontWeight: theme.radioButton.label.primary.fontWeight,
  letterSpacing: theme.radioButton.label.letterSpacing,
  lineHeight: theme.radioButton.label.fontSize * theme.radioButton.label.lineHeight,
  marginLeft: theme.spacing.tiny
}))

export const Circle = styled.View<RadioButtonProps>(({
  theme,
  color,
  selected,
  disabled,
  brand,
  mode
}: RadioButtonProps) => ({
  alignItems: 'center',
  borderColor: getCircleColor(selected, disabled, color, theme, brand, mode),
  borderRadius: 12,
  borderWidth: '2px',
  height: 20,
  justifyContent: 'center',
  width: 20
}))

export const Center = styled.View<RadioButtonProps>(({
  theme,
  color,
  selected,
  disabled,
  brand
}: RadioButtonProps) => ({
  backgroundColor: getCircleColor(selected, disabled, color, theme, brand),
  borderRadius: `${theme.radioButton.borderRadius}px`,
  height: 10,
  width: 10
}))

export const Wrapper = styled.View(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: 8,
}))
