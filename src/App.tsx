import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./layout/main";
import Article from "./views/article";
import theme from "./theme";
import Intro from "./views/intro";
import "@fontsource/goudy-bookletter-1911/400.css";

export const App = () => (
  <ChakraProvider theme={theme}>
    <MainLayout>
      <Intro />
      <Article />
    </MainLayout>
  </ChakraProvider>
);
