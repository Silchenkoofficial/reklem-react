import React from "react";
import { Box } from "@chakra-ui/react";
import theme from "Constants/theme";

const Counter = ({ disabled }) => {
  return (
    <Box
      display="inline-flex"
      shadow={!disabled && "0px 4px 7px rgba(0, 0, 0, 0.15)"}
      rounded="10px"
      overflow="hidden"
      pointerEvents={disabled && "none"}
      opacity={disabled && "0.4"}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="40px"
        h="40px"
        cursor="pointer"
        transition="background-color 0.2s"
        _hover={{
          bgColor: theme.colors["grey-4"],
        }}
        _active={{
          bgColor: theme.colors["grey-4"],
        }}
      >
        -
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="40px"
        h="40px"
        pointerEvents="none"
        style={{ ...theme.fonts.desktop.H3, color: theme.colors["green-1"] }}
      >
        10
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="40px"
        h="40px"
        cursor="pointer"
        transition="background-color 0.2s"
        _hover={{
          bgColor: theme.colors["grey-4"],
        }}
        _active={{
          bgColor: theme.colors["grey-4"],
        }}
      >
        +
      </Box>
    </Box>
  );
};

export default Counter;
