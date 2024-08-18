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
              Illustrators
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
              Artists
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
