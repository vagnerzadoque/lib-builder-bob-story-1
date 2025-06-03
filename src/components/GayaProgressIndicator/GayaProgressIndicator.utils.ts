import { DefaultTheme } from 'styled-components/native';
import { ProgressIndicatorSizes } from './ProgressIndicator.types';

interface GetStyleBySizeProps {
  size: ProgressIndicatorSizes;
  theme: DefaultTheme;
}


export const getGayaProgressIndicatorStyleBySize = ({
  size,
  theme,
}: GetStyleBySizeProps): number => {
  const sizeMap: Record<ProgressIndicatorSizes, number> = {
    standard: theme.size.standard,
    semi: theme.size.semi,
    medium: theme.size.medium,
    large: theme.size.large,
  };


  return sizeMap[size] || theme.size.medium; 
};

