// import package
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';

// import component
import theme from '../lib/Theme';
import '@/styles/globals.css';
import Layout from '@/components/layouts/Main';
import Fonts from '@/components/Font';

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence mode='wait' initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}
