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
  const menuItems = ["Disney", "Lewis Carrol", "Treasures"];
  return (
    <>
      <VStack width="100vw" backgroundColor="paper">
        <Stack direction={["column", "row"]} spacing="24px" marginTop={4}>
          <Menu>
            {menuItems.map((item) => (
              <MenuButton
                height={[2, 3]}
                margin={[0, 2]}
                width="100px"
                fontFamily={"heading"}
                _hover={{
                  fontWeight: "bold",
                }}
                key={item}
              >
                {item}
              </MenuButton>
            ))}
          </Menu>
        </Stack>

        <Stack direction={["row"]}>
          <Image
            maxHeight={["150px", "150px", "300px"]}
            maxWidth="fit-content"
            src="/cards.jpg"
            alt="the cards from Alice in Wonderland"
            borderRadius="10px"
            border="4px solid"
            borderColor="#f0e5d1"
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
            border="4px solid"
            borderColor="#f0e5d1"
            marginTop={20}
            marginLeft={-20}
          />
        </Stack>
      </VStack>
    </>
  );
};
export default Navigation;
