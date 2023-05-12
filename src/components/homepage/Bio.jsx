import Section from "../Section";
import { Heading } from "@chakra-ui/react";
import { BioSection, BioYear } from "../Bio";

const Bio = () => {
    return (
        <>
            <Section delay={0.2}>
                <Heading as="h3" marginBottom=".5rem" fontSize={24} variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2004</BioYear>
                    Born in Indonesia, Medan.
                </BioSection>
                <BioSection>
                    <BioYear>2010 - 2016</BioYear>
                    I studied at public elementary school 105289
                </BioSection>
                <BioSection>
                    <BioYear>2016 - 2019</BioYear>
                    I studied at Alwashliyah Tembung Middle School
                </BioSection>
                <BioSection>
                    <BioYear>2019 - 2022</BioYear>
                    I studied at SMA Negri 1 high school
                </BioSection>
                <BioSection>
                    <BioYear>2022 to present</BioYear>
                    Study at Mikroskil University
                </BioSection>
            </Section>
        </>
    )
}

export default Bio;