import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { iconNames } from '@naturacosmeticos/natds-icons'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { Tag, tagPropsDefault } from './Tag'
import { View } from 'react-native'
import { brands, BrandTypes } from '../../common/brandTypes'

const description = ` [Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/5470453911/Figma+gayaTag) 

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
