/* eslint-disable max-len */
/* eslint-disable complexity */
import styled from 'styled-components/native'
import { BrandTypes } from '../../common/brandTypes'
import {
  Theme,
  buildTheme
} from '../../common/theme'
import { CheckboxColors, CheckboxProps } from './Checkbox.types'

type CheckboxStyleProps = {
  theme: Theme;
}

type BoxStyleProps = CheckboxProps & CheckboxStyleProps

function getBoxColor(
  selected = false,
  disabled: boolean,
  color: CheckboxColors,
  theme: Theme,
  brand?: BrandTypes,
  mode?: 'light' | 'dark'
) {
  const themeSwitch = brand ? buildTheme(brand, mode ?? 'light') : theme
  if (disabled) {
    return themeSwitch.color.lowEmphasis
  }

  if (selected) {
   
      return color === 'secondary' ? themeSwitch.color.secondary : themeSwitch.color.primary
   
  }

  return themeSwitch.color.mediumEmphasis
}

const getlabelColor = (theme: Theme, brand?: BrandTypes, mode?: 'light' | 'dark') => {
  
    const themeSelectLabel = brand ? buildTheme(brand, mode ?? 'light') : theme
    return themeSelectLabel.color.onBackground
  
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  flex-direction: row;
  align-items: center;
`

export const Label = styled.Text<{ theme: Theme; disabled: boolean; brand?: BrandTypes; mode: 'light' | 'dark' }>(({
  theme, disabled, brand, mode
}) => ({
  color: disabled ? theme.color.lowEmphasis : getlabelColor(theme, brand, mode),
  fontFamily: theme.checkbox.label.primary.fontFamily,
  fontSize: theme.checkbox.label.fontSize,
  fontWeight: theme.checkbox.label.primary.fontWeight,
  letterSpacing: theme.checkbox.label.letterSpacing,
  lineHeight: theme.checkbox.label.fontSize * theme.checkbox.label.lineHeight,
  marginLeft: theme.spacing.tiny
}))

export const Box = styled.View<BoxStyleProps>(({
  theme,
  color = 'primary',
  brand,
  mode,
  selected,
  disabled = false
}: BoxStyleProps) => ({
  alignItems: 'center',
  backgroundColor: selected ? getBoxColor(selected, disabled, color, theme, brand, mode) : 'transparent',
  borderColor: getBoxColor(selected, disabled, color, theme, brand, mode),
  borderRadius: theme.checkbox.borderRadius,
  borderWidth: 2,
  height: 20,
  justifyContent: 'center',
  width: 20
}))

export const Wrapper = styled.View(({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: 8
}))
