import { Theme as GlobalTheme } from './Theme';

type Theme = typeof GlobalTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { } // eslint-disable-line
}
