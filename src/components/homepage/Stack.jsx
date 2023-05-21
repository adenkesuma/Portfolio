import { Heading, List, ListItem, Button } from "@chakra-ui/react";

// import component
import Section from "../Section";

const Stack = () => {
  return (
    <>
      <Section delay={0.3}>
        <Heading
          as="h3"
          variant="section-title"
          fontSize={24}
          marginBottom="0.8rem"
        >
          Stack
        </Heading>
        <List>
          <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
              >
                Next Js
              </Button>
            </ListItem>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
              >
                React Js
              </Button>
            </ListItem>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
              >
                Typescript
              </Button>
            </ListItem>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
              >
                Prisma
              </Button>
            </ListItem>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
              >
                Tailwind css
              </Button>
            </ListItem>
            <ListItem>   
              <Button
                variant="ghost"
                colorScheme="teal"
              >Python
              </Button>
            </ListItem>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
              >Figma
              </Button>
            </ListItem>
        </List>
      </Section>
    </>
  );
};

export default Stack;
