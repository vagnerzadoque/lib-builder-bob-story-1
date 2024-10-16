/* eslint-disable @typescript-eslint/no-empty-interface */
// import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { Theme } from '../../common/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
