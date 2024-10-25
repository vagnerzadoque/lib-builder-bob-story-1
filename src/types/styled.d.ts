/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native'
import { Theme } from '@naturacosmeticos/natds-themes/react-native';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
