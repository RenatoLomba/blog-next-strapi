import { GlobalStyles } from '../src/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../src/styles/Theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider theme={Theme}>
      <Story {...context} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]
