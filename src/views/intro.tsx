import {
  Box,
  Center,
  Heading,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Intro: React.FC = () => {
  return (
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
        <Text size="sm">
          To learn more about each copy, I've documented the details of each
          here.
        </Text>
      </Box>
    </Center>
  );
};

export default Intro;
