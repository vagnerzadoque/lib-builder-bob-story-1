/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ChangeEvent, useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GayaIconBase } from './GayaIcon';
import { icons, iconNames, IconName } from '@naturacosmeticos/natds-icons';
import { View } from 'react-native';

const description = `
> A helper component to display icons from @naturacosmeticos/natds-icons package

## Properties
| Property                | Values                                                        |    Status    |
|-------------------------|---------------------------------------------------------------|--------------|
| **color**               | color-tokens                                                  | ✅ Available |
| **size**                | none, micro, tiny, small, standard, semi, semiX, medium       | ✅ Available |
| **name**                | icon-name                                                     | ✅ Available |
| **accessibilityHint**   | string                                                        | ✅ Available |
| **accessibilityLabel**  | string                                                        | ✅ Available |
| **accessibilityRole**   | imagebutton, image                                            | ✅ Available |

## Technical Usages Examples
`;



const meta = {
  title: 'GaYa Icon',
  component: GayaIconBase,
  parameters: {
    docs: {
      description: {
        component: description,
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      name: 'name',
      description: 'Selecione o nome do ícone',
      control: {
        type: 'select', // Define o controle como 'select'
      },
      options: Object.keys(icons), // Fornece a lista de opções
      defaultValue: 'outlined-default-mockup', // Defina um valor padr // Forneça as opções explicitamente
    },
    internal: {
      control: false,
      table: {
        disable: true,
      },
    },
  }
} satisfies Meta<typeof GayaIconBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {},
};

export interface OptionProps {
  value: string;
  label: string;
}

export const SearchIcon = () => {
  const [value, setValue] = useState('');

  const filterOptionsN: OptionProps[] = useMemo(
    () => iconNames.map((icon) => ({ value: icon, label: icon })),
    []
  );

  const filterOptions: OptionProps[] = useMemo(() => {
    return filterOptionsN.filter((opt) =>
      opt.label.toLowerCase().includes(value.toLowerCase())
    );
  }, [value, filterOptionsN]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          boxSizing: 'border-box',
          padding: '10px',
        }}
      >
        <View>Total de Ícones</View>
        <View>{filterOptionsN.length}</View>
      </div>
      <View>
        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{ minWidth: 280 }}>
            <input
              style={{ width: 190, height: 30, padding: 8 }}
              //@ts-ignore
              onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
              value={value}
              placeholder="Pesquisar ícones..."
            />
          </div>
          <div
            style={{
              display: 'flex',
              gap: 20,
              width: '480px',
              flexWrap: 'wrap',
            }}
          >
            {filterOptions.length > 0 ? (
              filterOptions.map((names) => (
                <div
                  key={names.value}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #ccc',
                    width: '180px',
                  }}
                >
                  <GayaIconBase color="primary" name={names.value as IconName} />
                  <p>{names.value}</p>
                </div>
              ))
            ) : (
              <div>Nenhum ícone encontrado</div>
            )}
          </div>
        </div>
      </View>
    </>
  );
};

SearchIcon.parameters = {
  controls: { disable: true },
};
