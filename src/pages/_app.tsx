import React from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../styles/Theme';
import { Header } from '../components/Header';
import { MainContainer } from '../components/MainContainer';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
