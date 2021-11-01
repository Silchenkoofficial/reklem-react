import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import theme from "Constants/theme";

function Button({ type, disabled, iconName, children }) {
  const isPassive = type === "passive";
  //   const bg = "";
  //   const bg = "";
  //   const bg = "";

  return (
    <Box
      display="inline-flex"
      alignItems="center"
      px="30px"
      py="12px"
      fontSize="12px"
      lineHeight="18px"
      fontWeight="semibold"
      borderRadius="10px"
      transition="all 0.2s"
      cursor="pointer"
      verticalAlign="middle"
      bg={
        !disabled
          ? isPassive
            ? theme.colors.white
            : theme.colors["green-1"]
          : theme.colors["grey-2"]
      }
      textColor={
        !disabled
          ? isPassive
            ? theme.colors.black
            : theme.colors.white
          : theme.colors["grey-3"]
      }
      shadow={
        !disabled &&
        (isPassive
          ? "0px 4px 7px rgba(0, 0, 0, 0.15)"
          : "0px 9px 25px -4px rgba(72, 123, 108, 0.5)")
      }
      pointerEvents={disabled && "none"}
      _hover={{
        boxShadow: isPassive ? "none" : "0px 4px 7px rgba(0, 0, 0, 0.15)",
        bgColor: isPassive ? theme.colors["grey-4"] : theme.colors["red-1"],
        color: isPassive && theme.colors["green-1"],
      }}
      _active={{
        boxShadow: "inset 4px 4px 10px -7px rgba(0, 0, 0, 0.25)",
        bgColor: isPassive ? theme.colors["grey-4"] : theme.colors["red-2"],
        color: isPassive ? theme.colors["green-2"] : "rgba(255, 255, 255, 0.8)",
      }}
    >
      {children}
      {iconName && (
        <span
          style={{ fontSize: "16px", marginLeft: 10, lineHeight: "100%" }}
          className={`icon-${iconName}`}
        ></span>
      )}
    </Box>
  );
}

export default Button;

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  iconName: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: "accent",
  disabled: false,
  iconName: "",
  children: "Забыли название кнопки",
};
