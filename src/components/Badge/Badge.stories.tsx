// Badge.stories.tsx
import type { Decorator, Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Badge } from './Badge'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { View } from 'react-native'
import { BrandTypes, brands } from '../../common/brandTypes';

const description = ` [Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/4793204850/Componente+Badge)

## Props
  | Prop-Figma    | Prop                      |        Status           |
  |---------------|---------------------------|-------------------------|
  | **-------**   | **variant**               |  ❌ Inconsistent name   |
  | **state**     | **color**                 |  ❌ Inconsistent name   |
  | **number**    | **limit**                 |  ❌ Inconsistent name   |
  | **-------**   | **value**                 |  ❌ Inconsistent name   |
  | **-------**   | **brand**                 |  ✅ Available           |

  ## Props / Values
  | ** Figma: ---------** | ** Stack:   variant**  |
  |-----------------------|------------------------|
  | ------                | dot                    |
  | ------                | pulse                  |
  | ------                | standard               |

  | ** Figma: state**     | ** Stack:   color**    |
  |-----------------------|------------------------|
  | primary               | primary                |
  | secondary             | secondary              |
  | success               | success                |
  | alert                 | alert                  |
  | inverse               | -----                  |


  | ** Figma: number**    | ** Stack:   limit**    |
  |-----------------------|------------------------|
  | number                | number                 |

  | ** Figma: ------**    | ** Stack:   value**    |
  |-----------------------|------------------------|
  | -------               | number                 |

   | ** Figma: -----**           | ** Stack:   brand**            |
  |-----------------------------|---------------------------------|
  | temas disponiveis no GaYa   | temas disponiveis no GaYa       |

  ## Accessibility
| Property                   | Values             |
|---                         |                 ---| 
| **accessible**             | true/false         | 
| **accessibilityLabel**     | string             | 
| **accessibilityRole**      | AccessibilityRole  | 
| **accessibilityValue**     | accessibilityValue | 


## Technical Usages Examples
`

// -------------------------------------------------------
// 1) Definição do meta (Storybook 8) com args e argTypes
// -------------------------------------------------------
const meta: Meta<typeof Badge> = {
  title: 'Componentes/Badge',
  component: Badge,
  // Aqui definimos valores padrão para os controles (args).
  // Dessa forma, qualquer story que não sobrescrever esses valores
  // herdará essas configurações, e eles aparecerão em Controls.
  args: {
    variant: 'standard',
    value: 100,
    limit: 99,
    color: 'primary',
    brand: undefined,
    accessible: false,
    accessibilityLabel: '',
    accessibilityRole: undefined,
    accessibilityValue: undefined,
  },
  argTypes: {
    variant: {
      options: ['dot', 'pulse', 'standard'],
      control: { type: 'radio' }
    },
    color: {
      options: ['primary', 'secondary', 'success', 'alert'],
      control: { type: 'radio' }
    },
    brand: {
      options: [
        undefined,
        'avon',
        'avon_v2',
        'natura',
        'natura_v2',
        'theBodyShop',
        'consultoriaDeBeleza',
        'casaEestilo'
      ],
      control: { type: 'select' }
    },
    value: {
      control: { type: 'number' }
    },
    limit: {
      control: { type: 'number' }
    },
    accessible: {
      table: {
        disable: true,
      },
    },
    accessibilityLabel: {
      table: {
        disable: true,
      },
    },
    accessibilityRole: {
      table: {
        disable: true,
      },
    },
    accessibilityValue: {
      table: {
        disable: true,
      },
    },
    testID: {
      table: {
        disable: true,
      },
    }
  },
  parameters: {
    controls: {
      sort: 'alpha',
    },
    docs: {
      description: {
        component: description
      }
    }
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Badge>

// -------------------------------------------------------
// 2) História "Default" (exemplo simples usando args)
// -------------------------------------------------------
export const Interactive: Story = {
  name: 'Interactive',
  // Você pode sobrescrever args caso deseje valores específicos nessa história
  args: {
    variant: 'standard'
  },
  render: (args) => (
    <StoryContainer title="Standard">
      {/* Passamos todas as props recebidas de "args" no Badge */}
      <Badge {...args} />
    </StoryContainer>
  )
}



export const withAllThemesAndTypes: Story = {
  
  name: 'withAllThemesAndTypes',
  render: (args) => <View style={{ gap: 12 }}>
    
      { brands.map((brand, key) => {

        return(
          <StoryContainer key={key} title={brand.name as BrandTypes}>
          <Badge {...args} brand={brand.value as BrandTypes} />
        </StoryContainer>

        )
      }
    )}
  </View>

}

// -------------------------------------------------------
// 4) História "Variants"
//    Mostra cada variante do componente. Você pode manipular
//    qualquer prop em Controls (ex.: color, accessible, etc.)
//    mas aqui fixamos 'variant' em cada container para demonstração.
// -------------------------------------------------------
export const Variants: Story = {
  name: 'Variants',
  render: (args) => (
    <StoryWrapper title="Variants">
      <StoryContainer title="Dot">
        <Badge {...args} variant="dot" />
      </StoryContainer>

      <StoryContainer title="Pulse">
        <Badge {...args} variant="pulse" color="success" />
      </StoryContainer>

      <StoryContainer title="Standard">
        <Badge {...args} variant="standard" color="primary" value={100} limit={99} />
      </StoryContainer>
    </StoryWrapper>
  )
}

// -------------------------------------------------------
// 5) História "Colors"
//    Demonstra cores diferentes. Caso deseje, você pode
//    permitir que o usuário altere a cor no Controls
//    removendo a atribuição 'color="..."' inline e
//    confiando apenas em args.
// -------------------------------------------------------
export const Colors: Story = {
  name: 'Colors',
  render: (args) => (
    <StoryWrapper title="Colors">
      <StoryContainer title="Primary">
        <Badge {...args} color="primary" />
      </StoryContainer>

      <StoryContainer title="Secondary">
        <Badge {...args} color="secondary" />
      </StoryContainer>

      <StoryContainer title="Success">
        <Badge {...args} color="success" />
      </StoryContainer>

      <StoryContainer title="Alert">
        <Badge {...args} color="alert" />
      </StoryContainer>
    </StoryWrapper>
  )
}
