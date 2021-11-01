const colors = {
  white: "#fff",
  black: "#282828",
  "red-1": "#FF2F54",
  "red-2": "#E52A4C",
  "green-1": "#10BB87",
  "green-2": "#487B6C",
  "orange-1": "#FFA630",
  "orange-2": "#D87B00",
  "grey-1": "#e5e5e5",
  "grey-2": "#F2F2F2",
  "grey-3": "#B2B2B2",
  "grey-4": "#FAFAFA",
  headline: "linear-gradient(180deg, #4D4D4D 0%, #262626 100%);",
  decorativeIcon: "rgba(0, 0, 0, 0.07)",
};

const fonts = {
  desktop: {
    H1: {
      fontWeight: "600",
      fontSize: 36,
      lineHeight: "44px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
    "H2 Normal": {
      fontWeight: "500",
      fontSize: 24,
      lineHeight: "32px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
    "H2 Bold": {
      fontWeight: "700",
      fontSize: 24,
      lineHeight: "32px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
    H3: {
      fontWeight: "600",
      fontSize: 14,
      lineHeight: "20px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
    P: {
      fontWeight: "400",
      fontSize: 14,
      lineHeight: "20px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
    "P Link": {
      fontWeight: "400",
      fontSize: 14,
      lineHeight: "20px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
      textDecoration: "underline",
    },
    "P Little": {
      fontWeight: "500",
      fontSize: 12,
      lineHeight: "18px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
    "P Little Link": {
      fontWeight: "500",
      fontSize: 12,
      lineHeight: "18px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
      textDecoration: "underline",
    },
    Menu: {
      fontWeight: "500",
      fontSize: 14,
      lineHeight: "20px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
  },
  mobile: {
    H1: {
      fontWeight: "600",
      fontSize: 20,
      lineHeight: "28px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
    "H2 Normal": {
      fontWeight: "500",
      fontSize: 18,
      lineHeight: "28px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
    "H2 Bold": {
      fontWeight: "700",
      fontSize: 18,
      lineHeight: "28px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
    H3: {
      fontWeight: "600",
      fontSize: 12,
      lineHeight: "18px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
    P: {
      fontWeight: "400",
      fontSize: 12,
      lineHeight: "18px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
    Menu: {
      fontWeight: "500",
      fontSize: 12,
      lineHeight: "18px",
      color: colors.black,
      fontFamily: "'Inter', sans-serif",
    },
  },
};

const theme = { colors, fonts };

export default theme;
