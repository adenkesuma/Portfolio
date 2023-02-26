import { Container } from "@chakra-ui/react";
import Layout from "@/components/layouts/Article";

import About from "@/components/homepage/about";
import Works from "../components/homepage/works";
import Bio from "@/components/homepage/bio";
import Intrest from "@/components/homepage/intrest";
import Footer from "@/components/Footer";
import Media from "@/components/homepage/media";

export default function Home() {
  return (
    <Layout>
      <Container>
        <About />
        <Works />
        <Bio />
        <Intrest />
        <Media />
        <Footer />
      </Container>
    </Layout>
  )
} 

export { getServerSideProps } from '../components/chakra';
