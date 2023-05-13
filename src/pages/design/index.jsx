import { SimpleGrid, Container, Heading, Link } from '@chakra-ui/react';
import Layout from '../../components/Layouts/Article';
import { WorkImage } from '@/components/Works';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Section from '@/components/Section';

const Design = () => {
    return (
      <Layout title="MyDesign">
        <Container maxW="2xl">
          <Heading as="h3" fontSize={20} mb={6}>
            My Design
          </Heading>

          <Section delay={0.1}>
            <SimpleGrid columns={[1, 1, 2]} gap={4}>
              <WorkImage src="/images/designs/design-13.png" alt="design 13" />
              <WorkImage src="/images/designs/design-14.png" alt="design 14" />
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 2]} gap={4}>
              <WorkImage src="/images/designs/design-11.png" alt="design 11" />
              <WorkImage src="/images/designs/design-12.png" alt="design 12" />
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 2]} gap={4}>
              <WorkImage src="/images/designs/design-1.png" alt="design 1" />
              <WorkImage src="/images/designs/design-2.png" alt="design 2" />
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 2]} gap={4}>
              <WorkImage src="/images/designs/design-3.png" alt="design 3" />
              <WorkImage src="/images/designs/design-4.png" alt="design 4" />
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 2]} gap={4}>
              <WorkImage src="/images/designs/design-5.png" alt="design 5" />
              <WorkImage src="/images/designs/design-6.png" alt="design 6" />
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 2]} gap={4}>
              <WorkImage src="/images/designs/design-7.png" alt="design 7" />
              <WorkImage src="/images/designs/design-8.png" alt="design 8" />
            </SimpleGrid>
            <SimpleGrid columns={[1, 1, 2]} gap={4}>
              <WorkImage src="/images/designs/design-9.png" alt="design 9" />
              <WorkImage src="/images/designs/design-10.png" alt="design 10" />
            </SimpleGrid>

            <Link href="https://www.instagram.com/adenkesuma/" target="_blank">
              See More on Instagram <ExternalLinkIcon mx="2px" />
            </Link>
          </Section>
        </Container>
      </Layout>
    );
}

export default Design;
