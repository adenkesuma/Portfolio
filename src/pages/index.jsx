// import package
import { Container } from "@chakra-ui/react";

// import component
import Layout from "@/components/Layouts/Article";
import About from "@/components/homepage/About";
import Works from "../components/homepage/Works";
import Bio from "@/components/homepage/Bio";
import Intrest from "@/components/homepage/Intrest";
import Footer from "@/components/Footer";
import Media from "@/components/homepage/Media";

export default function Home() {
  return (
    <Layout>
      <Container maxW='2xl'>
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
