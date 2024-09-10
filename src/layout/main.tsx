import React, { ReactNode } from "react";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
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
        <Footer />
      </VStack>
    </Center>
  );
};

export default MainLayout;
