import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/Layouts/Article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/Works'
import P from '../../components/Paragraph'

const Work = () => (
  <Layout title="sneakers">
    <Container maxW='2xl'>
      <Title>
        Sneakers <Badge>2022</Badge>
      </Title>
      <P>
        Sneakers is a front-end website project designed to showcase and sell Nike brand sneakers. The website features an attractive user interface that highlights the different styles and models of Nike sneakers available for purchase. The website offers a variety of pages such as the home page, product pages, shopping cart, and checkout page. Visitors can easily browse through the different products, view product details and images, and add items to their shopping cart. The website is optimized for responsiveness and accessibility, allowing users to access it from any device. The website's design is focused on creating a visually appealing and user-friendly experience for customers looking to purchase Nike sneakers. Sneakers' front-end website provides a seamless and enjoyable experience for users who want to shop for high-quality sneakers from a trusted brand.
      </P>

      <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="hhttps://adenkesuma.github.io/web-ecommerce-nike-shoes/" target='_blank'>
              https://adenkesuma.github.io/web-ecommerce-nike-shoes/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Html / Css / Javascript</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/ecommerce-nike-shoes.png" alt="ecommerce nike shoes" />
        <SimpleGrid columns={2} gap={4}>
          <WorkImage src="/images/works/ecommerce-nike-shoes-2.png" alt="ecommerce nike shoes 2" />
          <WorkImage src="/images/works/ecommerce-nike-shoes-3.png" alt="ecommerce nike shoes 3" />
        </SimpleGrid>
    </Container>
  </Layout>
)

export default Work;

export { getServerSideProps } from '../../components/Chakra';