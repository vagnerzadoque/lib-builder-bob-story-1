import styled from 'styled-components/native'
import { buildTheme, Theme } from '../../common/theme'
import { BadgeColors } from './Badge.types'
import { BrandTypes } from '../../common/brandTypes'

export type BadgeVariant = 'standard' | 'pulse' | 'dot'

export interface BadgeStyleProps {
  theme: Theme
  color: BadgeColors
  variant?: BadgeVariant
  brand?: BrandTypes
}

const convertPulseToDot = (variant: BadgeVariant) =>
  variant === 'pulse' ? 'dot' : variant

const getThemeBadge = (theme: Theme) => 
  ({ color, brand }: Pick<BadgeStyleProps, 'color' | 'brand'>) => {
    if (brand) {
      const themeSelected = buildTheme(brand, 'light')
      return {
        back: themeSelected.badge.color[color].background,
        label: themeSelected.badge.color[color].label
      }
    }
    return {
      back: theme.badge.color[color].background,
      label: theme.badge.color[color].label
    }
  }

function getHorizontalPadding(variant: BadgeVariant, theme: Theme) {
  if (variant === 'standard') {
    return { paddingHorizontal: theme.spacing.micro }
  }
  return {}
}

function getWidthByVariant(variant: BadgeVariant, theme: Theme) {
  if (variant !== 'standard') {
    const h = theme.badge[convertPulseToDot(variant)].height
    return { width: h }
  }
  return {}
}

export const Container = styled.View({
  alignContent: 'center',
  alignItems: 'center'
})

export const BadgeBase = styled.View<BadgeStyleProps>(
  ({ theme, color, variant = 'standard', brand }) => {
    const { back } = getThemeBadge(theme)({ color, brand })

    return {
      ...getWidthByVariant(variant, theme),
      backgroundColor: back, // <-- se der erro, force as string: (back as string)
      borderRadius: theme.badge[convertPulseToDot(variant)].borderRadius,
      height: theme.badge[convertPulseToDot(variant)].height
    }
  }
)

export const Circle = styled(BadgeBase)<BadgeStyleProps>(
  ({ theme, variant = 'standard' }) => ({
    ...getHorizontalPadding(variant, theme),
    alignContent: 'center',
    justifyContent: 'center'
  })
)

export const Label = styled.Text<BadgeStyleProps>(
  ({ theme, color, variant = 'standard', brand }) => {
    const { label } = getThemeBadge(theme)({ color, brand })

    return {
      color: label, // idem, se preciso => (label as string)
      fontFamily: theme.badge.label.primary.fontFamily,
      fontSize: theme.badge.label.fontSize,
      fontWeight: theme.badge.label.primary.fontWeight,
      letterSpacing: theme.badge.label.letterSpacing,
      lineHeight: theme.badge[convertPulseToDot(variant)].height,
      textAlignVertical: 'center'
    }
  }
)
