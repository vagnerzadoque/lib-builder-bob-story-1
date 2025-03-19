/* eslint-disable max-lines */
/* eslint-disable max-len */
import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { CheckboxColors } from './Checkbox.types';
import { BrandTypes, brands } from '../../common/brandTypes';

import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer';
import { View } from 'react-native';

/**
 * Descrição que antes ficava na função `description`.
 * Agora podemos colocar em `parameters.docs.description.component`
 */
const componentDescription = `
> Checkbox selection controls allow the user to select options.



## Props
  | Prop-Figma                  | Prop                                  |        Status           |
  |-----------------------------|---------------------------------------|-------------------------|
  | **variant (no prop)**       | **variant (no prop)**                 |  ✅ Available           |
  | **----**                    | **color**                             |  ❌ not exist in conf   |
  | **----**                    | **accessibilityLabel**                |  ❌ not exist in conf   |
  | **----**                    | **onPress**                           |  ❌ not exist in conf   |
  | **----**                    | **indeterminate**                     |  ❌ not exist in conf   |
  | **----**                    | **label**                             |  ❌ not exist in conf   |
  | **----**                    | **brand**                             |  ❌ not exist in conf   |
  | **----**                    | **mode**                              |  ❌ not exist in conf   |
  | **disabled**                | **disabled**                          |  ✅ Available           |



  ## Props / Values
  | ** Figma: **variant**** | ** Stack:   **variant (no prop)**     |
  |-------------------------|---------------------------------------|
  | unchecked               | standard                              |
  | Indeterminate           | Indeterminate                         |
  | checked                 | -----                                 |

  ## Props / Values
  | ** Figma: **--------**  | ** Stack:   **color**      |
  |-------------------------|---------------------------------------|
  | ---------               | primary                               |
  | -------------           | secondary                             |

  ## Props / Values
  | ** Figma: **--------**  | ** Stack:   **accessibilityLabel**      |
  |-------------------------|-----------------------------------------|
  | ---------               | string                                  |

  ## Props / Values
  | ** Figma: **--------**  | ** Stack:  **onPress**       |
  |-------------------------|------------------------------|
  | ---------               | function                     |


  ## Props / Values
  | ** Figma: **--------**  | ** Stack:  **indeterminate** |
  |-------------------------|------------------------------|
  | ---------               | true                         |
  | ---------               | false                        |

  ## Props / Values
  | ** Figma: **--------**  | ** Stack:  **label** |
  |-------------------------|----------------------|
  | ---------               | string               |

  ## Props / Values
  | ** Figma: **--------**  | ** Stack:  **brand** |
  |-------------------------|----------------------|
  | ---------               | temas disponíveis    |

  ## Props / Values
  | ** Figma: **--------**  | ** Stack:  **mode**  |
  |-------------------------|----------------------|
  | ---------               | light                |
  | ---------               | dark                 |

  ## Props / Values
  | ** Figma: **disabled**   | ** Stack:  **disabled**   |
  |-------------------------|----------------------|
  | disabled                | disabled             |
 


  


## Technical Usages Examples
`;

/**
 * Definindo o `Meta` do componente no formato CSF 3.
 * - `title` é o caminho para o Storybook
 * - `component` é o componente principal
 * - `argTypes` define os controles (análogo ao antigo knobs)
 */
const meta: Meta<typeof Checkbox> = {
  title: 'Componentes/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  tags: ['autodocs'],
  // Aqui definimos os 'controls' que ficarão disponíveis no Storybook
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto exibido ao lado do checkbox',
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Cor do checkbox',
    },
    selected: {
      control: 'boolean',
      description: 'Define se o checkbox está marcado',
    },
    disabled: {
      control: 'boolean',
      description: 'Define se o checkbox está desabilitado',
    },
    indeterminate: {
      control: 'boolean',
      description: 'Define se o checkbox está em estado indeterminado',
    },
    brand: {
      control: { type: 'select' },
      options: ['avon', 'avon_v2', 'natura', 'natura_v2', 'theBodyShop', 'consultoriaDeBeleza', 'casaEestilo'],
      description: 'Marca/Tema aplicado ao checkbox',
    },
    mode: {
      control: { type: 'select' },
      options: ['light', 'dark'],
      description: 'Tema de cor de fundo (claro ou escuro)',
    },
    onPress: {
      action: 'onPress',
      description: 'Função disparada ao clicar no checkbox',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;


export const withAllThemesAndTypes: Story = {


  render: () => { 
  
    const [standard, setStandard] = useState(true);
    const [indeterminate, setIndeterminate] = useState(true);
  
  
   return <View style={{ gap: 12 }}>
    
      { 
       
      
      brands.map((brand, key) => {

        return(
          <StoryContainer key={key} title={brand.name as BrandTypes}>
          
          <Checkbox
            brand={brand.value as BrandTypes}
            label="GaYa Design System"
            onPress={() => setStandard(!standard)}
            selected={standard}
          />
        </StoryContainer>

        )
      }
    )}
  </View>
  }

}
/**
 * Exemplo de histórias "Variants"
 */
export const Variants: Story = {
  render: () => {
    const [standard, setStandard] = useState(true);
    const [indeterminate, setIndeterminate] = useState(true);

    return (
      <StoryWrapper title="Variants">
        <StoryContainer title="Standard">
          <Checkbox
            label="GaYa Design System"
            onPress={() => setStandard(!standard)}
            selected={standard}
          />
        </StoryContainer>

        <StoryContainer title="Indeterminate">
          <Checkbox
            indeterminate
            label="GaYa Design System"
            onPress={() => setIndeterminate(!indeterminate)}
            selected={indeterminate}
          />
        </StoryContainer>

        <StoryContainer title="Disabled selected">
          <Checkbox
            disabled
            label="GaYa Design System"
            selected
            value="3"
          />
        </StoryContainer>

        <StoryContainer title="Disabled indeterminate">
          <Checkbox
            disabled
            indeterminate
            label="GaYa Design System"
            selected
            value="2"
          />
        </StoryContainer>

        <StoryContainer title="Disabled unselected">
          <Checkbox
            disabled
            label="GaYa Design System"
            selected={false}
            value="1"
          />
        </StoryContainer>
      </StoryWrapper>
    );
  },
};

/**
 * Exemplo de história "Interactive" que faz uso direto dos "args" e "controls".
 * Aqui não precisamos de `useState`, pois quem controla os valores é o painel de Controls do Storybook.
 */
export const Interactive: Story = {
  name: 'Interactive (com Controls)',
  args: {
    color: 'primary',
    indeterminate: false,
    selected: true,
    disabled: false,
    label: 'Natura Design System',
    value: 'my-label',
  },
  render: (args) => (
    <StoryContainer title="Interactive">
      <Checkbox
        {...args}
        onPress={() => {
          // Caso queira logar algo ou disparar uma action
          args.onPress;
        }}
      />
    </StoryContainer>
  ),
};
