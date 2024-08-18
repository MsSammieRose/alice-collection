import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Image,
  HStack,
  VStack,
  Box,
  Heading,
  Stack,
} from "@chakra-ui/react";

const Navigation: React.FC = () => {
  return (
    <>
      <VStack width="100vw" backgroundColor="paper">
        <HStack spacing="24px" marginTop={4}>
          <Menu>
            <MenuButton
              margin={2}
              height={3}
              width="100px"
              fontFamily={"heading"}
              _hover={{
                borderBottomColor: "grey",
                borderBottomWidth: "2px",
                fontWeight: "bold",
              }}
            >
              Disney
            </MenuButton>
            <MenuButton
              height={3}
              margin={2}
              width="100px"
              fontFamily={"heading"}
              _hover={{
                borderBottomColor: "grey",
                borderBottomWidth: "2px",
                fontWeight: "bold",
              }}
            >
              Lewis Carrol
            </MenuButton>
            <MenuButton
              height={3}
              margin={2}
              width="100px"
              fontFamily={"heading"}
              _hover={{
                borderBottomColor: "grey",
                borderBottomWidth: "2px",
                fontWeight: "bold",
              }}
            >
              Treasures
            </MenuButton>
          </Menu>
        </HStack>

        <Stack direction={["row"]}>
          <Image
            maxHeight={["150px", "150px", "300px"]}
            maxWidth="fit-content"
            src="/cards.jpg"
            alt="the cards from Alice in Wonderland"
            borderRadius="10px"
            style={{ rotate: "30deg", zIndex: 1 }}
          />

          <Heading
            fontFamily={"heading"}
            fontWeight="normal"
            as="h1"
            fontSize={["2rem", "2rem", "5rem"]}
            textAlign="left"
            marginTop={20}
            maxWidth="400px"
            zIndex={3}
          >
            Wonderland Whimsy
          </Heading>
          <Image
            maxHeight={["100px", "100px", "200px"]}
            maxWidth="fit-content"
            src="/hatter.jpg"
            alt="the tea party from Alice in Wonderland"
            borderRadius="10px"
            style={{ rotate: "-20deg", zIndex: 2 }}
            marginTop={20}
            marginLeft={-20}
          />
        </Stack>
      </VStack>
    </>
  );
};
export default Navigation;
