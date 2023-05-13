import {
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
  <Layout title="Statisto">
    <Container maxW='2xl'>
      <Title>
        Statisto <Badge>2023</Badge>
      </Title>
      <P>
       Statisto is a landing page designed with a visually appealing and modern look. The landing page is designed to display relevant statistical information on a specific topic using easy-to-understand charts and tables. Statisto features interactive and responsive features, making it easily accessible from various devices such as desktops, laptops.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://web-statistic.webflow.io/" target='_blank'>
            https://web-statistic.webflow.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Webflow / Figma</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/statisto.png" alt="statisto" />
      <SimpleGrid columns={2} gap={4}>
        <WorkImage src="/images/works/statisto-2.png" alt="statisto 2" />
        <WorkImage src="/images/works/statisto-3.png" alt="statisto 3" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work;
export { getServerSideProps } from '../../components/chakra'