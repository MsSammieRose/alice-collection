import React, { ReactNode } from "react";
import Navigation from "../components/navigation";
import { Center, VStack } from "@chakra-ui/react";
interface MainLayoutProps {
  children: ReactNode;
}

// ebe4de
// 004aad

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Center>
      <VStack>
        <Navigation />
        <main>{children}</main>
      </VStack>

      <footer>{/* Footer content */}</footer>
    </Center>
  );
};

export default MainLayout;
