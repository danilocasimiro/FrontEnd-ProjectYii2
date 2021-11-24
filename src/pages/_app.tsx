import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <NextAuthProvider session={pageProps.session}>
        <CookiesProvider>
          <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
            <Component {...pageProps} />
            </ChakraProvider>
            <ReactQueryDevtools/>
          </QueryClientProvider>
        </CookiesProvider>
      </NextAuthProvider>
  )
}

export default MyApp
