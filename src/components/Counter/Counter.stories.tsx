import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';
import { Counter } from './Counter';
import { 
  StoryContainer, 
  StoryWrapper, 
  VerticalStoryContainer 
} from '../../common/HelperComponents/StoryContainer';


import { CounterPropsDefault } from './Counter';

const description = ` [Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/5475631159/Figma+gayaCounter)`;


const meta: Meta<typeof Counter> = {
  title: 'Componentes/Counter',
  component: Counter,
  

  args: {
    ...CounterPropsDefault,
  },


  argTypes: {
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    size: {
      control: 'select',
      options: ['medium', 'semiX'],
    },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    value: { control: 'number' },
    onDecrement: { table: { disable: true } },
    onIncrement: { table: { disable: true } },
    testID: { table: { disable: true } },
  },
  
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
  },
  
  tags: ['autodocs'],
};

export default meta;


export const Default: StoryObj<typeof Counter> = {
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 0);

    return (
      <StoryContainer title="Default">
        <Counter
          {...args}
          value={value}
          onDecrement={() => setValue(value - 1)}
          onIncrement={() => setValue(value + 1)}
        />
      </StoryContainer>
    );
  },
};

export const Variants: StoryObj<typeof Counter> = {


  render: () => {
    const [standard, setStandard] = useState(0);
    const [withLabel, setWithLabel] = useState(0);
    const [range, setRange] = useState(42);

    return (
      <StoryWrapper title="Variants">
        <StoryContainer title="Standard">
          <Counter
            onDecrement={() => setStandard(standard - 1)}
            onIncrement={() => setStandard(standard + 1)}
            value={standard}
          />
        </StoryContainer>

        <StoryContainer title="With label">
          <Counter
            decrementButtonAccessibilityHint="decrement the value of the counter"
            decrementButtonAccessibilityLabel="decrement button"
            incrementButtonAccessibilityHint="increment the value of the counter"
            incrementButtonAccessibilityLabel="increment button"
            inputAccessibilityHint="you can set the quantity you want editing this field"
            inputAccessibilityLabel={`you have ${withLabel} items in your shopping cart`}
            onDecrement={() => setWithLabel(withLabel - 1)}
            onIncrement={() => setWithLabel(withLabel + 1)}
            label="Label"
            value={withLabel}
          />
        </StoryContainer>

        <StoryContainer title="Disabled">
          <Counter
            decrementButtonAccessibilityHint="decrement the value of the counter"
            decrementButtonAccessibilityLabel="decrement button"
            incrementButtonAccessibilityHint="increment the value of the counter"
            incrementButtonAccessibilityLabel="increment button"
            inputAccessibilityHint="you can set the quantity you want editing this field"
            inputAccessibilityLabel={`you have 0 items in your shopping cart`}
            onDecrement={() => ({})}
            onIncrement={() => ({})}
            value={0}
            disabled
          />
        </StoryContainer>

        <VerticalStoryContainer title="Range">
          <Text style={{ paddingBottom: 16 }}>
            You can set a minimum, maximum and initial value for the component
          </Text>
          <Counter
            decrementButtonAccessibilityHint="decrement the value of the counter"
            decrementButtonAccessibilityLabel="decrement button"
            incrementButtonAccessibilityHint="increment the value of the counter"
            incrementButtonAccessibilityLabel="increment button"
            inputAccessibilityHint="this shows the quantity of items you have in your shopping cart"
            inputAccessibilityLabel={`you have ${range} items in your shopping cart`}
            onDecrement={() => setRange(range - 1)}
            onIncrement={() => setRange(range + 1)}
            maxValue={45}
            minValue={40}
            value={range}
          />
        </VerticalStoryContainer>
      </StoryWrapper>
    );
  },
};

export const Sizes: StoryObj<typeof Counter> = {
  render: () => {
    const [mediumValue, setMediumValue] = useState(0);
    const [semiXValue, setSemiXValue] = useState(0);

    return (
      <StoryWrapper title="Sizes">
        <StoryContainer title="Medium">
          <Counter
            decrementButtonAccessibilityHint="decrement the value of the counter"
            decrementButtonAccessibilityLabel="decrement button"
            incrementButtonAccessibilityHint="increment the value of the counter"
            incrementButtonAccessibilityLabel="increment button"
            inputAccessibilityHint="you can set the quantity you want editing this field"
            inputAccessibilityLabel={`you have ${mediumValue} items in your shopping cart`}
            onDecrement={() => setMediumValue(mediumValue - 1)}
            onIncrement={() => setMediumValue(mediumValue + 1)}
            label="Label"
            size="medium"
            value={mediumValue}
          />
        </StoryContainer>

        <StoryContainer title="SemiX">
          <Counter
            decrementButtonAccessibilityHint="decrement the value of the counter"
            decrementButtonAccessibilityLabel="decrement button"
            incrementButtonAccessibilityHint="increment the value of the counter"
            incrementButtonAccessibilityLabel="increment button"
            inputAccessibilityHint="you can set the quantity you want editing this field"
            inputAccessibilityLabel={`you have ${semiXValue} items in your shopping cart`}
            onDecrement={() => setSemiXValue(semiXValue - 1)}
            onIncrement={() => setSemiXValue(semiXValue + 1)}
            label="Label"
            size="semiX"
            value={semiXValue}
          />
        </StoryContainer>
      </StoryWrapper>
    );
  },
};

export const Interactive: StoryObj<typeof Counter> = {
  args: {
    decrementButtonAccessibilityHint: 'A hint about what the decrement button does',
    decrementButtonAccessibilityLabel: 'Description of what the decrement button does',
    incrementButtonAccessibilityHint: 'A hint about what the increment button does',
    incrementButtonAccessibilityLabel: 'Description of what the increment button does',
    inputAccessibilityHint: 'A hint about what the input does',
    inputAccessibilityLabel: 'Description of what the input does',
    disabled: false,
    label: 'Interactive example',
    maxValue: 99,
    minValue: 0,
  },
  render: (args) => {
    const [value, setValue] = useState(args.value ?? 0);

    return (
      <StoryContainer title="Interactive">
        <Counter
          {...args}
          value={value}
          onDecrement={() => (value >= 1 ? setValue(value - 1) : undefined)}
          onIncrement={() => setValue(value + 1)}
        />
      </StoryContainer>
    );
  },
};
