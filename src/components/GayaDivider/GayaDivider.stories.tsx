import React from 'react'
import { View, Text } from 'react-native'
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { GayaDivider, GayaDividerProps, GayaDividerTypes } from '.'

const description = `



| Prop-Figma    | Prop              | Status        |
|---------------|-------------------|---------------|
| **type**      | **type**          | ✅ Available |
| *N/A*         | **theme**         | ✅ Available |
| *N/A*         | **testID**        | ✅ Available |

## Props / Values (Type)
| Figma         | Stack             |
|---------------|-------------------|
| fullBleed     | fullBleed         |
| inset         | inset             |
| middle        | middle            |

## Technical Usages Examples

`;

const meta: Meta<GayaDividerProps> = {
  title: 'Componentes/GayaDivider',
  component: GayaDivider,
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
    type: {
      control: { type: "select" },
      options: ['fullBleed', 'inset', 'middle'],
      description: 'Divider variant: fullBleed, inset, or middle',
      table: {
        defaultValue: { summary: 'fullBleed' },
      },
    },
    theme: {
      table: {
        disable: true
      }
    },
    testID: {
      table: {
        disable: true
      }
    }
  },
  args: {
    type: 'fullBleed',
  }
};

export default meta;

type Story = StoryObj<GayaDividerProps>;

// Base story using StoryFn for structure consistency
const Template: StoryFn<GayaDividerProps> = (args: GayaDividerProps) => (
  <View style={{
    width: 300, // Adjusted for better visibility
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: "#fafafa"
  }}>
    <GayaDivider {...args} />
  </View>
);

export const Interactive: Story = {
  render: Template,
  args: {
    type: 'fullBleed',
  },
};




// --- Story showing all variants simply ---

export const VariantsOverview: Story = {
  parameters: {
    controls: {
      // Hide type control as all types are shown
      exclude: ['type', 'theme']
    },
  },
  args: {
    // Define args needed for all variants
    testID: 'gaya-divider-overview'
  },
  render: (args) => (
    <View style={{ width: 300, paddingVertical: 20, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>FullBleed</Text>
        <GayaDivider {...args} type="fullBleed" />
      </View>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Inset</Text>
        <GayaDivider {...args} type="inset" />
      </View>
      <View>
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>Middle</Text>
        <GayaDivider {...args} type="middle" />
      </View>
    </View>
  ),
}; 