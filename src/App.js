import React from "react";
import { ChakraProvider, Box, HStack } from "@chakra-ui/react";
import theme from "./Constants/theme";

const App = () => {
  return (
    <ChakraProvider>
      <HStack spacing={2} align="flex-end">
        <Box
          style={{
            ...theme.fonts.desktop.H1,
          }}
        >
          Hello
        </Box>
        <Box
          style={{
            ...theme.fonts.desktop["H2 Normal"],
          }}
        >
          Hello
        </Box>
        <Box
          style={{
            ...theme.fonts.desktop["H2 Bold"],
          }}
        >
          Hello
        </Box>
        <Box
          style={{
            ...theme.fonts.desktop.H3,
          }}
        >
          Hello
        </Box>
        <Box
          style={{
            ...theme.fonts.desktop.P,
          }}
        >
          Hello
        </Box>
        <Box
          style={{
            ...theme.fonts.desktop["P Link"],
          }}
        >
          Hello
        </Box>
        <Box
          style={{
            ...theme.fonts.desktop["P Little"],
          }}
        >
          Hello
        </Box>
        <Box
          style={{
            ...theme.fonts.desktop["P Little Link"],
          }}
        >
          Hello
        </Box>
        <Box
          style={{
            ...theme.fonts.desktop.Menu,
          }}
        >
          Hello
        </Box>
      </HStack>
    </ChakraProvider>
  );
};

export default App;
