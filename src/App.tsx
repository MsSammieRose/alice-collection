import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main";
import Article from "./views/article";
import theme from "./theme";
import Intro from "./views/intro";
import "@fontsource/goudy-bookletter-1911/400.css";
import Disney from "./views/disney";

export const App = () => (
  <ChakraProvider theme={theme}>
    <HashRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/article" element={<Article />} />
          <Route path="/disney-books" element={<Disney />} />
        </Routes>
      </MainLayout>
    </HashRouter>
  </ChakraProvider>
);
