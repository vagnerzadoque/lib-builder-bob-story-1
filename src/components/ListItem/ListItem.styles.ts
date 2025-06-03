import styled from 'styled-components/native'

import { ListItemProps } from './ListItem'
import { buildColorWithOpacity, getColorPrimary, getOpacityMediumLow, getSize, getTheme } from '../../common/theme'


const backgroundStyles = ({ selected, theme }: Required<ListItemProps>) => (
  selected
    ? buildColorWithOpacity(getColorPrimary, getOpacityMediumLow, theme)
    : 'transparent'
)

const getSizeMedium = getTheme((theme) => getSize(theme, 'medium'))

export const ListItem = styled.View<ListItemProps>`
  background: ${backgroundStyles};
  min-height: ${getSizeMedium}px;
`
