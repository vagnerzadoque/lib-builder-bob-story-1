/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { ChangeEvent, useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GayaIconBase } from './GayaIcon';
import { icons, iconNames, IconName } from '@naturacosmeticos/natds-icons';
import { View } from 'react-native';

const description = `[Acesse a documentação completa no Confluence.](https://natura.atlassian.net/wiki/spaces/NatDS/pages/4792811853/Componente+Icon)





## Props
  | Prop-Figma    | Prop                      |        Status           |
  |---------------|---------------------------|-------------------------|
  | **size**      | **size**                  |  ✅ Available           |
  | **----**      | **name**                  |  ❌  Inconsistent name  |
  | **-----**     | **color**                 |  ❌  Inconsistent name  |

  ## Props / Values
  | ** Figma: ---------** | ** Stack:   color**    |
  |-----------------------|------------------------|
  | ------                | color-tokens           |

  | ** Figma: ---------** | ** Stack:   name**     |
  |-----------------------|------------------------|
  | ------                | icons-name             |

  | ** Figma: ---------** | ** Stack:   size**     |
  |-----------------------|------------------------|
  | ------                | none                   |
  | ------                | micro                  |
  | ------                | tiny                   |
  | small                 | small                  |
  | standard              | standard               |
  | semi                  | semi                   |
  | semiX                 | semiX                  |
  | medium                | medium                 |


  ## Accessibility
| Property                | Values                  |
|---                      |                      ---|
| **accessibilityHint**   | string                  | 
| **accessibilityLabel**  | string                  | 
| **accessibilityLabel**  | imagebutton, image      | 
`;

const meta = {
  title: 'Componentes/GayaIcon',
  component: GayaIconBase,
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
    internal: {
      table: {
        disable: true,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    name: {
      control: {
        type: 'select',
      },
      options: Object.keys(icons),
    },
  },
} satisfies Meta<typeof GayaIconBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    color: 'primary',
    disabled: false,
    name: 'outlined-default-mockup',
    size: 'standard',
  },
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
          gap: '4px',
          boxSizing: 'border-box',
        }}
      >
        <p>{`Total de Ícones: ${filterOptionsN.length}`}</p>
      </div>
      <View>
        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{ minWidth: 280 }}>
            <input
              style={{ width: 190, height: 30, padding: 8 }}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                //@ts-ignore
                setValue(e.target.value)
              }
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
                  <GayaIconBase
                    color="primary"
                    name={names.value as IconName}
                  />
                  <p>{names.value}</p>
                </div>
              ))
            ) : (
              <div>Nenhum ícone encontrado.</div>
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
