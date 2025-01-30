import styled from 'styled-components/native'
import { buildTheme } from "../theme"

const themes = buildTheme("natura_v3", "light")

export const TextWithTheme = styled.Text`
  color: ${themes.color.onBackground};
`

export const ContainerWithTheme = styled.View`
  background-color: ${themes.color.background};
`

export const StoriesContainer = styled.ScrollView`
  background-color: ${themes.color.background};
  height: 100%;
`

export const ContainerRow = styled(ContainerWithTheme)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const ContainerWithBorder = styled(ContainerWithTheme)`
  border-color: ${themes.color.lowEmphasis};
  border-width: 1;
  color: ${themes.color.lowEmphasis};
`
