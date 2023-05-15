// import package
import { AnimatePresence } from 'framer-motion';
import { ChakraProvider } from '@chakra-ui/react';

// import component
import Layout from "../components/Layouts/Main";
import theme from '../lib/Theme';
import Fonts from '../components/Font';
import '@/styles/globals.css';

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
