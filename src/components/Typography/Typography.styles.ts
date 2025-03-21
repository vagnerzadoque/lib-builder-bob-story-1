/* eslint-disable max-len */
import styled from 'styled-components/native'

import { TypographyProps } from './Typography.types'

export const Typography = styled.Text<TypographyProps>(({ theme, variant = 'heading1' }) => ({
  color: theme.color.highlight,
  fontSize: theme[variant].fontSize,
  fontWeight: theme[variant].fontWeight,
  letterSpacing: theme[variant].letterSpacing
}))
