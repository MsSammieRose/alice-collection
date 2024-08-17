import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";

const Navigation: React.FC = () => {
  return (
    <>
      <VStack width="100vw" backgroundColor="paper">
        <HStack spacing="24px" marginTop={4}>
          <Menu>
            <MenuButton
              _hover={{
                borderBottomColor: "black",
                borderBottomWidth: "2px",
                fontWeight: "bold",
              }}
            >
              Illustrators
            </MenuButton>
            <MenuButton
              _hover={{
                borderBottomColor: "black",
                borderBottomWidth: "2px",
                fontWeight: "bold",
              }}
            >
              Artists
            </MenuButton>
            <MenuButton
              _hover={{
                borderBottomColor: "black",
                borderBottomWidth: "2px",
                fontWeight: "bold",
              }}
            >
              Publishers
            </MenuButton>
          </Menu>
        </HStack>

        <Image
          maxWidth="1000px"
          src="/large-header.png"
          alt="Wonderland Whimsy"
          border="none"
        />
      </VStack>
    </>
  );
};
export default Navigation;
