import * as React from "react";

import treasures from "../database/treasures";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Flex,
  Box,
  Divider,
  Center,
  Heading,
  Text,
  Tag,
} from "@chakra-ui/react";

interface TreasuresPost {
  id: number;
  slug: string;
  title: string;
  body: string;
}

const typedTreasuresPosts: TreasuresPost[] = treasures;

const Treasures: React.FC = () => {
  return (
    <>
      <Center>
        <Box textAlign="center" margin={8}>
          <Heading as="h1" size="md" marginBottom={4}>
            Books Inspired By Alice in Wonderland
          </Heading>
          <Text size="sm">
            Alice's Adventures in Wonderland has inspired countless books,
            movies, and other media.
          </Text>
        </Box>
      </Center>
      <Box>
        <Center>
          <Divider
            style={{
              borderColor: "#f0e5d1",
              opacity: 1,
              borderBottomWidth: "4px",
            }}
            maxWidth="800px"
          />
        </Center>

        <Flex
          gap="4"
          marginTop={4}
          wrap="wrap"
          alignItems="center"
          justifyContent="center"
        >
          {typedTreasuresPosts.map((post) => (
            <Card
              key={post.id}
              variant="outline"
              borderColor="paper"
              backgroundColor="paper"
              maxWidth="340px"
              minHeight="450px"
            >
              <CardHeader>
                <Image
                  borderRadius="5px"
                  boxSize="300px"
                  src={"lc/ff" + post.id + ".jpg"}
                  objectFit="cover"
                  alt={post.title}
                />
                <Tag
                  size="lg"
                  variant="solid"
                  colorScheme="whiteAlpha"
                  marginTop={2}
                >
                  <Heading size="md" color="black" marginBottom={0}>
                    {post.title}
                  </Heading>
                </Tag>
              </CardHeader>

              <CardBody paddingLeft={8} paddingTop={0}>
                {post.body}
              </CardBody>
            </Card>
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default Treasures;
