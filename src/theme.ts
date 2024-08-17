import { extendTheme } from "@chakra-ui/react";
import "@fontsource/goudy-bookletter-1911";

const theme = extendTheme({
  colors: {
    paper: "#ebe4de",
    ink: "#004aad",
    border: "#5e17eb",
  },
  fonts: {
    heading: `'Goudy Bookletter 1911', sans-serif`,
    body: `'Tahoma', sans-serif`,
  },
});

export default theme;
