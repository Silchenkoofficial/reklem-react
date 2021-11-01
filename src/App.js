import React from "react";
import { ChakraProvider, Box, HStack, VStack } from "@chakra-ui/react";
import theme from "./Constants/theme";

const App = () => {
  return (
    <ChakraProvider>
      <VStack>
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
        <HStack spacing={2} align="flex-end">
          <Box
            style={{
              ...theme.fonts.mobile.H1,
            }}
          >
            Hello
          </Box>
          <Box
            style={{
              ...theme.fonts.mobile["H2 Normal"],
            }}
          >
            Hello
          </Box>
          <Box
            style={{
              ...theme.fonts.mobile["H2 Bold"],
            }}
          >
            Hello
          </Box>
          <Box
            style={{
              ...theme.fonts.mobile.H3,
            }}
          >
            Hello
          </Box>
          <Box
            style={{
              ...theme.fonts.mobile.P,
            }}
          >
            Hello
          </Box>
          <Box
            style={{
              ...theme.fonts.mobile.Menu,
            }}
          >
            Hello
            <i className="icon-Drop" />
          </Box>
        </HStack>
      </VStack>
    </ChakraProvider>
  );
};

export default App;
