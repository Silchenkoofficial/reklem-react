import React from "react";
import { Box } from "@chakra-ui/react";
import theme from "Constants/theme";

const ButtonIcon = ({ large, iconName, disabled }) => {
  return (
    <Box
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      shadow={!disabled && "0px 4px 7px rgba(0, 0, 0, 0.15)"}
      w={large ? "54px" : "40px"}
      h={large ? "54px" : "40px"}
      p="10px"
      rounded="10px"
      cursor="pointer"
      transition="background-color 0.2s, box-shadow 0.2s"
      bg={disabled && theme.colors["grey-1"]}
      pointerEvents={disabled && "none"}
      _hover={{
        bgColor: theme.colors.decorativeIcon,
        boxShadow: "none",
      }}
      _active={{
        boxShadow: "inset 4px 4px 10px -7px rgba(0, 0, 0, 0.25)",
      }}
    >
      <i
        className={`icon-${iconName}`}
        style={{ fontSize: large ? 30 : 24 }}
      ></i>
    </Box>
  );
};

export default ButtonIcon;
