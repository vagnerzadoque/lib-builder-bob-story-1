import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { GayaButton, GayaButtonBase } from './GayaButton';
import { GayaProvider } from '../../common/providers/GayaProvider';
import { View } from 'react-native';
import { BrandTypes, brands } from '../../common/brandTypes';
import { icons } from '@naturacosmeticos/natds-icons';

const description =  `
> O GaYaButton faz parte da evolução contínua dos componentes do GaYa Design System. Lançado como um novo componente, o GaYaButton substitui o antigo Button, que permanecerá disponível para uso, mas não receberá mais atualizações ou suporte ativo. 
Recomendamos a migração para o GayaButton o mais rápido possível para aproveitar as melhorias e garantir a compatibilidade futura.

## Propriedades
| Figma         | Property         | Values                                                                             |    Status           |
|---               |---               |                                                                                 ---|                  ---|
| **hierarchy**      | **type**         | contained, outlined, ghost, tonal                                                  | ✅ Disponível        |
| **textTranform** | **textTranform** | uppercase, lowercase,  capitalize                                                  | ✅ Disponível         |
| **Size**         | **size**         | semi, semiX, medium                                                                | ✅ Disponível        |
| **Icon**         | **iconName**     | 'icon_name'                                                                        | ✅ Disponível        |
| **Disabled**     | **disabled**     | true, false                                                                        | ✅ Disponível        |
| **Display**      | **display **     | inline, block                                                                      | ❌ Não aplicável   |
| **--**           | **brand**        | avon, avon_v2, natura, natura_v2, natura_v3, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo, casaEestilo_v2, forcaDeVendas            | ✅ Disponível        |
| **color**        | **color**        | primary, onPrimary, secondary, onSecondary, neutral, inverse                        | ✅ Disponível        |

## Exemplos de usos
`

const meta: Meta<typeof GayaButtonBase> = {
  title: 'GaYa Button',
  component: GayaButtonBase,
  parameters: {
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
      control: false,
      table: {
        disable: true,
      },
    },
    iconName: {
      name: 'Icon Name',
      description: 'Selecione o nome do ícone',
      control: {
        type: 'select', // Define o controle como 'select'
      },
      options: Object.keys(icons), // Fornece a lista de opções
      defaultValue: 'outlined-default-mockup', // Defina um valor padr // Forneça as opções explicitamente
    },
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    onPress: () => undefined,
    text: 'GaYa Button',
  },
};

const withCustomTheme: Decorator = (Story, context) => {
  const { brand, mode, ...restArgs } = context.args;
  const newContext = { ...context, args: restArgs };
  const modeN = mode != "undefined" ? mode : 'light'
  return (
    <>
      <View style={{ marginBottom: 16 }}>
        <View>Tema Global</View>
        <GayaButton text="GayaButton" onPress={() => undefined} {...restArgs} />
      </View>
      <GayaProvider brand={brand as BrandTypes} mode={modeN as 'light' | 'dark'}>
        <View>GaYa Provider</View>
        <Story {...newContext} />
      </GayaProvider>
    </>
  );
};

export const InteractiveWithGayaProvider: Story = (
  args: React.ComponentProps<typeof GayaButtonBase>
) => <GayaButtonBase {...args} />;

InteractiveWithGayaProvider.decorators = [withCustomTheme];

InteractiveWithGayaProvider.args = {
  brand: 'avon_v2',
  iconName: 'outlined-default-mockup',
  onPress: () => undefined,
  text: 'GaYa Button',
};
InteractiveWithGayaProvider.args = {
  brand: 'avon',
  iconName: 'outlined-default-mockup',
  onPress: () => undefined,
  text: 'GaYa Button',
};

// All Collor //

const withfixedAllThemes: Decorator = (Story, context) => {
  const { ...restArgs } = context.args;
  const newContext = { ...context, args: restArgs };

  const backgroundValue = newContext.globals.backgrounds?.value;
  const mode = backgroundValue === '#000000' ? 'dark' : 'light';

  return (
    <View style={{ gap: 10 }}>
      {
        brands.map((brand) => {
          return (
            <>
            <GayaProvider brand={brand.value as BrandTypes} mode={mode as 'light' | 'dark'}>
              <View style={{ display: "flex", flexDirection: 'row', gap: 5, flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                <GayaButton size="medium" type="contained" text={'GaYaButton'} onPress={() => undefined} />
                <GayaButton size="medium" type="outlined" text={'GaYaButton'} onPress={() => undefined} />
                <GayaButton size="medium" type="ghost" text={'GaYaButton'} onPress={() => undefined} />
                <GayaButton size="medium" type="tonal" text={'GaYaButton'} onPress={() => undefined} />
              </View>
            </GayaProvider>
            </>

          )
        })
      }
    </View>
  )
};

export const StaticAllThemes: Story = (
  args: React.ComponentProps<typeof GayaButtonBase>
) => <GayaButtonBase {...args} />;

StaticAllThemes.parameters = {
  controls: { disable: true },
};

StaticAllThemes.decorators = [withfixedAllThemes]