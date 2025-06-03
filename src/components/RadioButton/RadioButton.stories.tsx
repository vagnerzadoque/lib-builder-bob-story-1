import React, { useState } from 'react';
import type { Decorator } from '@storybook/react';

import { RadioButton, RadioButtonColors } from './RadioButton';
import { BrandTypes, brands } from '../../common/brandTypes';
import {
  StoryContainer,
  StoryWrapper,
} from '../../common/HelperComponents/StoryContainer';
import { Meta, StoryObj } from '@storybook/react';
import { GayaProvider } from '../../common/providers/GayaProvider';
import { GayaButton } from '../GayaButton/GayaButton';
import { BrandThemeMatrix, RenderableComponentProps } from '../../common/HelperComponents/BrandThemeMatrix';

const meta: Meta<typeof RadioButton> = {
  title: 'Componentes/GayaRadioButton',
  component: RadioButton,
  parameters: {
    controls: {
      sort: 'alpha',
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    brand: {
      table: {
        disable: true,
      },
    },
    mode: {
      table: {
        disable: true,
      },
    },
    testID: {
      table: {
        disable: true,
      },
    },
    selected: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
    onPress: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    disabled: false,
  },
  render: (args) => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
      <StoryContainer title="Default">
        <RadioButton
          selected={selected === '1'}
          onPress={setSelected}
          label="Natura Design System"
          value="1"
          mode='light'
          brand='natura_v3'
          color={args.color}
          disabled={args.disabled}
        />



        {/*        <RadioButton
          selected={selected === '1'}
          onPress={setSelected}
          label="Natura Design System"
          value="1"
          mode='dark'
          brand='casaEestilo_v2'
          color={args.color}
          disabled={args.disabled}
        /> */}

      </StoryContainer>
    );
  },
};

const gridContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '16px',
  alignItems: 'flex-start',
  padding: '16px',
};

const gridItemStyle: React.CSSProperties = {
  width: '280px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '12px',
  borderRadius: '4px',
};

const WithAllThemesAndTypesRadioButtonDecorator: Decorator = (
  StoryFn,
  context
) => {
  const { color, disabled, label, ...restArgs } = context.args;
  const backgroundValue = context.globals.backgrounds?.value;
  const currentMode = backgroundValue === '#000000' ? 'dark' : 'light';

  const [selectedStates, setSelectedStates] = useState<
    Record<string, string | null>
  >({});

  const handlePress = (brandKey: string, value: string) => {
    setSelectedStates((prev) => ({ ...prev, [brandKey]: value }));
  };
  return (
    <div style={gridContainerStyle}>
      {brands.map((brand) => {
        const radioButtonValue = `theme_${brand.value}_interactive`;


        return (
          <div key={brand.value} style={gridItemStyle}>
            {' '}
            <GayaProvider
              brand={brand.value as BrandTypes}
              mode={currentMode}

            >
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
              >
                <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
                  {brand.name} Theme
                </span>
                <StoryContainer title={`${brand.name}`}>
                  <RadioButton
                    label={label as string}
                    value={brand.value}
                    color={color as RadioButtonColors}
                    disabled={disabled as boolean}
                    selected={selectedStates[brand.value] === radioButtonValue}
                    onPress={() => handlePress(brand.value, radioButtonValue)}
                  />
                </StoryContainer>
              </div>
            </GayaProvider>
          </div>
        );
      })}

      <div style={gridItemStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <span style={{ fontWeight: 'bold', fontSize: '1.2em' }}>
            Disabled States
          </span>
          <StoryContainer title="Deselected Disabled">
            <RadioButton
              label={label as string}
              disabled
              value="disabled-deselected"
              color={color as RadioButtonColors}
            />
          </StoryContainer>
          <StoryContainer title="Selected Disabled">
            <RadioButton
              label={label as string}
              selected
              disabled
              value="disabled-selected"
              color={color as RadioButtonColors}
            />
          </StoryContainer>
        </div>
      </div>

    </div>
  );
};

export const AllThemesAndTypes: Story = {
  name: 'All Themes and Types',
  args: {
    color: 'primary',
    disabled: false,
    label: 'Natura Design System',
  },
};

AllThemesAndTypes.decorators = [WithAllThemesAndTypesRadioButtonDecorator];
