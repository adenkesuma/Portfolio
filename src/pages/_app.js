import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from "../components/layouts/Main";
import theme from '@/lib/Theme';
import Fonts from '@/components/Font';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter intial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}
