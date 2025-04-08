import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { iconNames } from '@naturacosmeticos/natds-icons'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { Tag, tagPropsDefault } from './Tag'
import { View } from 'react-native'
import { brands, BrandTypes } from '../../common/brandTypes'

const description = `
> Tags are used to label, categorize, or organize items using keywords that describe them.

## Properties
| Property                  | Values                                              | Status        |
|--------------------------|-----------------------------------------------------|----------------|
| **variant (no prop)**    | Standard                                            | ✅ Available   |
| **accessible**           | true/false                                          | ✅ Available   |
| **accessibilityLabel**   | string                                              | ✅ Available   |
| **accessibilityHint**    | string                                              | ✅ Available   |
| **accessibilityRole**    | accessibilityRole                                   | ✅ Available   |
| **accessibilityState**   | accessibilityState                                  | ✅ Available   |
| **allowFontScaling**     | true/false                                          | ✅ Available   |
| **maxFontSizeMultiplier**| number                                              | ✅ Available   |
| **text**                 | string                                              | ✅ Available   |
| **borderPosition**       | default, left, right                                | ✅ Available   |
| **size**                 | small, standard                                     | ✅ Available   |
| **color**                | alert, link, primary, secondary, success, warning   | ✅ Available   |
| **iconRight**            | icon name                                           | ✅ Available   |
| **iconLeft**             | icon name                                           | ✅ Available   |
| **brand**                | avon, avon_v2, natura, natura_v2, theBodyShop, consultoriaDeBeleza, casaEestilo | ✅ Available |
`

const meta: Meta<typeof Tag> = {
  title: 'Componentes/Tag',
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    size: {
      control: 'radio',
      options: ['small', 'standard']
    },
    color: {
      control: 'select',
      options: ['alert', 'link', 'primary', 'secondary', 'success', 'warning']
    },
    borderPosition: {
      control: 'radio',
      options: ['default', 'left', 'right']
    },
    iconLeft: {
      control: 'select',
      options: [undefined, ...iconNames]
    },
    iconRight: {
      control: 'select',
      options: [undefined, ...iconNames]
    },
    brand: {
      control: 'select',
      options: ['avon', 'avon_v2', 'natura', 'natura_v2', 'theBodyShop', 'consultoriaDeBeleza', 'casaEestilo']
    }
  },
  args: {...tagPropsDefault, text: 'Design System'}
}

export default meta

type Story = StoryObj<typeof Tag>

export const Interactive: Story = {
  render: (args) => (
    <StoryContainer title="Standard">
      <Tag {...args} />
    </StoryContainer>
  )
}


export const Sizes: Story = {
  render: (args) => (
    <>
      <StoryContainer title="Standard">
        <Tag {...args} size="standard" />
      </StoryContainer>
      <StoryContainer title="Small">
        <Tag {...args} size="small" />
      </StoryContainer>
    </>
  )
}

export const Colors: Story = {
  render: (args) => (
    <>
      <StoryContainer title="Primary">
        <Tag {...args} color="primary" />
      </StoryContainer>
      <StoryContainer title="Secondary">
        <Tag {...args} color="secondary" />
      </StoryContainer>
      <StoryContainer title="Alert">
        <Tag {...args} color="alert" />
      </StoryContainer>
      <StoryContainer title="Warning">
        <Tag {...args} color="warning" />
      </StoryContainer>
      <StoryContainer title="Success">
        <Tag {...args} color="success" />
      </StoryContainer>
      <StoryContainer title="Link">
        <Tag {...args} color="link" />
      </StoryContainer>
    </>
  )
}

export const TagIcon: Story = {
  render: (args) => (
    <StoryContainer title="With Icons">
      <Tag {...args} />
    </StoryContainer>
  )
}

export const withAllThemesAndTypes: Story = {
  
  name: 'withAllThemesAndTypes',
  render: (args) => <View style={{ gap: 12 }}>
    
      { brands.map((brand, key) => {

        return(
          <StoryContainer key={key} title={brand.name as BrandTypes}>
          <Tag {...args} brand={brand.value as BrandTypes} />
        </StoryContainer>

        )
      }
    )}
  </View>

}
