import styled, { css } from 'styled-components/native'
import { Theme } from '@naturacosmeticos/natds-themes/react-native'
import {
  TagColors, TagPositions, TagSizes
} from './Tag.types'
import { BrandTypes } from '../../common/brandTypes'
import { buildTheme } from '../../common/theme'

type TagStyleBaseProps = {
  theme: Theme;
}

type ContainerStyleProps = TagStyleBaseProps & {
  color?: TagColors;
  size?: TagSizes;
  borderPosition?: TagPositions;
  brand?: BrandTypes;
}

export type LabelStyleProps = TagStyleBaseProps & {
  color?: TagColors;
  brand?: BrandTypes;
}

export const getBorderPosition = ({ theme, size = 'small', borderPosition = 'default' }: ContainerStyleProps) => {
  const styles = {
    default: {
      borderRadius: theme.tag[size].borderRadius.enable
    },
    left: {
      borderBottomLeftRadius: theme.tag[size].borderRadius.enable,
      borderBottomRightRadius: theme.tag[size].borderRadius.disable,
      borderTopLeftRadius: theme.tag[size].borderRadius.enable,
      borderTopRightRadius: theme.tag[size].borderRadius.disable
    },
    right: {
      borderBottomLeftRadius: theme.tag[size].borderRadius.disable,
      borderBottomRightRadius: theme.tag[size].borderRadius.enable,
      borderTopLeftRadius: theme.tag[size].borderRadius.disable,
      borderTopRightRadius: theme.tag[size].borderRadius.enable
    }
  }

  return styles[borderPosition]
}

export const getTextColorByName = ({ theme, color = 'primary', brand }: LabelStyleProps) => {
  const styles = {
    alert: theme.color.onAlert,
    link: theme.color.onLink,
    primary: theme.color.onPrimary,
    secondary: theme.color.onSecondary,
    success: theme.color.onSuccess,
    warning: theme.color.onWarning
  }
  if (brand) {
    const themeSelected = buildTheme(brand, 'light')
    const stylesBrand = {
      alert: themeSelected.color.onAlert,
      link: themeSelected.color.onLink,
      primary: themeSelected.color.onPrimary,
      secondary: themeSelected.color.onSecondary,
      success: themeSelected.color.onSuccess,
      warning: themeSelected.color.onWarning
    }
    return stylesBrand[color]
  }

  return styles[color]
}

export const getPaddingBySize = ({ theme, size = 'small' }: ContainerStyleProps) => {
  if (size === 'standard') {
    return {
      paddingHorizontal: theme.spacing.tiny,
      paddingVertical: theme.spacing.micro
    }
  }

  return { paddingHorizontal: theme.spacing.tiny }
}
export const getBackGroundColor = ({ theme, color = 'primary', brand }: ContainerStyleProps) => {
  if (brand) {
    const themeSelectBack = buildTheme(brand, 'light')
    return themeSelectBack.color[color]
  }
  return theme.color[color]
}

export const Container = styled.View<ContainerStyleProps>(({
  theme, color = 'primary', size, borderPosition, brand
}: ContainerStyleProps) => ({
  ...getBorderPosition({ borderPosition, size, theme }),
  ...getPaddingBySize({ size, theme }),
  alignSelf: 'flex-start',
  backgroundColor: getBackGroundColor({ theme, color, brand })
}))

export const Label = styled.Text<LabelStyleProps>`
  ${({ theme, color, brand }: LabelStyleProps) => css`
    color: ${getTextColorByName({ color, theme, brand })};
    font-family: ${theme.tag.label.primary.fontFamily};
    font-size: ${theme.tag.label.fontSize}px;
    font-weight: ${theme.tag.label.primary.fontWeight};
    letter-spacing: ${theme.tag.label.letterSpacing}px;
    line-height: ${theme.tag.label.fontSize * theme.tag.label.lineHeight}px;
  `}
`

export const LabelContainer = styled.View(() => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: 5
}))
