import * as React from "react";

import disney from "../database/disney";
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

interface DisneyPost {
  id: number;
  slug: string;
  title: string;
  body: string;
}

const typedDisneyPosts: DisneyPost[] = disney;

const Disney: React.FC = () => {
  return (
    <>
      <Center>
        <Box textAlign="center" margin={8}>
          <Heading as="h1" size="md" marginBottom={4}>
            Disney released several adaptations of Alice in Wonderland.
          </Heading>
          <Text size="sm">
            Alice in Wonderland (1951) - The classic animated feature.
          </Text>
          <Text size="sm">
            Alice in Wonderland (2010) - Directed by Tim Burton, this film is a
            fantastical reimagining of the classic story.
          </Text>
          <Text size="sm">
            Alice Through the Looking Glass (2016) - A sequel to Burton's 2010
            film, directed by James Bobin.
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
          {typedDisneyPosts.map((post) => (
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
                  src={"disney/dis" + post.id + ".jpg"}
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

export default Disney;
