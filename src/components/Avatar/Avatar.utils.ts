/* eslint-disable sort-keys */

import { Theme } from '../../common/theme'
import { AvatarSizes } from './Avatar.types'




export const getAvatarBySize = (size: AvatarSizes, theme: Theme) => {

  return {
    size: theme.size[size],
    fontSize: theme.avatar[size].fontSize
  }
}
