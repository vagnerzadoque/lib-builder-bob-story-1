import React from 'react';
import type { Meta, StoryObj, Decorator } from '@storybook/react';
import { GayaButton, GayaButtonBase } from './GayaButton';
import { GayaProvider } from '../../common/providers/GayaProvider';
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

export const Interactive: Story = {
  args: {
    iconName: 'outlined-default-mockup',
    onPress: () => {},
    text: 'GaYa Button',
  },
};

const withCustomTheme: Decorator = (Story, context) => {
  const { brand, mode, ...restArgs } = context.args;
  const newContext = { ...context, args: restArgs };

  return (
    <>
      <View style={{ marginBottom: 16 }}>
        <GayaButton text="GayaButton" onPress={() => {}} {...restArgs} />
      </View>
      <GayaProvider brand={brand as BrandTypes} mode={mode as 'light' | 'dark'}>
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
  onPress: () => {},
  text: 'GaYa Button',
};
