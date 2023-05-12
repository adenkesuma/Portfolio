import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/Layouts/Article';
import Section from '../../components/section';
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
            href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
          />
          <GridItem
            title="The highest paying tech jobs in 2023"
            thumbnail={salariesThumnail}
            href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          />
          <GridItem
            title="Steps to Creating a Responsive Web Design"
            thumbnail={responsiveThumnail}
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
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
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
          <GridItem
            title="Top 5 Most Popular CSS Framework in 2023"
            thumbnail={cssFrameworkThumnail}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Web3: The Next Generation of Blockchain Technology and its Potential to Transform Industries"
            thumbnail={blockchainThumnail}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section>
      <Footer />
    </Container>
  </Layout>
)

export default Blogs;
export { getServerSideProps } from '../../components/chakra';