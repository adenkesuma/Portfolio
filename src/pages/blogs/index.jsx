import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/Layouts/Article';
import Section from '../../components/Section';
import Footer from '@/components/Footer';
import { GridItem } from '../../components/gridItem';
import aiThumnail from "../../../public/images/contents/ai-blog.jpg";
import blockchainThumnail from "../../../public/images/contents/blockchain-blog.jpg";
import cssFrameworkThumnail from "../../../public/images/contents/css-framework.jpg";
import salariesThumnail from "../../../public/images/contents/salaries-tech-blog.jpg";
import techStackThumnail from "../../../public/images/contents/tech-stack-blog.jpg";
import responsiveThumnail from "../../../public/images/contents/responsive-blog.jpg";

const Blogs = () => (
  <Layout title="Blogs">
    <Container maxW='2xl'>
      <Heading as="h3" fontSize={20} mb={6}>
        Popular
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Top 6 Most Popular Tech Stack in 2023"
            thumbnail={techStackThumnail}
            href="https://medium.com/@adenfdfd10/top-6-most-popular-tech-stack-in-2023-3e4276333cf8"
          />
          <GridItem
            title="The highest paying tech jobs in 2023"
            thumbnail={salariesThumnail}
            href="https://medium.com/@adenfdfd10/the-highest-paying-tech-jobs-in-2023-5ef3d86d2dcf"
          />
          <GridItem
            title="Steps to Creating a Responsive Web Design"
            thumbnail={responsiveThumnail}
            href="https://medium.com/@adenfdfd10/steps-to-creating-a-responsive-web-design-4e1428a013d2"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" fontSize={20} mb={6} mt={12}>
          New Post
        </Heading>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="The Future of Artificial Intelligence"
            thumbnail={aiThumnail}
            href="https://medium.com/@adenfdfd10/the-future-of-artificial-intelligence-1bcb942ddca8"
          />
          <GridItem
            title="Top 5 Most Popular CSS Framework in 2023"
            thumbnail={cssFrameworkThumnail}
            href="https://medium.com/@adenfdfd10/top-5-most-popular-css-framework-in-2023-e5f0f133eca"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Web3: The Next Generation of Blockchain Technology and its Potential to Transform Industries"
            thumbnail={blockchainThumnail}
            href="https://medium.com/@adenfdfd10/web3-the-next-generation-of-blockchain-technology-and-its-potential-to-transform-industries-d8bbddfe9200"
          />
        </SimpleGrid>
      </Section>
      <Footer />
    </Container>
  </Layout>
)

export default Blogs;
export { getServerSideProps } from '../../components/chakra';