import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Article from "./article";

const Intro: React.FC = () => {
  return (
    <>
      <Center>
        <Box textAlign="center" margin={8}>
          <Heading as="h1" size="md" marginBottom={4}>
            Alice's Adventures in Wonderland is a novel written by Lewis Carroll
            in 1865.
          </Heading>
          <Text size="sm">
            As part of my personal treasure hunt, I have been collecting unique
            copies of Alice second-hand for almost 10 years.
          </Text>
          <Text size="sm">I created this site to document my collection</Text>
        </Box>
      </Center>
      <Article />
    </>
  );
};

export default Intro;
