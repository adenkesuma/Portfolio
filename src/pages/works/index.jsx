import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "@/components/Section";
import { WorkGridItem } from "@/components/gridItem";
import statisto from '../../../public/images/works/statisto.png';
import boiswap from '../../../public/images/works/boiswap.png';
import coffeeShop from '../../../public/images/works/coffee-shop.png';
import ecommerceNikeShoes from '../../../public/images/works/ecommerce-nike-shoes.png';
import omnifood from '../../../public/images/works/omnifood.png';
import steamScape from '../../../public/images/works/steam-scape.png';
import Layout from "@/components/layouts/Article";
import Footer from "@/components/Footer";

const Works = () => (
  <Layout title="Works">
    <Container maxW='2xl'>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="Statisto" title="statisto" thumbnail={statisto}>
            Statisto is a landing page designed with a visually appealing and modern look.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="SteamScape"
            title="steam scape"
            thumbnail={steamScape}
          >
            Steam Scape is a video-sharing website that provides a free platform for users to watch videos similar to Youtube.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="Boiswap"
            title="boiswap"
            thumbnail={boiswap}
          >
            Boiswap is a cryptocurrency landing page that provides a user-friendly interface for investors and enthusiasts in the crypto world.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="Omnifood" thumbnail={omnifood} title="omnifood">
            Omnifood is an online food ordering website that offers a wide range of
            features and boasts a sleek and modern design.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="CoffeeShop"
            title="cofee-shop"
            thumbnail={coffeeShop}
          >
            Coffee-Shop is a front-end website project designed to showcase an inviting and cozy coffee shop
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="Sneakers" thumbnail={ecommerceNikeShoes} title="sneakers">
            Sneakers is a front-end website project designed to showcase and sell Nike brand sneakers
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
    <Footer />
  </Layout>
)

export default Works;

export { getServerSideProps } from '@/components/Chakra';