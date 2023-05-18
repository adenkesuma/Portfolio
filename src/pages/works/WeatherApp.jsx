import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from '@/components/layouts/Article';
import { Meta, Title, WorkImage } from '@/components/Works';
import Paragraph from '@/components/Paragraph';

const Work = () => (
  <Layout title="weather-app">
    <Container maxW="2xl">
      <Title>
        Weather App <Badge>2022</Badge>
      </Title>
      <Paragraph>
        
        The Weather App website is a platform that provides users with information related to the weather. It offers up-to-date weather conditions for today, a weekly weather forecast, and weather data for other countries. The website has an intuitive and user-friendly interface, allowing users to easily access accurate and useful weather information.<br /><br />

        On the homepage, users are presented with the current weather information, including temperature, humidity, wind speed, and general weather conditions. Additionally, there is a seven-day weather forecast, enabling users to plan their activities accordingly. <br /><br />

        Another notable feature of the website is the ability to view weather statistics in the form of charts. Users can explore graphical representations of historical weather data, such as temperature trends or precipitation levels, providing them with insights into weather patterns. <br /><br />

        Overall, the Weather App website is a reliable and convenient resource for users seeking comprehensive weather information, forecasts, and statistical analysis.
      </Paragraph>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://weather-app-adenkesuma.vercel.app/"
            target="_blank"
          >
            https://weather-app-adenkesuma.vercel.app/{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React JS / Vite</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/weather-app.png" alt="weather-app" />
    </Container>
  </Layout>
);

export default Work;

export { getServerSideProps } from '@/components/Chakra';