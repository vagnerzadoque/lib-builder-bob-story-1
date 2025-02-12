import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Meta, StoryObj } from '@storybook/react';

import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer';
import { Image } from './Image';
import NatAvatar from '../../assets/images/nat_avatar.jpg';
import { Badge } from '../Badge';

const webStoryMessage = Platform.OS === 'web' 
  ? ' (the effect can only be rendered within the native platforms)' 
  : '';

  const description = `
  > Informs the user of image content with possible resources for greater interaction
  
  ## Props
  | Prop-Figma    | Prop         |     Status    |
  |---------------|--------------|---------------|
  | **-------**   | **variant**  |  ❌ Inconsistent name  |
  | **radius**    | **radius**   |  ❌ Inconsistent value |
  | **fade**      | **fade**     |  ❌ Inconsistent value |
  | **source**    | **source**   |  ❌ Inconsistent name  |
  | **fallback**  | **fallback** |  ✅ Available (is available using the native onError method) |
  

  ## Props / Values
  | ** Figma: variant**   | ** Stack: variant**  |
  |-----------------------|----------------------|
  | --------              | standard             |
  | ---------             | highlight            |

  | ** Figma: radius**   | ** Stack: radius**    |
  |-----------------------|----------------------|
  | none,                 | none,                |
  | medium                | medium               |
  | circle                | circle               |
  | small                 | ------               |

  | ** Figma: fade**   | ** Stack: fade**    |
  |-----------------------|----------------------|
  | top,                  | top,                 |
  | left                  | left                 |
  | right                 | right                |
  | bottom                | bottom               |
  | none                  | ------               |
  | default               | ------               |


  | ** Figma: -------**   | ** Stack: source**    |
  |-----------------------|----------------------|
  | ------,               | string,              |
  | -------------------   | ImageSourcePropType  |


  | ** Figma: fallback**                             |   ** Stack: fallback**                         |
  |--------------------------------------------------|------------------------------------------------|
  | (is available using the native onError method)   | (is available using the native onError method) |
  
  
  ## Technical Usages Examples
  `;


const meta: Meta<typeof Image> = {
  title: 'Componentes/Image',
  component: Image,
  parameters: {
    controls: {
      sort: 'alpha',
    },
    docs: {
      description: {
        component: description,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Configurando os controles (argTypes)
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['standard', 'highlight'],
    },
    radius: {
      control: { type: 'select' },
      options: ['none', 'medium', 'circle'],
    },
    fade: {
      control: { type: 'select' },
      options: ['top', 'left', 'right', 'bottom', undefined],
    },
    // source normalmente não tem controle, mas poderíamos omitir ou
    // marcar como { control: 'text' } se quiséssemos strings
    source: {
      table: { disable: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * STORY PRINCIPAL (com Controls)
 */
export const Interactive: Story = {
  args: {
    variant: 'standard',
    radius: 'none',
    fade: undefined, // sem fade por padrão
    source: NatAvatar, 
  },
  render: (args) => (
    <StoryWrapper title="Interactive">
      <View style={{ width: 100, height: 100 }}>
        <Image {...args} />
      </View>
    </StoryWrapper>
  ),
};



export const Variants = () => (
  <StoryWrapper title="Variants">
    <StoryContainer title="Standard">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} />
      </View>
    </StoryContainer>
    <StoryContainer title={`Highlight${webStoryMessage}`}>
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} variant="highlight" />
      </View>
    </StoryContainer>
  </StoryWrapper>
);

export const Radius = () => (
  <StoryWrapper title="Radius">
    <StoryContainer title="None">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} />
      </View>
    </StoryContainer>
    <StoryContainer title="Medium">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} radius="medium" />
      </View>
    </StoryContainer>
    <StoryContainer title="Circle">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} radius="circle" />
      </View>
    </StoryContainer>
  </StoryWrapper>
);

export const Fade = () => (
  <StoryWrapper title={`Fade${webStoryMessage}`}>
    <StoryContainer title="Left">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} variant="highlight" fade="left" />
      </View>
    </StoryContainer>
    <StoryContainer title="Top">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} variant="highlight" fade="top" />
      </View>
    </StoryContainer>
    <StoryContainer title="Right">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} variant="highlight" fade="right" />
      </View>
    </StoryContainer>
    <StoryContainer title="Bottom">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} variant="highlight" fade="bottom" />
      </View>
    </StoryContainer>
  </StoryWrapper>
);

export const Content = () => (
  <StoryWrapper title="Content">
    <StoryContainer title="Components">
      <View style={{ width: 200, height: 200 }}>
        <Image source={NatAvatar} variant="highlight" fade="top">
          <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            <View style={{ alignContent: 'center', justifyContent: 'center', marginRight: 8 }}>
              <Badge variant="pulse" />
            </View>
          </View>
        </Image>
      </View>
    </StoryContainer>
    <StoryContainer title="Text">
      <View style={{ width: 200, height: 200 }}>
        <Image source={NatAvatar} variant="highlight" fade="top">
          <Text style={{ color: '#fff' }}>Text, Icons, Components...</Text>
        </Image>
      </View>
    </StoryContainer>
  </StoryWrapper>
);
