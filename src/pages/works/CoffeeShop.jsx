import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '@/components/layouts/Article';
import { Meta, Title, WorkImage } from '@/components/Works';
import Paragraph from '@/components/Paragraph';

const Work = () => (
  <Layout title="coffee-shop">
    <Container maxW='2xl'>
      <Title>
        Coffee Shop <Badge>2022</Badge>
      </Title>
      <Paragraph>
       Coffee-Shop is a front-end website project designed to showcase an inviting and cozy coffee shop. The website features a visually appealing user interface with high-quality images that highlight the coffee shop's unique atmosphere and charm. Visitors to the website can easily navigate through various pages such as the home page, menu page, gallery page, contact page, and possibly an online ordering page if needed. The design of the pages creates a warm and comfortable ambiance that reflects the coffee shop's image. The website is optimized for responsiveness and accessibility, ensuring that it can be accessed on a variety of devices with ease. Coffee-Shop's front-end website provides a seamless and enjoyable experience for users who want to explore and learn more about this charming coffee spot.
      </Paragraph>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://adenkesuma.github.io/web-coffee-shop/" target='_blank'>
            https://adenkesuma.github.io/web-coffee-shop/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html / Css / Javascript </span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/coffee-shop.png" alt="coffee shop" />
      <SimpleGrid columns={2} gap={4}>
        <WorkImage src="/images/works/coffee-shop-2.png" alt="coffee shop 2" />
        <WorkImage src="/images/works/coffee-shop-3.png" alt="coffee shop 3" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work;

export { getServerSideProps } from '@/components/Chakra';