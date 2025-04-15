/* eslint-disable max-len */
import { Theme } from '@naturacosmeticos/natds-themes/react-native'
import { CSSObject } from 'styled-components'
import styled from 'styled-components/native'
import { getButtonStyleBySize } from '../GayaButton/GayaButton.utils'
import { CounterSizes } from './Counter.types'

type CounterStyleProps = {
  theme: Theme;
}

type ContainerStyleProps = CounterStyleProps & {
  size: CounterSizes;
}

type RadiusButtonRightProps = CounterStyleProps & {
  size: CounterSizes;
  disabled: boolean
}

export const Label = styled.Text<{ theme: Theme }>(({ theme }): CSSObject => ({
  color: theme.color.mediumEmphasis,
  fontFamily: theme.counter.label.primary.fontFamily,
  fontSize: theme.counter.label.fontSize,
  fontWeight: theme.counter.label.primary.fontWeight,
  letterSpacing: theme.counter.label.letterSpacing,
  lineHeight: theme.counter.label.fontSize * theme.counter.label.lineHeight,
  marginBottom: theme.spacing.micro
}))

export const Container = styled.View<ContainerStyleProps>(({ size, theme }: ContainerStyleProps): CSSObject => ({
  alignItems: 'center',
  alignSelf: 'flex-start',
  backgroundColor: theme.color.surface,
  borderColor: theme.color.lowEmphasis,
  borderRadius: theme.counter.borderRadius,
  borderWidth: 1,
  flexDirection: 'row',
  height: theme.size[size],
  overflow: 'hidden'
}))

export const Input = styled.TextInput<{ theme: Theme }>(({ theme }): CSSObject => ({
  borderColor: theme.color.lowEmphasis,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  color: theme.color.highEmphasis,
  fontFamily: theme.counter.content.primary.fontFamily,
  fontSize: theme.counter.content.fontSize,
  fontWeight: theme.counter.content.primary.fontWeight,
  height: '100%',
  letterSpacing: theme.counter.content.letterSpacing,
  lineHeight: theme.counter.content.fontSize * theme.counter.content.lineHeight,
  paddingHorizontal: theme.spacing.small,
  textAlign: 'center',
  width: theme.size.mediumX,
}))


export const RadiusButtonRight = styled.View<RadiusButtonRightProps>(({ size, theme, disabled }: RadiusButtonRightProps): CSSObject => ({
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  borderTopRightRadius: theme.counter.borderRadius,
  borderBottomRightRadius: theme.counter.borderRadius,
  borderColor: theme.color.lowEmphasis,
  alignItems: 'center',
  backgroundColor: disabled ? theme.color.surfaceDisabled : theme.color.surface,
  flexDirection: 'row',
  ...getButtonStyleBySize({
    size,
    theme,
  }),
    cursor: 'pointer',
    height: '100%',
    minWidth: '46px',
     justifyContent: 'center'
}));

export const RadiusButtonLeft = styled.View<RadiusButtonRightProps>(({ size, theme, disabled }: RadiusButtonRightProps): CSSObject => ({
  borderTopLeftRadius: theme.counter.borderRadius,
  borderBottomLeftRadius: theme.counter.borderRadius,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  borderColor: theme.color.lowEmphasis,
  height: '100%',
  alignItems: 'center',
  backgroundColor: disabled ? theme.color.surfaceDisabled : theme.color.surface,
  flexDirection: 'row',
  cursor: 'pointer',
  ...getButtonStyleBySize({
    size,
    theme,
  }),
  minWidth: '46px',
  justifyContent: 'center'
}));
