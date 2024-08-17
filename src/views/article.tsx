import * as React from "react";
import posts from "../database/posts";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Flex,
  Tag,
} from "@chakra-ui/react";

// Define the Section interface
interface Section {
  id: number;
  title: string;
  content: string;
}

// Define the Post interface
interface Post {
  id: number;
  year: string;
  publisher: string;
  printed_country: string;
  illustrator: string;
  ISBN: string;
  price: string;
  purchased: string;
  condition: string;
}

// Type the posts array
const typedPosts: Post[] = posts;

const Article: React.FC = () => {
  return (
    <Flex
      gap="4"
      marginTop={4}
      wrap="wrap"
      alignItems="center"
      justifyContent="center"
    >
      {typedPosts.map((post) => (
        <Card
          key={post.id}
          variant="outline"
          borderColor="paper"
          backgroundColor="paper"
          maxWidth="340px"
          minHeight="550px"
        >
          <CardHeader>
            <Image
              borderRadius="5px"
              boxSize="300px"
              src={"/" + post.id + ".jpg"}
              objectFit="cover"
              alt={post.publisher}
            />
            <Tag
              size="xs"
              variant="solid"
              colorScheme="blackAlpha"
              marginTop="-20px"
            >
              ISBN {post.ISBN}
            </Tag>
            <Tag
              size="lg"
              variant="solid"
              colorScheme="whiteAlpha"
              marginTop={2}
            >
              <Heading size="md" color="black" marginBottom={0}>
                {post.year + ": " + post.publisher}
              </Heading>
            </Tag>
          </CardHeader>
          <CardBody paddingLeft={8}>
            <p>
              Illustrated by <strong>{post.illustrator}</strong>
            </p>
            <p>
              Purchased for ${post.price}CAD from {post.purchased} in{" "}
              {post.condition} Condition
            </p>
          </CardBody>
        </Card>
      ))}
    </Flex>
  );
};

export default Article;
