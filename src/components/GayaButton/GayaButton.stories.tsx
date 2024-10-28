import React from 'react';
import type { Meta, StoryObj, StoryFn, Decorator } from '@storybook/react';
import { GayaButtonBase } from './GayaButton';
import { GayaProvider } from '../../common/GayaProvider';

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

const withCustomTheme: Decorator = (Story) => (
  <GayaProvider brand='avon_v2' mode='light'>
    <Story />
  </GayaProvider>
);

export const StoryComTemaPersonalizado = (args: React.ComponentProps<typeof GayaButtonBase>) => (
  <GayaButtonBase {...args} />
);
StoryComTemaPersonalizado.decorators = [withCustomTheme];
StoryComTemaPersonalizado.args = {
  onPress: undefined,
  text: 'GayaButton',
  iconName: 'outlined-social-sparks',
  iconPosition: 'left',
};
