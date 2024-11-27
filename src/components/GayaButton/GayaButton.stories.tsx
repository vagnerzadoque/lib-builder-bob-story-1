import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { GayaButton, GayaButtonBase } from './GayaButton';
import { GayaProvider } from '../../common/providers/GayaProvider';
import { View } from 'react-native';
import { BrandTypes, brands } from '../../common/brandTypes';
import { icons } from '@naturacosmeticos/natds-icons';

const description = `[Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/4793008336/Componente+Button)`;

const meta: Meta<typeof GayaButtonBase> = {
  title: 'GayaButton',
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
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    iconName: {
      control: {
        type: 'select',
      },
      options: Object.keys(icons),
    },
  },
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
    type: 'contained',
  },
};

const withGayaProvider: Decorator = (Story, context) => {
  const { brand, mode, ...restArgs } = context.args;
  const newContext = { ...context, args: restArgs };

  return (
    <>
      <View style={{ marginBottom: 16 }}>
        <span>Global Theme</span>
        {/* @ts-ignore */}
        <GayaButton {...restArgs} />
      </View>
      <GayaProvider brand={brand as BrandTypes} mode={mode as 'light' | 'dark'}>
        <span>GaYa Provider</span>
        <Story {...newContext} />
      </GayaProvider>
    </>
  );
};

export const InteractiveWithGayaProvider: Story = (
  args: React.ComponentProps<typeof GayaButtonBase>
) => <GayaButtonBase {...args} />;

InteractiveWithGayaProvider.decorators = [withGayaProvider];

InteractiveWithGayaProvider.argTypes = {
  brand: {
    table: {
      category: 'Gaya Provider Props',
    },
  },
  mode: {
    table: {
      category: 'Gaya Provider Props',
    },
  },
};

InteractiveWithGayaProvider.args = {
  brand: 'natura_v2',
  color: 'primary',
  disabled: false,
  iconPosition: 'right',
  mode: 'light',
  onPress: () => undefined,
  size: 'medium',
  text: 'GaYa Button',
  type: 'contained',
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
                  <span>contained</span>
                  {/* @ts-ignore */}
                  <GayaButton type="contained" {...newContext.args} />
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
