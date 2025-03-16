/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { GayaButton, GayaButtonBase } from './GayaButton';
import { GayaProvider } from '../../common/providers/GayaProvider';
import { View } from 'react-native';
import { BrandTypes, brands } from '../../common/brandTypes';
import { icons } from '@naturacosmeticos/natds-icons';

const description = `[Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/4793008336/Componente+Button)


## Props
  | Prop-Figma    | Prop                      |        Status           |
  |---------------|---------------------------|-------------------------|
  | **hierarchy** | **type**                  |  ❌ Inconsistent name   |
  | **textTransform** | **textTransform**     |  ✅ Available           |
  | **size**      | **size**                  |  ❌  Inconsistent value |
  | **icon**      | **iconName**              |  ❌  Inconsistent name  |
  | **disabled**  | **disabled**              |  ✅ Available           |
  | **display**   | **display**               |  ❌ Não aplicável       |
  | **color**     | **color**                 |  ✅ Available           |
  | **-----**     | **brand**                 |  ✅ Available           |

  ## Props / Values
  | ** Figma: hierarchy** | ** Stack:   type**     |
  |-----------------------|------------------------|
  | filled                | filled                 |
  | contained (deprecated)| contained (deprecated) |
  | outlined              | outlined               |
  | ghost                 | ghost                  |
  | text    (deprecated)  | text   (deprecated)    |

  | ** Figma: textTransform**   | ** Stack:   textTransform**     |
  |-----------------------------|---------------------------------|
  | uppercase                   | uppercase                       |
  | lowercase                   | lowercase                       |
  | capitalize                  | capitalize                      |

  | ** Figma: size**            | ** Stack:   size**              |
  |-----------------------------|---------------------------------|
  | small                       | semi                            |
  | medium                      | semiX                           |
  | large                       | medium                          |

  | ** Figma: icon**            | ** Stack:   iconName**          |
  |-----------------------------|---------------------------------|
  | string-name                 | string-name                     |
    
  | ** Figma: disabled**        | ** Stack:   disabled**          |
  |-----------------------------|---------------------------------|
  | true                        | true                            |
  | true                        | false                           |

  | ** Figma: color**           | ** Stack:   color**             |
  |-----------------------------|---------------------------------|
  | primary                     | primary                         |
  | onPrimary                   | onPrimary                       |
  | secondary                   | secondary                       |
  | onSecondary                 | onSecondary                     |
  | neutral                     | neutral                         |
  | inverse                     | inverse                         |

  | ** Figma: -----**           | ** Stack:   brand**             |
  |-----------------------------|---------------------------------|
  | temas disponiveis no GaYa   | temas disponiveis no GaYa       |
 


## Exemplos de usos



`;

const meta: Meta<typeof GayaButtonBase> = {
  title: 'Componentes/GayaButton',
  component: GayaButtonBase,
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
  argTypes: {
    internal: {
      table: {
        disable: true,
      },
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'onPrimary', 'secondary', 'onSecondary', 'neutral', 'inverse'],
    },
    iconPosition: {
      control: { type: 'radio' },
      options: ['left', 'right'],
    },
    textTransform: {
    
      control: { type: 'radio' },
      options: ['uppercase' , 'lowercase' , 'capitalize'],
    },
    size: {
      control: { type: 'radio' },
      options: ['semi' , 'semiX' , 'medium'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    mode: {
      control: { type: 'radio' },
      options: ['light' , 'dark'],
    },
    iconName: {
      control: {
        type: 'select',
      },
      options: Object.keys(icons),
    },
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  argTypes: {
    brand: {
      table: {
        category: 'Legacy Props',
      },
    },
    mode: {
      table: {
        category: 'Legacy Props',
      },
    },
  },
  args: {
    color: 'primary',
    disabled: false,
    iconPosition: 'right',
    onPress: () => undefined,
    size: 'medium',
    text: 'GaYa Button',
    type: 'filled',
  },
};

const withAllThemesAndTypes: Decorator = (Story, context) => {
  const { brand, mode, type, ...restArgs } = context.args;
  const newContext = { ...context, args: restArgs };
  const backgroundValue = newContext.globals.backgrounds?.value;

  return (
    <View style={{ gap: 12 }}>
      {brands.map((brand) => {
        return (
          <GayaProvider
            brand={brand.value as BrandTypes}
            mode={backgroundValue === '#000000' ? 'dark' : 'light'}
            key={brand.value}
          >
            <View style={{ gap: 8 }}>
              <span>{brand.name}</span>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 12,
                  flexWrap: 'nowrap',
                  justifyContent: 'space-between',
                }}
              >
                <View style={{ gap: 4 }}>
                  <span>filled</span>
                  {/* @ts-ignore */}
                  <GayaButton type="filled" {...newContext.args} />
                </View>
                <View style={{ gap: 4 }}>
                  <span>outlined</span>
                  {/* @ts-ignore */}
                  <GayaButton type="outlined" {...newContext.args} />
                </View>
                <View style={{ gap: 4 }}>
                  <span>ghost</span>
                  {/* @ts-ignore */}
                  <GayaButton type="ghost" {...newContext.args} />
                </View>
                <View style={{ gap: 4 }}>
                  <span>tonal</span>
                  {/* @ts-ignore */}
                  <GayaButton type="tonal" {...newContext.args} />
                </View>
              </View>
            </View>
          </GayaProvider>
        );
      })}
    </View>
  );
};

export const AllThemesAndTypes: Story = (
  args: React.ComponentProps<typeof GayaButtonBase>
) => <GayaButtonBase {...args} />;

AllThemesAndTypes.decorators = [withAllThemesAndTypes];

AllThemesAndTypes.argTypes = {
  brand: {
    table: {
      disable: true,
    },
  },
  mode: {
    table: {
      disable: true,
    },
  },
  type: {
    table: {
      disable: true,
    },
  },
};

AllThemesAndTypes.args = {
  color: 'primary',
  disabled: false,
  iconPosition: 'right',
  onPress: () => undefined,
  size: 'medium',
  text: 'GaYa Button',
};
