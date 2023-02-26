import Section from "../Section";
import { Heading, Box, List, ListItem, Button } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import NextLink from "next/link";
import { GridItem } from "../gridItem";
import { SimpleGrid } from "@chakra-ui/react";
import thumbYouTube from "../../../public/myYoutube.png";

const Media = () => {
  return (
    <>
        <Section delay={0.3}>
            <Heading as="h3" variant="section-title" fontSize={24}>
                On the web
            </Heading>
            <List>
                <ListItem>
                <Link href="https://github.com/adenkesuma" target="_blank">
                    <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoGithub />}
                    >
                    @adenkesuma
                    </Button>
                </Link>
                </ListItem>
                <ListItem>
                <Link href="https://www.linkedin.com/in/aden-kesuma-51549724b/" target="_blank">
                    <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoLinkedin />}
                    >
                    @Aden Kesuma
                    </Button>
                </Link>
                </ListItem>
                <ListItem>
                <Link href="https://www.youtube.com/channel/UClDwBhYXaFcWZVix3WI-5ig" target="_blank">
                    <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoYoutube />}
                    >
                    @magicCode
                    </Button>
                </Link>
                </ListItem>
                <ListItem>
                <Link href="https://www.instagram.com/aden_kesuma/" target="_blank">
                    <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoInstagram />}
                    >
                    @aden_kesuma
                    </Button>
                </Link>
                </ListItem>
            </List>

            <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <GridItem
                    href="https://www.youtube.com/channel/UClDwBhYXaFcWZVix3WI-5ig"
                    title="MagicCode"
                    thumbnail={thumbYouTube}
                >
                My YouTube channel (still progress)
                </GridItem>
                <GridItem
                    href="https://www.inkdrop.app/"
                    title="Inkdrop"
                    thumbnail={thumbYouTube}
                    >
                    A Markdown note-taking app
                </GridItem>
            </SimpleGrid>

            <Box align="center" my={4}>
                <Button
                as={NextLink}
                href="/posts"
                scroll={false}
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                >
                Popular posts
                </Button>
            </Box>
        </Section>
    </>
  )
}

export default Media;
