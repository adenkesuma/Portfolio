import Head from "next/head";
import Voxel from "../Voxel.jsx";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "../Navbar.jsx";

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Aden Kesuma - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <Voxel />
                {children}
            </Container>
        </Box>
    )
}

export default Main;
