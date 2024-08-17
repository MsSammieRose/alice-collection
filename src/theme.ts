import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    paper: "#ebe4de",
    ink: "#004aad",
    border: "#5e17eb",
  },
  fonts: {
    heading: `'Georgia', sans-serif`,
    body: `'Tahoma', sans-serif`,
  },
});

export default theme;
