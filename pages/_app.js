/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from '@/styles/theme';
import { Global, css } from '@emotion/react';

import { AuthProvider } from '@/lib/auth';

const GlobalStyle = ({ children }) => (
  <>
    <CSSReset />
    <Global
      styles={css`
        html {
          scroll-behavior: smooth;
        }
        #__next {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}
    />
    {children}
  </>
);

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
