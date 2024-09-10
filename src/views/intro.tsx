import { Box, Center, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Article from "./article";

const Intro: React.FC = () => {
  return (
    <>
      <Center>
        <Box textAlign="center" margin={10} w="60%">
          <Heading as="h1" size="md" marginBottom={4}>
            Alice's Adventures in Wonderland is a novel written by Lewis Carroll
            in 1865.
          </Heading>
          <Text size="sm">
            As part of my personal 10-year-and-still-ongoing treasure hunt, I
            have been collecting unique copies of Alice second-hand.
          </Text>
          <Text size="sm">
            As my collection grew, so did my curiousity about each edition. Many
            have unique illustrations, bindings, and versions of the story
            itself. As these are (mostly) used copies, several have inscriptions
            and notes inside which I think adds to their story.
          </Text>
        </Box>
      </Center>
      <Article />
    </>
  );
};

export default Intro;
