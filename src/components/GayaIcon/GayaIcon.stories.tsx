import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GayaIconBase } from './GayaIcon';

const meta = {
  title: 'GaYa Icon',
  component: GayaIconBase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GayaIconBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {},
};
