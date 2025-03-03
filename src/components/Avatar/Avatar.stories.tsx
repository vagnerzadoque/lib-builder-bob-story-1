// Avatar.stories.tsx

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.'; // <— seu componente
import { IconName, iconNames } from '@naturacosmeticos/natds-icons';

import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer';
import NatAvatar from '../../assets/images/nat_avatar.jpg';
import { BrandTypes, brands } from '../../common/brandTypes';
import { View } from 'react-native';
// Esta descrição será exibida na aba de Docs do Storybook
const description = ` [Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/4792877223/Componente+Avatar)




## Props
  | Prop-Figma    | Prop                      |        Status           |
  |---------------|---------------------------|-------------------------|
  | **size**      | **size**                  |  ✅ Available           |
  | **----**      | **iconName**              |  ❌ not exist in conf   |
  | **type**      | **type**                  |  ❌ Inconsistent value |
  | **border**    | **-------**               |  ❌ not exist in code  |
  | **color**     | **color**                 |  ✅ Available           |
  | **-----**     | **brand**                 |  ❌ not exist in conf   |
  | **-----**     | **text**                  |  ❌ not exist in conf   |
  | **-----**     | **imgSource**             |  ❌ not exist in conf   |

  ## Props / Values
  | ** Figma: **size**** | ** Stack:   **size**    |
  |-----------------------|------------------------|
  | standard              | standard               |
  | medium                | medium                 |
  | semiX                 | semiX                  |
  | semi                  | semi                   |
  | large                 | -----                  |
  | --------              | largeXXX               |


  ## Props / Values
  | ** Figma: **type**    | ** Stack:   **type**   |
  |-----------------------|------------------------|
  | image                 | image                  |
  | icon                  | icon                   |
  | label                 | letter                 |




## Technical Usages Examples
`;

// ======================================================
// 1) Defina o "meta" com título e componente-alvo
// ======================================================
const meta: Meta<typeof Avatar> = {
  title: 'Componentes/Avatar',
  component: Avatar,
  parameters: {
    controls: {
      sort: 'alpha',
    },
    docs: {
      description: {
        component: description,
      },
    },
    
  },
  tags: ['autodocs'],
};

export default meta;

// Cria um alias de tipo para evitar repetição
type Story = StoryObj<typeof Avatar>;

// ======================================================
// 2) Exemplos estáticos (sem controles interativos)
// ======================================================


export const Variants: Story = {
  render: () => (
    <StoryWrapper title="Variants">
      <StoryContainer title="Image">
        <Avatar type="image" size="medium" imgSource={NatAvatar} />
      </StoryContainer>
      <StoryContainer title="Letter">
        <Avatar type="letter" size="medium" text="Design System" />
      </StoryContainer>
      <StoryContainer title="Icon">
        <Avatar type="icon" size="medium" iconName="outlined-default-mockup" />
      </StoryContainer>
    </StoryWrapper>
  ),
};

export const Brands: Story = {
  render: () => (
    <StoryWrapper title="Brands">
      <StoryContainer title="Avon">
        <Avatar brand="avon" type="letter" size="medium" text="Design System" />
      </StoryContainer>
      <StoryContainer title="Avon v2">
        <Avatar brand="avon_v2" type="letter" size="medium" text="Design System" />
      </StoryContainer>
      <StoryContainer title="Avon">
        <Avatar brand="avon" type="icon" size="medium" iconName="outlined-default-mockup" />
      </StoryContainer>
      <StoryContainer title="Avon v2">
        <Avatar brand="avon_v2" type="icon" size="medium" iconName="outlined-default-mockup" />
      </StoryContainer>
    </StoryWrapper>
  ),
};

export const Sizes: Story = {
  render: () => (
    <StoryWrapper title="Sizes">
      <StoryContainer title="Standard">
        <Avatar type="icon" size="standard" iconName="outlined-default-mockup" />
      </StoryContainer>
      <StoryContainer title="Semi">
        <Avatar type="icon" size="semi" iconName="outlined-default-mockup" />
      </StoryContainer>
      <StoryContainer title="SemiX">
        <Avatar type="icon" size="semiX" iconName="outlined-default-mockup" />
      </StoryContainer>
      <StoryContainer title="Medium">
        <Avatar type="icon" size="medium" iconName="outlined-default-mockup" />
      </StoryContainer>
      <StoryContainer title="LargeXXX">
        <Avatar type="icon" size="largeXXX" iconName="outlined-default-mockup" />
      </StoryContainer>
    </StoryWrapper>
  ),
};

// ======================================================
// 3) Exemplo interativo usando argTypes/args
//    (substitui o antigo addon-knobs)
// ======================================================
export const Interactive: Story = {
  // Defina como os controles devem aparecer no Storybook
  argTypes: {
    type: {
      control: 'select',
      options: ['icon', 'image', 'letter'],
    },
    text: {
      control: 'text',
    },
    imgSource: {
      control: 'text',
    },
    iconName: {
      control: 'select',
      options: iconNames as Array<IconName>,
    },
    size: {
      control: 'select',
      options: ['standard', 'medium', 'semiX', 'semi', 'largeXXX'],
    },
    brand: {
      table: {
        category: 'Legacy Props',
      },
    },
  },
  // Valores padrão das props no modo interativo
  args: {
    type: 'icon',
    iconName: 'outlined-default-mockup',
    size: 'medium',
    brand: undefined
  },
  // Como o componente deve ser renderizado
  render: (args) => (
    <StoryContainer title="Interactive">
      <Avatar {...args} />
    </StoryContainer>
  ),
};

export const withAllThemesAndTypes: Story = {
  
  name: 'withAllThemesAndTypes',
  args: {
    type: 'icon',
    iconName: 'outlined-default-mockup',
    size: 'medium',
    brand: undefined
  },
  render: (args) => <View style={{ gap: 12 }}>
    
      { brands.map((brand, key) => {

        return(
          <StoryContainer key={key} title={brand.name as BrandTypes}>
          <Avatar {...args} brand={brand.value as BrandTypes} />
        </StoryContainer>

        )
      }
    )}
  </View>

}
