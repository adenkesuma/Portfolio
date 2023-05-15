import { Heading, List, ListItem, Button } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";

// import component
import Section from "../Section";

const Media = () => {
    return (
      <>
        <Section delay={0.3}>
          <Heading
            as="h3"
            variant="section-title"
            fontSize={24}
            marginBottom="0.8rem"
          >
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
              <Link
                href="https://www.linkedin.com/in/aden-kesuma-51549724b/"
                target="_blank"
              >
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
              <Link
                href="https://www.instagram.com/adenkesuma/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @adenkesuma
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </>
    );
}

export default Media;
