import React, { useEffect, useRef, useCallback } from 'react'
import { Animated, Easing, Platform } from 'react-native'
import {
  Container, Layer, Line, View
} from './ProgressIndicator.styles'
import { ProgressIndicatorProps } from './ProgressIndicator.types'


export const ProgressIndicatorComponent = ({
  size = 'medium',
  showLayer = false,
  brand,
}: ProgressIndicatorProps) => {

  const duration = 1400

  const timer = useRef(new Animated.Value(0)).current
  const rotation = Animated.timing(timer, {
    duration,
    easing: Easing.inOut(Easing.quad),
    isInteraction: false,
    toValue: 1,
    useNativeDriver: Platform.OS !== 'web'
  })

  const minCircularRange = '0deg'
  const maxCircularRange = '720deg'

  const layerStyle = {
    transform: [
      {
        rotate: timer.interpolate({
          inputRange: [0, 1],
          outputRange: [minCircularRange, maxCircularRange]
        })
      }
    ]
  }



  const startRotation = useCallback((): void => {
    timer.setValue(0)
    Animated.loop(rotation).start()
  }, [rotation, timer])


  useEffect(() => {
    startRotation()
  }, [startRotation])

  return (
    <View size={size} showLayer={showLayer} brand={brand}>
      <Layer brand={brand} as={Animated.View} size={size} style={layerStyle}>
        <Container as={Animated.View} size={size} brand={brand}>
          <Line brand={brand} as={Animated.View} size={size} />
        </Container>
      </Layer>
    </View>
  )
}

export const ProgressIndicator = React.memo(
  ProgressIndicatorComponent
)
