import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { GayaButton, GayaButtonBase } from './GayaButton';
import { GayaProvider } from '../../common/GayaProvider';
import { View } from 'react-native';
import { BrandTypes } from '../../common/brandTypes';

const meta: Meta<typeof GayaButtonBase> = {
  title: 'GaYa Button',
  component: GayaButtonBase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    onPress: () => {
      // Função vazia ou implementação desejada
    },
    text: 'GayaButton',
    iconName: 'outlined-social-sparks',
    iconPosition: 'left',
  },
};

const withCustomTheme: Decorator = (
  Story,
  { args: { brand, mode, ...rest } }
) => (
  <>
    <View style={{ marginBottom: 16 }}>
      <GayaButton text="GayaButton" onPress={() => {}} {...rest} />
    </View>
    <GayaProvider brand={brand as BrandTypes} mode={mode as 'light' | 'dark'}>
      <Story />
    </GayaProvider>
  </>
);

export const StoryComTemaPersonalizado = (
  args: React.ComponentProps<typeof GayaButtonBase>
) => <GayaButtonBase {...args} />;
StoryComTemaPersonalizado.decorators = [withCustomTheme];
StoryComTemaPersonalizado.args = {
  onPress: () => {},
  text: 'GaYa Button',
  iconName: 'outlined-social-sparks',
  iconPosition: 'left',
  brand: 'avon_v2',
  textTransform: undefined
};
