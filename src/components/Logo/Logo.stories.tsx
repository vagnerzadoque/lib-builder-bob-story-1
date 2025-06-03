import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GayaProvider } from '../../common/providers/GayaProvider'; // For theme context
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Logo } from './Logo';
import { LogoProps, LogoColors, NeutralLogoModel, LogoLanguages } from './Logo.types';
import { Size as ThemeSize } from '@naturacosmeticos/natds-themes/react-native'; // For size options
import { brands, BrandTypes } from '../../common/brandTypes'; // To showcase with different brands

console.log("ThemeSize imported:", ThemeSize); // <<< ADICIONE ESTE LOG

// Define the available color options for the controls.
const logoColorOptions: LogoColors[] = [
  'neutral',
  'primary',
  'secondary',
  'highlight',
  'surface',
];

// Define the available model options.
const logoModelOptions: NeutralLogoModel[] = ['a', 'b'];

// Define the available size options.
// This was the line identified by the error in the previous step if ThemeSize was undefined
const defaultLogoSizes: (keyof ThemeSize)[] = [
  'micro', 'tiny', 'small', 'standard', 'semi', 'semiX', 'medium',
  'large', 'largeX', 'largeXX', 'largeXXX', 'huge', 'hugeX', 'hugeXX', 'hugeXXX', 'veryHuge'
];
const logoSizeOptions: (keyof ThemeSize)[] = ThemeSize ? Object.keys(ThemeSize) as (keyof ThemeSize)[] : defaultLogoSizes;

const logoLanguageOptions: LogoLanguages[] = ['default', 'es', 'pt'];

const meta: Meta<typeof Logo> = {
  title: 'Componentes/Logo',
  component: Logo,
  parameters: {
    controls: {
      sort: 'alpha',
    },
    layout: 'centered', // Restored layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: logoColorOptions,
      description: 'Determines the color variant of the logo. "neutral" uses the default SVG colors.',
    },
    model: {
      control: { type: 'select' },
      options: logoModelOptions,
      description: 'Selects the logo model (e.g., A or B version).',
    },
    size: {
      control: { type: 'select' },
      options: logoSizeOptions,
      description: 'Sets the display size of the logo.',
    },
    languages: {
      control: { type: 'select' },
      options: logoLanguageOptions,
      description: 'Selects the language version of the logo (if available).',
    },
    accessibilityLabel: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<LogoProps>;

export const Interactive: Story = {
  name: "Interactive Logo",
  args: {
    color: 'neutral',
    model: 'a',
    size: 'veryHuge',
    languages: 'default',
    accessibilityLabel: 'Company Logo',
  },
  render: (args) => (
    <StoryContainer title={`Logo - Color: ${args.color}, Model: ${args.model}, Size: ${args.size}`}>
      {/* For Interactive, you might wrap with a specific GayaProvider if needed */}
      <Logo {...args} />
    </StoryContainer>
  ),
};

// --- Story to showcase logo across different brands --
const WithAllBrandsDecorator: React.Decorator = (StoryFn, context) => {
  const { args } = context;
  const currentMode = context.globals?.backgrounds?.value === '#000000' ? 'dark' : 'light';

  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '24px', padding: '16px', justifyContent: 'center', width: '100vw' /* Ensure it takes full width to center content */ }}>
      {brands.map((brand) => {
        if (!brand || !brand.value) {
          console.error("Skipping invalid brand data in decorator:", brand);
          return null;
        }
        const brandValue = brand.value as BrandTypes;
        return (
          <div key={brandValue} style={{ padding: '16px', border: '1px solid #eee', borderRadius: '8px', textAlign: 'center', minWidth: '180px', boxSizing: 'border-box' }}>
            <h4 style={{ marginTop: 0, marginBottom: '12px', textTransform: 'capitalize' }}>{brand.name}</h4>
            <GayaProvider brand={brandValue} mode={currentMode}>
              <Logo
                color={args.color as LogoColors}
                model={args.model as NeutralLogoModel}
                size={args.size as keyof ThemeSize}
                languages={args.languages as LogoLanguages}
                accessibilityLabel={`${brand.name} Logo`}
              />
            </GayaProvider>
          </div>
        );
      })}
    </div>
  );
};

export const AllBrands: Story = {
  name: "Logo Across Brands",
  args: {
    color: 'neutral', // Default for AllBrands
    model: 'a',
    size: 'largeXXX',
    languages: 'default',
  },
  decorators: [WithAllBrandsDecorator],
  parameters: {
    layout: 'fullscreen', // Use fullscreen for this story to allow decorator to control width
  },
}; 