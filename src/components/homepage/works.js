import Section from "../Section";
import Paragraph from "../Paragraph";
import { Heading, Link, Box, Button } from "@chakra-ui/react";
import { NextLink } from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Works = () => {
  return (
    <>
        <Section delay={0.1}>
            <Heading as="h3" fontSize={24} variant="section-title">
                Work
            </Heading>
            <Paragraph>
                Aden is a student and a front-end developer based in medan with a
                passion for building a website responship design and interaktif,
                i have a lot of interest of design and web developer and now i'm 
                studying at university, the university is {''}
                <Link as={NextLink} href="/works/inkdrop" passHref scroll={false}>
                inkdrop
                </Link>
                {''} i publishes content for web development tips on his youtube channel called &quot;
                <Link
                as={NextLink}
                href="https://www.youtube.com/watch?v=tkbqnsiwrkk&t=521s"
                passHref
                target="_blank"
                >
                Aden dev
                </Link>
                &quot; has more than 40 subscribers
            </Paragraph>
            <Box align="center" my={4}>
                <Button 
                as={NextLink}
                href="/works"
                rightIcon={<ChevronRightIcon />} 
                colorScheme="teal" 
                scroll={false}>
                My portfolio
                </Button>
            </Box>
        </Section>
    </>
  )
}

export default Works;
