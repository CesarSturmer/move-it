import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import persistentData from '../utils/persistentData';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = persistentData<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (

    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

export default MyApp
