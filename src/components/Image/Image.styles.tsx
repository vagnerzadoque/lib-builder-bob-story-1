import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { Dimensions, Image as RNImage } from 'react-native';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { ImageBaseProps } from './Image.types';
import { ImageProps } from './Image.types';

type WrapperStyleProps = {
  theme: Theme;
} & Pick<ImageBaseProps, 'radius'>;

export const getBorderRadius = ({ theme, radius = 'none' }: WrapperStyleProps) => {
  const borders = {
    none: 0,
    medium: theme.borderRadius.medium,
    circle: Dimensions.get('window').width * 2,
  };

  return borders[radius] || borders.none;
};

export const Wrapper = styled.View<WrapperStyleProps>(({ theme, radius = 'none' }) => ({
  flex: 1,
  borderRadius: getBorderRadius({ theme, radius }),
  overflow: 'hidden',
}));

// 1) Vamos tipar a instância corretamente:
type ImageRef = React.ElementRef<typeof RNImage>;

// 2) Agora usamos esse tipo de instância no forwardRef:
const BaseImage = forwardRef<ImageRef, ImageProps>((props, ref) => {
  return <RNImage ref={ref} {...props} />;
});
BaseImage.displayName = 'BaseImage';

// 3) E estilizamos normalmente
export const Image = styled(BaseImage)({
  flex: 1,
  aspectRatio: 1,
});

export const Content = styled.View(() => ({
  position: 'absolute',
  top: 0,
  zIndex: 2,
  marginLeft: 8,
  marginRight: 8,
  marginTop: 8,
  alignItems: 'center',
  justifyContent: 'center',
}));
