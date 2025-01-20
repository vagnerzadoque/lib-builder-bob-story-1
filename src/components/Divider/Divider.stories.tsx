import React, { ReactNode } from 'react'
import { View } from 'react-native'
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Divider  } from './Divider'

const description = `[Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/4793008336/Componente+Button)`;



const meta: Meta<typeof Divider> = {
  title: 'Componentes/Divider',
  component: Divider,
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
      control: {type: "select"},
      options: ['fullBleed', 'inset' , 'middle']
    },testID : {
      table: {
        disable: true
      }
    }
    
  }
};

export default meta;
type Story = StoryObj<typeof meta>;





export const Interactive: StoryFn<typeof Divider> = (args) => {
  return (
    <View style={{
     
      zIndex: 0,
     
      width: 400, 
      height: 30, 
      backgroundColor: "#fafafa" 
      }}>
      <Divider {...args} />
    </View>
  );
};

