import Section from "../Section";
import Paragraph from "../Paragraph";
import { Heading } from "@chakra-ui/react";
import Link from "next/link";

const Intrest = () => {
  return (
    <>
        <Section delay={0.3}>
            <Heading as="h3" fontSize={24} variant="section-title">
                Intrest
            </Heading>
            <Paragraph>
                Art,
                Design, 
                sport, 
                Read,
                Draw
            </Paragraph>
        </Section>
    </>
  )
}

export default Intrest;
