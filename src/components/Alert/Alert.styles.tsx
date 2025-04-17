/* eslint-disable max-len */
import styled from 'styled-components/native'
import {
  Theme
} from '../../common/theme'
import {
  AlertCustomProps, AlertProps, Types, Variants
} from './Alert.types'

type AlertBaseprops = {
  theme: Theme
}

type AlertWrapperProp =  AlertProps & AlertCustomProps & AlertBaseprops

const getAlertStyles = (
  type: Types = 'info',
  variant: Variants = 'standard',
  backgroundColorName: keyof Theme['color'] = 'link',
  borderColorName:  keyof Theme['color'] = 'link'
) => (theme: Theme) => {
  const alertStylesMap = {
    info:    theme.color.link,
    error:   theme.color.alert,
    success: theme.color.success,
    warning: theme.color.warning,
    custom:  theme.color[backgroundColorName]
  };

  const styles = {
    standard: {
      backgroundColor: `${alertStylesMap[type]}29`
    },
    filled: {
      backgroundColor: `${alertStylesMap[type]}29`
    },
    outlined: {
      backgroundColor: `${alertStylesMap[type]}29`,
      borderColor: alertStylesMap[type]
    },
    custom: {
      backgroundColor: `${theme.color[backgroundColorName]}29`,
      borderColor: theme.color[borderColorName]
    }
  };

  return type !== 'custom' ? styles[variant] : styles.custom;
};


export const AlertWrapper = styled.View<AlertWrapperProp>(({
  theme, type, variant, backgroundColorName, borderColorName
}) => ({
  ...getAlertStyles(type, variant, backgroundColorName, borderColorName)(theme),
  borderWidth: variant === 'outlined' ? 1 : 0,
  borderRadius: theme.alert.borderRadius,
  flexDirection: 'row',
  margin: theme.spacing.small,
  padding: theme.spacing.small
}))

export const AlertContent = styled.View(() => ({
  flexDirection: 'column',
  flexShrink: 1
}))

export const IconContent = styled.View(({ theme }) => ({
  marginRight: theme.spacing.tiny,
  marginTop: 2
}))

export const AlertTitle = styled.Text<AlertWrapperProp>(({ theme, titleColorName = 'neutral900' }) => ({
  flexWrap: 'wrap',
  color: theme.color[titleColorName],
  fontFamily: theme.alert.title.primary.fontFamily,
  fontSize: theme.alert.title.fontSize,
  fontWeight: theme.alert.title.primary.fontWeight,
  letterSpacing: theme.alert.title.letterSpacing,
  lineHeight: theme.alert.title.fontSize * theme.alert.title.lineHeight,
  marginBottom: theme.spacing.tiny
}))

export const AlertText = styled.Text<AlertWrapperProp>(({ theme, messageColorName = 'neutral900' }) => ({
  color: theme.color[messageColorName],
  fontFamily: theme.alert.content.primary.fontFamily,
  fontSize: theme.alert.content.fontSize,
  fontWeight: theme.alert.content.primary.fontWeight,
  letterSpacing: theme.alert.content.letterSpacing,
  lineHeight: theme.alert.content.fontSize * theme.alert.content.lineHeight
}))
