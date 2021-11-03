import React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { Dropdown } from "Components";

const App = () => {
  return (
    <ChakraProvider>
      <Box m={2}>
        <Dropdown />
      </Box>
    </ChakraProvider>
  );
};

export default App;
