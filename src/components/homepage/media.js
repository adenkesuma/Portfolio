import Section from "../Section";
import { Heading, Box, List, ListItem, Button } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import NextLink from "next/link";
import { GridItem } from "../gridItem";
import { SimpleGrid } from "@chakra-ui/react";
import calculatorThumnail from "../../../public/youtube-calculator.png";
import cryptoThumnail from "../../../public/youtube-crypto.png";

const Media = () => {
    return (
        <>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title" fontSize={24} marginBottom="0.8rem">
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

                <SimpleGrid columns={[1, 2, 2]} gap={6} marginTop="1rem">
                    <GridItem
                        href="https://www.youtube.com/channel/UClDwBhYXaFcWZVix3WI-5ig"
                        title="Calculator website"
                        thumbnail={calculatorThumnail}
                    >
                        Build a Calculator website
                    </GridItem>
                    <GridItem
                        href="https://www.inkdrop.app/"
                        title="crypto web design"
                        thumbnail={cryptoThumnail}
                        >
                        Video Still in process
                    </GridItem>
                </SimpleGrid>
            </Section>
        </>
    )
}

export default Media;
