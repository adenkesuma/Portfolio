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
  <Layout title="steam-scape">
    <Container maxW='2xl'>
      <Title>
        Steam Scape <Badge>2023</Badge>
      </Title>
      <P>
        Steam Scape is a video-sharing website that provides a free platform for users to watch videos similar to Youtube. The website utilizes the free Youtube API from Rapid API to fetch and display Youtube videos on its platform. With a hassle-free viewing experience that doesn't require any login, users can enjoy a vast collection of videos available for free. Steam Scape offers a variety of exciting content from different genres that can be enjoyed by anyone.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://youtube-clone-sandy-five.vercel.app/">
            https://youtube-clone-sandy-five.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React js / Meterial UI / Vite</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/steam-scape.png" alt="steam scape" />
      <SimpleGrid columns={2} gap={4}>
        <WorkImage src="/images/works/steam-scape-2.png" alt="steam scape 2" />
        <WorkImage src="/images/works/steam-scape-3.png" alt="steam scape 3" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'