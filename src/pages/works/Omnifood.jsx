import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/Layouts/Article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/Works'
import P from '../../components/Paragraph'

const Work = () => (
  <Layout title="omnifood">
    <Container maxW='2xl'>
      <Title>
        Omnifood <Badge>2022</Badge>
      </Title>
      <P>
        Omnifood is an online food ordering website that offers a wide range of
        features and boasts a sleek and modern design. The website provides
        users with a convenient and hassle-free way to order food online.
        Omnifood offers a diverse range of food options from various cuisines,
        making it easy for users to find what they're craving. With a
        user-friendly interface, users can quickly and easily navigate the
        website, browse the menu, and place orders. Omnifood's efficient
        ordering system ensures that users receive their food in a timely
        manner, making it the perfect solution for anyone looking for a
        convenient and reliable way to order food online.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://adenkesuma.github.io/food-web/">
            https://adenkesuma.github.io/food-web/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html / Css / Javascript </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/omnifood.png" alt="omnifood" />
      <SimpleGrid columns={2} gap={4}>
        <WorkImage src="/images/works/omnifood-2.png" alt="omnifood 2" />
        <WorkImage src="/images/works/omnifood-3.png" alt="omnifood 3" />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work
export { getServerSideProps } from '../../components/chakra'