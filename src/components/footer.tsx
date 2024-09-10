import { VStack, Stack, Text, Center, Divider } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <>
      <VStack width="100vw" backgroundColor="paper" marginTop={10}>
        <Stack direction={["column"]} spacing="24px" margin={10}>
          <Center>
            <Divider
              style={{
                borderColor: "grey",
                opacity: 1,
                borderBottomWidth: "4px",
              }}
              maxWidth="800px"
            />
          </Center>
          <Text fontSize="xs">
            This is a personal project created by MsSammieRose{" "}
            <a href="https://github.com/MsSammieRose/alice-collection">
              (GitHub)
            </a>
          </Text>
          <Text fontSize="xs">
            All images and icons are from the public domain or taken by
            MsSammieRose.
            <br />
            All text is from the public domain or written by MsSammieRose.
          </Text>
        </Stack>
      </VStack>
    </>
  );
};
export default Footer;
