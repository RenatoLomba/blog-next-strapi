import { Theme as GlobalTheme } from '../src/styles/Theme';

type Theme = typeof GlobalTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { } // eslint-disable-line
}
