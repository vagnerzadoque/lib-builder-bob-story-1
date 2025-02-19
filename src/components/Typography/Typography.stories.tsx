/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-lines */
import React from 'react'
import { Platform, View } from 'react-native'
import { ThemeContext, useTheme } from 'styled-components/native'
import { Typography } from './Typography.styles'
import type { Meta, StoryFn, StoryObj } from '@storybook/react';



const description = ` [Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/4793794848/Componente+Typography)

## Props
  | Prop-Figma    | Prop                      |        Status           |
  |---------------|---------------------------|-------------------------|
  | **-------**   | **variant**               |  ❌ Inconsistent name   |


  ## Props / Values
  | ** Figma: ---------** | ** Stack:   variant**  |
  |-----------------------|------------------------|
  | ------                | heading1               |
  | ------                | heading2               |
  | ------                | heading3               |
  | ------                | heading4               |
  | ------                | heading5               |
  | ------                | subtitle1              |
  | ------                | subtitle2              |
  | ------                | body1                  |
  | ------                | body2                  |
  | ------                | caption                |
  | ------                | overline               |



## Technical Usages Examples
`

const meta: Meta<typeof Typography> = {
  title: 'Componentes/Typography',
  component: Typography,
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
    variant: {
      control: {type: "select"},
      options: [  'heading1' , 'heading2', 'heading3', 'heading4', 'heading5'
        , 'heading6'
        , 'subtitle1'
        , 'subtitle2'
        , 'body1'
        , 'body2'
        , 'caption'
        , 'overline']
    },testID : {
      table: {
        disable: true
      }
    }
    
  }
};

export default meta;
type Story = StoryObj<typeof meta>;


export const Interactive: StoryFn<typeof Typography> = (args) => {
  const variant = args.variant
  const theme = useTheme()
  const fontFamily = theme.typography.body.regular.fontFamily
  const fontWeight = theme.typography.fontWeight.regular
  console.log({font: fontFamily, weight: fontWeight})
  return (
    <View style={{
     
      zIndex: 0,
     
      height: 30, 
      }}>


       <Typography
        
        style = {{
          fontFamily: `${fontFamily}`,
          fontweith: `${fontWeight}`,
        } as any}
        {...args}
        
        >{`${variant ?? "heading1"}`}</Typography>
    </View>
  );
};

export const Variants = () => (
  <View style={{alignItems: 'flex-start', flexDirection: 'column', gap: 16}}>
    <Typography variant="heading1" numberOfLines={1}>Heading1</Typography>
    
    <Typography variant="heading2" numberOfLines={1}>Heading2</Typography>
    
    <Typography variant="heading3">Heading3</Typography>
    
    <Typography variant="heading4">Heading4</Typography>
    
    <Typography variant="heading5">Heading5</Typography>
    
    <Typography variant="heading6">Heading6</Typography>
    
    <Typography variant="body1">Body1</Typography>
    
    <Typography variant="body1">Body2</Typography>
    
    <Typography variant="caption">Caption</Typography>
    
    <Typography variant="overline">Overline</Typography>
  </View>
)

