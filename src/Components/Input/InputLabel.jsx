import React from "react";
import { Box } from "@chakra-ui/react";
import theme from "Constants/theme";

function InputLabel({ children }) {
  return (
    <Box
      style={{
        ...theme.fonts.desktop["P Little"],
      }}
      mb="10px"
    >
      {children}
    </Box>
  );
}

export default InputLabel;
