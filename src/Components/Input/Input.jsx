import React from "react";
import InputLabel from "./InputLabel";
import { Input as InputChakraUI, Box } from "@chakra-ui/react";
import theme from "Constants/theme";

function Input({ label, type, placeholder, disabled }) {
  return (
    <Box>
      <InputLabel>{label}</InputLabel>
      <InputChakraUI
        type={type}
        placeholder={placeholder}
        fontWeight="medium"
        fontSize="12px"
        px="15px"
        py="15px"
        shadow="0px 4px 7px rgba(0, 0, 0, 0.15)"
        _hover={{
          boxShadow: "0px 2px 4px -4px rgba(0, 0, 0, 0.15)",
        }}
        _focus={{
          borderColor: theme.colors["green-1"],
          borderWidth: 1,
        }}
      />
    </Box>
  );
}

export default Input;
