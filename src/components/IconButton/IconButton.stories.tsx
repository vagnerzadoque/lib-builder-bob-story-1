import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer';
import { icons } from '@naturacosmeticos/natds-icons';
import { BrandTypes, brands } from '../../common/brandTypes';
import { View } from 'react-native';
import { GayaProvider } from '../../common/providers/GayaProvider';
// Função para extrair descrição do componente na aba de docs.
// (opcional – apenas exemplificando como manter.)
const extractComponentDescription = () => `[Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/5473928095/Figma+gayaIconButton)

## Technical Usages Examples
`;


const colorOptions = ['highEmphasis', 'primary', 'light', 'default'];
const backgroundStyleOptions = ['none', 'float', 'overlay'];
const sizeOptions = ['semi', 'semiX', 'medium'];


const meta: Meta<typeof IconButton> = {
  title: 'Componentes/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      extractComponentDescription,
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: colorOptions,
      description: 'Controla a cor principal do ícone (ex.: "highEmphasis", "primary", "light", ...).',
    },
    iconColor: {
      control: 'select',
      options: colorOptions,
      description: 'Define a cor do ícone especificamente.',
    },
    backgroundStyle: {
      control: 'select',
      options: backgroundStyleOptions,
      description: 'Estilo de background: none, float, overlay.',
    },
    size: {
      control: 'select',
      options: sizeOptions,
      description: 'Tamanho do botão: semi, semiX, medium.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão quando true.',
    },
    icon: {
      control: 'select',
      description: 'Nome do ícone (ex.: "filled-navigation-arrow-back").',
      options: Object.keys(icons),
    },
    onPress: {
      action: 'clicked',
      description: 'Função executada ao pressionar o botão.',
    },
    testID: {
      control: 'text',
      description: 'ID de teste para ferramentas de automação.',
      table: {
        disable: true,
      },
      
    },
    accessibilityHint: {
      table: {
        disable: true,
      },
    },
    accessibilityLabel: {
      table: {
        disable: true,
      },
    }
    
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

/**
 * HISTÓRIA INTERATIVA:
 * - Usa `args` e `argTypes` para permitir que o usuário modifique as props.
 * - Aparece como "Interactive" no Storybook.
 */
export const Interactive: Story = {
  // Valores iniciais (padrões) para os controles
  args: {
    color: 'highEmphasis',
    icon: 'filled-default-mockup',
    size: 'semi',
    backgroundStyle: 'none',
    disabled: false,
    testID: 'ds-icon-button',
  },
  render: (args) => (
    <StoryContainer title="Interactive ">
      <IconButton {...args} />
    </StoryContainer>
  ),
};



/**
 * Variants
 */
export const Variants: Story = {
  name: 'Variants',
  render: () => (
    <StoryWrapper title="Variants">
      <StoryContainer title="Standard">
        <IconButton onPress={() => ({})} />
      </StoryContainer>
      <StoryContainer title="Float">
        <IconButton onPress={() => ({})} backgroundStyle="float" />
      </StoryContainer>
      <StoryContainer title="Overlay">
        <IconButton onPress={() => ({})} iconColor="light" backgroundStyle="overlay" />
      </StoryContainer>
      <StoryContainer title="Disabled Standard">
        <IconButton onPress={() => ({})} disabled backgroundStyle="none" />
      </StoryContainer>
      <StoryContainer title="Disabled Float">
        <IconButton onPress={() => ({})} disabled backgroundStyle="float" />
      </StoryContainer>
      <StoryContainer title="Disabled Overlay">
        <IconButton onPress={() => ({})} disabled iconColor="light" backgroundStyle="overlay" />
      </StoryContainer>
    </StoryWrapper>
  ),
};

/**
 * Colors
 */
export const Colors: Story = {
  name: 'Colors',
  render: () => (
    <StoryWrapper title="Colors">
      <StoryContainer title="Primary" style={{ backgroundColor: '#eaeaea' }}>
        <IconButton onPress={() => ({})} iconColor="primary" />
      </StoryContainer>
      <StoryContainer title="Light" style={{ backgroundColor: '#eaeaea' }}>
        <IconButton onPress={() => ({})} iconColor="light" />
      </StoryContainer>
      <StoryContainer title="HighEmphasis" style={{ backgroundColor: '#eaeaea' }}>
        <IconButton onPress={() => ({})} iconColor="highEmphasis" />
      </StoryContainer>
    </StoryWrapper>
  ),
};

/**
 * Sizes
 */
export const Sizes: Story = {
  name: 'Sizes',
  render: () => (
    <StoryWrapper title="Sizes">
      <StoryContainer title="Semi">
        <IconButton onPress={() => ({})} size="semi" />
      </StoryContainer>
      <StoryContainer title="SemiX">
        <IconButton onPress={() => ({})} size="semiX" />
      </StoryContainer>
      <StoryContainer title="Medium">
        <IconButton onPress={() => ({})} size="medium" />
      </StoryContainer>
    </StoryWrapper>
  ),
};


export const withAllThemesAndTypes: Story = {

  render: (Story, context) => { 
    const backgroundValue = context.globals.backgrounds?.value;
   return <View style={{ gap: 12 }}>
    
      { 
       
      brands.map((brand, key) => {

        return(
          <GayaProvider
            brand={brand.value as BrandTypes}
            mode={backgroundValue === '#000000' ? 'dark' : 'light'}
            key={brand.value}
          >
          <StoryContainer key={key} title={brand.name as BrandTypes}>
          <IconButton onPress={() => ({})} size="medium" color='primary' />
        </StoryContainer>
        </GayaProvider>

        )
      }
    )}
  </View>
  }

}
