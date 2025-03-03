/* eslint-disable max-len */
import styled from 'styled-components/native'
import {
  Theme,  buildTheme
} from '../../common/theme'
import { AvatarSizes } from './Avatar.types'
import { GayaIcon } from '../GayaIcon/GayaIcon'
import { BrandTypes } from '../../common/brandTypes'
import { getAvatarBySize } from './Avatar.utils'

interface AvatarStyleProps {
  size: AvatarSizes;
  theme: Theme;
  brand?: BrandTypes;
}


const getAvatarFontSize = ({theme, size}: AvatarStyleProps) => getAvatarBySize(size, theme).fontSize

const getAvatarSize = ({theme, size}: AvatarStyleProps) => getAvatarBySize(size, theme).size

const getBorderRadiusBySize = (size: AvatarSizes, theme: Theme) => {

  return {
    borderRadius: getAvatarSize({theme, size}),
    height: getAvatarSize({theme, size}),
    width: getAvatarSize({theme, size})
  }
}

const getFontsBySize = (size: AvatarSizes, theme: Theme) => {


  return { fontSize: getAvatarFontSize({theme, size}) }
}

const getThemeSelect = (theme: Theme, brand?: BrandTypes) => {
  if (brand) {
    const themeSelectAvathar = buildTheme(brand, 'light')
    return {
      back: themeSelectAvathar.color.primary,
      label: themeSelectAvathar.color.onPrimary
    }
  }
  return {
    back: theme.color.primary,
    label: theme.color.onPrimary
  }
}

export const Container = styled.View<AvatarStyleProps>(({ size, theme, brand }) => ({
  ...getBorderRadiusBySize(size, theme),
  alignItems: 'center',
  backgroundColor: getThemeSelect(theme, brand).back,
  justifyContent: 'center'
}))

export const AvatarImage = styled.Image<AvatarStyleProps>(({ size, theme }) => ({
  ...getBorderRadiusBySize(size, theme)
}))

export const AvatarLetter = styled.Text<AvatarStyleProps>(({ size, theme, brand }) => ({
  ...getFontsBySize(size, theme),
  alignSelf: 'center',
  color: getThemeSelect(theme, brand).label,
  fontFamily: theme.avatar.primary.fontFamily,
  fontWeight: theme.avatar.primary.fontWeight
}))

export const AvatarIcon = styled(GayaIcon)(({ theme, brand }) => ({
  color: getThemeSelect(theme, brand).label,
  backgroundColor: getThemeSelect(theme, brand).back,
}))
