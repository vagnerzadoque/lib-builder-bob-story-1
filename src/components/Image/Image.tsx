/* eslint-disable react/display-name */
import React, { FunctionComponent, forwardRef } from 'react'

import { Image as RNImage } from 'react-native'
import * as S from './Image.styles'
import { ImageProps } from './Image.types'
import { Highlight } from './Hightlight'

type ImageRef = React.ElementRef<typeof RNImage>;

export const Image:
  FunctionComponent<ImageProps> = forwardRef<ImageRef, ImageProps>((props, ref) => {
    const {
      variant = 'standard', radius = 'none', fade, children, testID, ...rest
    } = props

    return (
      <S.Wrapper radius={radius} testID={testID}>
        {radius !== 'circle' && (
        <S.Content>
          {children}
        </S.Content>
        )}
        {variant === 'highlight' && <Highlight fade={fade} variant={variant} />}
        <S.Image ref={ref} {...rest} />
      </S.Wrapper>
    )
  })
