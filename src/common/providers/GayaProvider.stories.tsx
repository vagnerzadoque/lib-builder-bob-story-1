/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { GayaButton, GayaButtonBase } from '../../components/GayaButton/GayaButton';
import { GayaProvider } from '../../common/providers/GayaProvider';
import { View } from 'react-native';
import { BrandTypes, brands } from '../../common/brandTypes';
import { icons } from '@naturacosmeticos/natds-icons';

const description = `[Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/4793008336/Componente+Button)`;

const meta: Meta<typeof GayaButtonBase> = {
  title: 'GayaProvider/GayaButton',
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


