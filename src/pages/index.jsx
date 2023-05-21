// import package
import { Container } from "@chakra-ui/react";

// import component
import Layout from "@/components/layouts/Article";
import About from "@/components/homepage/About";
import Bio from "@/components/homepage/Bio";
import Interest from "@/components/homepage/Interest";
import Footer from "@/components/Footer";
import Media from "@/components/homepage/Media";
import Works from "@/components/homepage/Works";
import Stack from "@/components/homepage/Stack";

export default function Home() {
  return (
    <Layout>
      <Container maxW='2xl'>
        <About />
        <Works />
        <Bio />
        <Interest />
        <Media />
        <Stack />
        <Footer />
      </Container>
    </Layout>
  )
} 

export { getServerSideProps } from '@/components/Chakra';
