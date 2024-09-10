import * as React from "react";
import { useState } from "react";
import posts from "../database/posts";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Image,
  Flex,
  Tag,
  Box,
  Divider,
  Center,
  SlideFade,
  RadioGroup,
  Radio,
  Stack,
} from "@chakra-ui/react";

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
  fact: string;
}

const typedPosts: Post[] = posts;

const Article: React.FC = () => {
  const [sortCriteria, setSortCriteria] = useState<string>("year");
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const handleSortChange = (value: string) => {
    setSortCriteria(value);
  };

  const handleCardToggle = (id: number) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  const sortedPosts = [...typedPosts].sort((a, b) => {
    if (sortCriteria === "year") {
      return a.year.localeCompare(b.year);
    } else if (sortCriteria === "price") {
      return parseFloat(a.price) - parseFloat(b.price);
    }
    return 0;
  });

  return (
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
      <Flex justifyContent="center" margin={6}>
        <label htmlFor="sort">
          <Heading as="h3" size="md" marginRight={2}>
            Sort by:
          </Heading>
        </label>
        <RadioGroup
          onChange={handleSortChange}
          value={sortCriteria}
          fontFamily={"heading"}
          colorScheme="gray"
        >
          <Stack direction="row" marginTop="2px">
            <Radio value="year">Year</Radio>
            <Radio value="price">Purchase Price</Radio>
          </Stack>
        </RadioGroup>
      </Flex>

      <Flex
        gap="4"
        marginTop={4}
        wrap="wrap"
        alignItems="center"
        justifyContent="center"
      >
        {sortedPosts.map((post) => (
          <Card
            onClick={() => handleCardToggle(post.id)}
            key={post.id}
            variant="outline"
            borderColor="paper"
            backgroundColor="paper"
            maxWidth="340px"
            minHeight="550px"
            _hover={{
              border: "2px dashed",
              backgroundColor: "#FFF",
              borderColor: "paper",
              cursor: "pointer",
            }}
          >
            <CardHeader>
              <Image
                borderRadius="5px"
                boxSize="300px"
                src={"alice/" + post.id + ".jpg"}
                objectFit="cover"
                alt={post.publisher}
              />
              <Tag
                size="xs"
                variant="solid"
                colorScheme="blackAlpha"
                marginTop="-25px"
                marginLeft="10px"
                paddingLeft={1}
                paddingRight={1}
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
            <SlideFade in={openCardId !== post.id}>
              <CardBody paddingLeft={8}>
                <p>
                  Illustrated by <strong>{post.illustrator}</strong>
                </p>
                <p>
                  Purchased for ${post.price}CAD from {post.purchased} in{" "}
                  {post.condition} Condition
                </p>
              </CardBody>
            </SlideFade>
            <SlideFade in={openCardId === post.id}>
              <CardBody paddingLeft={8} marginTop="-100px">
                <p>"{post.fact}"</p>
              </CardBody>
            </SlideFade>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};

export default Article;
