import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-styles';
import { theme } from '../styles/theme';

import { Header } from '../components/Header';
import { Menu } from '../components/Menu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Menu />

      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
