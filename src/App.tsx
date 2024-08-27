import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/main";
import Article from "./views/article";
import theme from "./theme";
import Intro from "./views/intro";
import "@fontsource/goudy-bookletter-1911/400.css";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <MainLayout>
        <Routes>
          <Route path="" element={<Intro />} />
          <Route path="/article" element={<Article />} />
        </Routes>
      </MainLayout>
    </Router>
  </ChakraProvider>
);
