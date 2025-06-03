import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GayaProvider } from '../../common/providers/GayaProvider';
import { ProgressIndicator } from './ProgressIndicator';
import {
  ProgressIndicatorProps,
  ProgressIndicatorSizes,
} from './ProgressIndicator.types';
import { BrandTypes, brands } from '../../common/brandTypes';

const meta: Meta<typeof ProgressIndicator> = {
  title: 'Componentes/GayaProgressIndicator',
  component: ProgressIndicator,
  parameters: {
    controls: {
      sort: 'alpha',
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['standard', 'semi', 'medium', 'large'],
    },
    showLayer: {
      control: { type: 'boolean' },
    },
    brand: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const brandsRowContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '24px',
  padding: '16px',
  alignItems: 'flex-start',
  justifyContent: 'center',
};

const brandCardStyle: React.CSSProperties = {
  minWidth: '320px',
  maxWidth: '450px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  padding: '16px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
};

const sizeSectionStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  padding: '10px',
  borderRadius: '4px',
};

const piExamplesRowStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
};

const piExampleItemStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
};

const WithAllThemesProgressIndicatorDecorator: React.Decorator = (
  StoryFn,
  context
) => {
  const { args } = context;
  const typedArgs = args as ProgressIndicatorProps;
  const backgroundValue = context.globals?.backgrounds?.value;
  const currentMode =
    backgroundValue === '#000000' || backgroundValue === 'black'
      ? 'dark'
      : 'light';

  return (
    <div style={brandsRowContainerStyle}>
      {brands.map((brand) => (
        <div key={brand.value} style={brandCardStyle}>
          <h3
            style={{
              textAlign: 'center',
              marginTop: 0,
              marginBottom: '8px',
              borderBottom: '1px solid #eee',
              paddingBottom: '10px',
              color: '#333',
            }}
          >
            {brand.name}
          </h3>
          <GayaProvider brand={brand.value as BrandTypes} mode={currentMode}>
            <div style={sizeSectionStyle}>
              <div style={piExamplesRowStyle}>
                <div style={piExampleItemStyle}>
                  <ProgressIndicator
                    {...typedArgs}
                    brand={brand.value as BrandTypes}
                  />
                </div>
              </div>
            </div>
          </GayaProvider>
        </div>
      ))}
    </div>
  );
};

export const AllThemes: Story = {
  name: 'All Themes',
  args: {
    size: 'standard',
    showLayer: false,
  },
  decorators: [WithAllThemesProgressIndicatorDecorator],
};

export const Default: Story = {
  args: {
    size: 'medium',
    showLayer: false,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
      <ProgressIndicator {...args} />
    </div>
  ),
};

