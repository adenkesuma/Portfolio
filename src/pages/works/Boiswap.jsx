import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/Works'
import P from '../../components/Paragraph'
import Layout from '../../components/Layouts/Article'

const Work = () => (
  <Layout title="boiswap">
    <Container maxW='2xl'>
      <Title>
        Boiswap <Badge>2023</Badge>
      </Title>
      <P>
        Boiswap is a cryptocurrency landing page that provides a user-friendly
        interface for investors and enthusiasts in the crypto world. The landing
        page showcases the latest information about different cryptocurrencies
        and allows users to track their investments in real-time. Boiswap is
        designed to be accessible and responsive on multiple devices, making it
        easy for users to access their accounts and manage their investments
        from anywhere. With Boiswap, users can explore a wide range of crypto
        assets and gain insights into the market trends and volatility, helping
        them make informed investment decisions.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://boiswap.webflow.io/" target='_blank'>
            https://boiswap.webflow.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Webflow / Figma</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/boiswap.png" alt="boiswap" />
      <SimpleGrid columns={2} gap={4}>
        <WorkImage src="/images/works/boiswap-2.png" alt="boiswap 2" />
        <WorkImage src="/images/works/boiswap-3.png" alt="boiswap 3" />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;

export { getServerSideProps } from '../../components/Chakra';