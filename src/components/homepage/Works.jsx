import Section from "../Section";
import Paragraph from "../Paragraph";
import { Heading, Link, Box, Button } from "@chakra-ui/react";
import { NextLink } from 'next/link';

const Works = () => {
  return (
    <>
        <Section delay={0.1}>
            <Heading as="h3" fontSize={24} variant="section-title">
                Work
            </Heading>
            <Paragraph>
              I am a self-motivated individual currently studying front-end web development on my own for about a year. I am passionate about creating visually appealing and user-friendly websites. I am proficient in using Figma for UI/UX design and am currently focusing on deepening my knowledge of the Next.js framework. I am ambitious to become an excellent front-end developer and constantly seek new learning opportunities to hone my skills.
            </Paragraph>
            {/* <Box align="center" my={4}>
                <Button 
                    as={NextLink}
                    href="/works"
                    rightIcon={<DownloadIcon />} 
                    colorScheme="teal" 
                    scroll={false}
                >
                Download CV
                </Button>
            </Box> */}
        </Section>
    </>
  )
}

export default Works;
