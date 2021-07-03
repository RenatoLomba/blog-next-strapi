import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../styles/Theme';

export function customRender(children: React.ReactNode): RenderResult {
  return render(<ThemeProvider theme={Theme}>{children}</ThemeProvider>);
}
