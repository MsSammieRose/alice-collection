import * as React from "react";

import carroll from "../database/carroll";
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

interface CarrollPost {
  id: number;
  slug: string;
  title: string;
  body: string;
}

const typedCarollPosts: CarrollPost[] = carroll;

const Carroll: React.FC = () => {
  return (
    <>
      <Center>
        <Box textAlign="center" margin={10} w="60%">
          <Heading as="h1" size="md" marginBottom={4}>
            Lewis Carroll
          </Heading>
          <Text size="sm">
            Lewis Carroll, born Charles Lutwidge Dodgson in 1832, was a British
            author and mathematician famous for his imaginative children's
            books, Alice's Adventures in Wonderland and Through the
            Looking-Glass. Known for his playful language and quirky characters,
            Carroll's stories have fascinated readers for generations and led to
            numerous adaptations in movies and other media. Besides writing, he
            was also into photography and had a knack for logic and puzzles,
            showing his love for exploring how we see and think about the world.
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
          {typedCarollPosts.map((post) => (
            <Card
              key={post.id}
              variant="outline"
              borderColor="paper"
              backgroundColor="paper"
              maxWidth="340px"
              minHeight="480px"
            >
              <CardHeader>
                <Image
                  borderRadius="5px"
                  boxSize="300px"
                  src={"lc/lc" + post.id + ".jpg"}
                  objectFit="cover"
                  alt={post.title}
                />
                <Tag
                  size="lg"
                  variant="solid"
                  colorScheme="whiteAlpha"
                  marginTop={6}
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

export default Carroll;
