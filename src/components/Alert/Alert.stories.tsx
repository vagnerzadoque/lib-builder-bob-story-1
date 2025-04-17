import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertPropsDefault } from './Alert'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'


const alertDefinition = `GaYa Alert definition`
const alertDescription = `[Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/5475631122/Figma+gayaAlert)`

const meta: Meta<typeof Alert> = {
  title: 'Componentes/Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: alertDescription,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    ...AlertPropsDefault,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'outlined', 'filled'],
    },
    type: {
      control: 'select',
      options: ['info', 'success', 'error', 'warning', 'custom'],
    },
    title: { control: 'text' },
    message: { control: 'text' },
    icon: { control: 'boolean' },
    backgroundColorName: { control: 'text' },
    borderColorName: { control: 'text' },
    iconColorName: { control: 'text' },
    iconName: { control: 'text' },
    titleColorName: { control: 'text' },
    messageColorName: { control: 'text' },
  },
  
}

export default meta

type Story = StoryObj<typeof Alert>

export const Default: Story = {}

export const Variants: Story = {
  render: () => (
    <StoryWrapper title="Variants">
      <StoryContainer title="Standard">
        <Alert variant="standard" title="Title" message={alertDefinition} />
      </StoryContainer>
      <StoryContainer title="Outlined">
        <Alert variant="outlined" title="Title" message={alertDefinition} />
      </StoryContainer>
    </StoryWrapper>
  ),
}

export const Icon: Story = {
  render: () => (
    <StoryWrapper title="Icon">
      <StoryContainer title="Without Icon">
        <Alert icon={false} title="Title" message={alertDefinition} />
      </StoryContainer>
      <StoryContainer title="With Icon">
        <Alert icon title="Title" message={alertDefinition} />
      </StoryContainer>
    </StoryWrapper>
  ),
}

export const Title: Story = {
  render: () => (
    <StoryWrapper title="Title">
      <StoryContainer title="Without Title">
        <Alert message={alertDefinition} />
      </StoryContainer>
      <StoryContainer title="With Title">
        <Alert title="Title" message={alertDefinition} />
      </StoryContainer>
    </StoryWrapper>
  ),
}

export const Types: Story = {
  render: () => (
    <StoryWrapper title="Types">
      <StoryContainer title="Info">
        <Alert type="info" title="Title" message={alertDefinition} />
      </StoryContainer>
      <StoryContainer title="Success">
        <Alert type="success" title="Title" message={alertDefinition} />
      </StoryContainer>
      <StoryContainer title="Error">
        <Alert type="error" title="Title" message={alertDefinition} />
      </StoryContainer>
      <StoryContainer title="Warning">
        <Alert type="warning" title="Title" message={alertDefinition} />
      </StoryContainer>
      <StoryContainer title="Custom">
        <Alert
          type="custom"
          title="Title"
          message={alertDefinition}
          variant="outlined"
          backgroundColorName="secondaryDark"
          borderColorName="secondaryDark"
          titleColorName="secondaryDark"
          messageColorName="secondaryDark"
          iconColorName="secondaryDark"
        />
      </StoryContainer>
    </StoryWrapper>
  ),
}

export const Interactive: Story = {
  args: {
    title: 'Custom Title',
    message: 'Editable message',
    type: 'info',
    variant: 'standard',
    icon: true,
  },
}
