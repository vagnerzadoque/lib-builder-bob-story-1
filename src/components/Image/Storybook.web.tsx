import React from 'react'

export const Svg = (props: {xml: string}) => {
  const { xml } = props

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: xml }} />
  )
}

export const Rect = (props: {xml: string}) => {
  const { xml } = props

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: xml }} />
  )
}

export const Defs = (props: {xml: string}) => {
  const { xml } = props

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: xml }} />
  )
}

export const LinearGradient = (props: {xml: string}) => {
  const { xml } = props

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: xml }} />
  )
}

export const Stop = (props: {xml: string}) => {
  const { xml } = props

  return (
    // eslint-disable-next-line react/no-danger
    <div dangerouslySetInnerHTML={{ __html: xml }} />
  )
}
