import { Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";

const About = () => {
  return (
    <>
        <Box borderRadius="lg" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} p={3} mb={6} align="center">
          Hello, I&apos;m a front-end developer based in Indonesia!
        </Box>

        <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">Aden Kesuma</Heading>
                <p> what i like is ( Front-end developer / Ui designer )  </p>
            </Box>
            <Box 
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                align="center"
            >
                <Image 
                  borderColor="whiteAlpha.800" 
                  borderWidth={2} 
                  borderStyle="solid"
                  w="100px"
                  h="100px"
                  display="inline-block"
                  borderRadius="full" 
                  src="/images/aden.jpg"
                  alt="profile image"
                />
            </Box>
        </Box> 
    </>
  )
}

export default About;
