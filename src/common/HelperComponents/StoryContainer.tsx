/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react'
import { CSSObject } from 'styled-components'
import styled from 'styled-components/native'
import { ContainerRow, ContainerWithTheme, TextWithTheme } from './ThemeHelper.styles'

type RCProps = {
  children: ReactNode,
  title: string
  style?: any
}

export const StoryContainer = ({ children, title, ...props }: RCProps) => (
  <Container>
    <Title>{title}</Title>
    <ContainerRow {...props}>
      {children}
    </ContainerRow>
  </Container>
)

export const VerticalStoryContainer = ({ children, title }: RCProps) => {
  const verticalStyle = { alignItems: 'flex-start', flexDirection: 'column' }

  return <StoryContainer {...{ children, title }} style={verticalStyle} />
}

export const StoryWrapper = ({ children, title = '' }: RCProps) => (
  <Wrapper>
    <Title>{title}</Title>
    <Content>
      {children}
    </Content>
  </Wrapper>
)

export const Separator = styled.View((): CSSObject => ({
  marginTop: 16
}))

const Container = styled(ContainerWithTheme)`
  max-width: 600px;
  padding: 16px;
`

const Wrapper = styled.View`
  padding: 16px;
`

const Content = styled.View``

const Title = styled(TextWithTheme)`
  margin-bottom: 8px;
`
