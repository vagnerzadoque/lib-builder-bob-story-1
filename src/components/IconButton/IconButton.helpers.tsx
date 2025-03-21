import { IconColors, IconSizes } from '../GayaIcon/GayaIcon.props'
import {
  buildColorWithOpacity,
  Theme
} from '../../common/theme'
import {
  IconButtonColors,
  IconContainerProps,
  IconButtonBackgroundStyle,
  IconButtonSizes
} from './IconButton.types'

export const getContainerBackgroundColor = ({
  theme,
  backgroundStyle = 'none',
  disabled
}: Omit<IconContainerProps, 'size'> & { theme: Theme }) => {
  const float = disabled
    ? theme.color.lowEmphasis
    : theme.color.surface
  const getColorHighlight = theme.color.highlight
  const getOpacityVeryHigh = theme.opacity.veryHigh
  const backgroundColor: { [keys in IconButtonBackgroundStyle]: string } = {
    float,
    none: 'transparent',
    overlay: buildColorWithOpacity(getColorHighlight, getOpacityVeryHigh)
  }

  return backgroundColor[backgroundStyle]
}

export const getIconSize = (size: IconButtonSizes) => {
  const iconSize: { [keys in IconButtonSizes]: IconSizes } = {
    medium: 'semiX',
    semi: 'standard',
    semiX: 'semi',
  }

  return iconSize[size]
}

export const getIconColor = (color: IconButtonColors, disabled: boolean) => {
  const highEmphasis = disabled ? 'mediumEmphasis' : 'highEmphasis'

  const iconColor: Record<IconButtonColors, IconColors> = {
    default: highEmphasis,
    highEmphasis,
    light: disabled ? 'lowEmphasis' : 'surface',
    primary: disabled ? 'mediumEmphasis' : 'primary'
  }

  return iconColor[color]
}

export const getContainerElevation = (
  backgroundStyle: IconButtonBackgroundStyle,
  theme: Theme
) => {
  if (backgroundStyle === 'float') {
    return `elevation: ${theme.elevation.micro};`
  }
  return 'elevation: 0;'
}
