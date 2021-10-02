import { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      </ChakraProvider>
    </NextAuthProvider>
  )
}

export default MyApp
