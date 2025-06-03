import React, { useState, useEffect } from 'react'; // Import useEffect
import type { Meta, StoryObj } from '@storybook/react';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';
import { Rating } from './Rating';
import {
  RatingProps, // Keep RatingProps for general StoryObj type initially
  RatingInputProps, // Specific props for our default story
  RatingReadOnlyProps,
  RatingCounterProps,
  RatingValueProps,
  RatingVarianstProps,
  RatingAlignProps,
  RatingCounterSize,
  RatingReadOnlySize,
} from './Rating.types';
import { GayaProvider } from '../../common/providers/GayaProvider'; // For theme context
import { brands, BrandTypes } from '../../common/brandTypes'; // To showcase with different brands

// Define specific size type for 'input' variant if not already in Rating.types
type RatingInputSize = 'semi' | 'semiX' | 'medium';

const meta: Meta<typeof Rating> = {
  title: 'Componentes/GayaRating',
  component: Rating,
  parameters: {
    controls: {
      sort: 'alpha',
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Define argTypes for the 'input' variant primarily, as it's our default
  // Users can still change variant, and other args will show/hide based on global 'if' conditions
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['input', 'read-only', 'counter'] as RatingVarianstProps[],
      description: 'Select the variant of the Rating component.',
    },
    size: {
      control: { type: 'select' },
      // Combined list, specific stories will narrow this down
      options: ['small', 'standard', 'semi', 'semiX', 'medium'],
      description:
        "Icon size. Varies by variant. Input: 'semi', 'semiX', 'medium'. Counter/ReadOnly: 'small', 'standard', 'semi', 'semiX'.",
    },
    rate: {
      control: { type: 'number', min: 0, max: 5, step: 1 },
      description:
        "Current rating value (0-5). Used for 'input' and 'read-only'.",
      if: { arg: 'variant', neq: 'counter' },
    },
    label: {
      control: { type: 'text' },
      description: "Optional label. Used for 'input' and 'counter'.",
      if: { arg: 'variant', oneOf: ['input', 'counter'] },
    },
    disabled: {
      control: { type: 'boolean' },
      description: "Disable interaction. Used for 'input' variant.",
      if: { arg: 'variant', eq: 'input' },
    },
    onPress: {
      action: 'rated',
      description:
        "Callback when a rating is selected. Used for 'input' variant.",
      if: { arg: 'variant', eq: 'input' },
    },
    align: {
      control: { type: 'radio' },
      options: ['left', 'right'] as RatingAlignProps[],
      if: { arg: 'variant', eq: 'counter' },
    },
    // General accessibility props (can be kept disabled in table)
    testID: { table: { disable: true } },
    accessibilityHint: { table: { disable: true } },
    accessibilityLabel: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<RatingProps>; // General type for StoryObj

// --- Input Variant Story (was Default) ---
export const InteractiveInput: StoryObj<RatingInputProps> = {
  // Explicitly type for RatingInputProps
  name: 'Default',
  args: {
    variant: 'input',
    label: 'Placeholder',
    size: 'medium',
    disabled: false,
    rate: 5,
  },
  render: (args) => {
    const [currentRate, setCurrentRate] = useState<RatingValueProps | number>(
      args.rate !== undefined ? args.rate : 0
    );

    useEffect(() => {
      if (args.rate !== undefined) {
        setCurrentRate(args.rate);
      }
    }, [args.rate]);

    const handlePress = (newRate: RatingValueProps | number) => {
      setCurrentRate(newRate);
      if (args.onPress) {
        args.onPress(newRate);
      }
    };

    return (
      <StoryContainer title="Interactive Logo Display">
        <Rating
          variant="input"
          label={args.label}
          size={args.size}
          disabled={args.disabled}
          rate={currentRate}
          onPress={handlePress}
        />
      </StoryContainer>
    );
  },
  argTypes: {
    variant: { table: { disable: true } }, // Hide variant for this specific story
    size: {
      control: { type: 'select' },
      options: ['semi', 'semiX', 'medium'] as RatingInputSize[],
    },
    rate: {
      control: { type: 'select' },
      options: [0, 1, 2, 3, 4, 5] as RatingValueProps[],
      table: { disable: false },
    },
    align: { table: { disable: true } },
  },
};

// --- Read-Only Variant Story ---
// The entire ReadOnly story object previously here has been removed.

// --- Counter Variant Story ---
export const Counter: StoryObj<RatingCounterProps> = {
  name: 'Counter',
  args: {
    variant: 'counter',
    label: '(133 Reviews)',
    size: 'standard',
    align: 'left',
  },
  render: (args) => {
    return (
      <StoryContainer title="Counter Rating">
        <Rating {...args} />
      </StoryContainer>
    );
  },
  argTypes: {
    variant: { table: { disable: true } }, // Hide variant for this specific story
    size: {
      control: { type: 'select' },
      options: ['small', 'standard', 'semi', 'semiX'] as RatingCounterSize[],
    },
    disabled: { table: { disable: true } },
    onPress: { table: { disable: true } },
    // 'label' and 'align' will be visible based on global argTypes conditions.
  },
};

// --- All Variants Showcase Story ---
export const AllVariantsShowcase: StoryObj<RatingProps & { size?: RatingInputSize | RatingCounterSize }> = {
  name: 'All Themes & Types',
  args: {
    size: 'medium',
  },
  render: (args) => {
    const initialInputRates: { [key: string]: RatingValueProps | number } = {};
    brands.forEach(brand => {
      initialInputRates[`${brand.value}-input-medium`] = 3;
    });
    const [inputRates, setInputRates] = useState(initialInputRates);

    const handlePressForBrand = (brandValue: BrandTypes, inputKey: string, newRate: RatingValueProps | number) => {
      setInputRates(prevRates => ({
        ...prevRates,
        [`${brandValue}-${inputKey}`]: newRate,
      }));
    };

    const currentSize = args.size || 'medium';

    return (
      <StoryContainer>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 280px)',
            gap: '24px',
          }}>
            {brands.map((brand) => (
              <GayaProvider key={brand.value} brand={brand.value as BrandTypes}>
                <div style={{
                  border: '1px solid #eee',
                  padding: '16px',
                  borderRadius: '8px',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}>
                  <h3 style={{ marginTop: 0, marginBottom: '16px', textAlign: 'center' }}>{brand.name}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start', flexGrow: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                      <h4>Input Variant</h4>
                      <Rating
                        variant="input"
                        label="Input"
                        size={currentSize as RatingInputSize}
                        rate={inputRates[`${brand.value}-input-medium`]}
                        onPress={(newRate) => handlePressForBrand(brand.value as BrandTypes, 'input-medium', newRate)}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%' }}>
                      <h4>Counter Variant</h4>
                      <Rating
                        variant="counter"
                        label="(133 Reviews)"
                        size={currentSize as RatingCounterSize}
                        align="left"
                      />
                    </div>
                  </div>
                </div>
              </GayaProvider>
            ))}
          </div>
        </div>
      </StoryContainer>
    );
  },
};
