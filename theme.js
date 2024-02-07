import { useColorScheme } from "react-native";

const colors = {
  primary: "#467386",
  primaryDarker: "#27566B",
  accent: "#D5A26A",
  warn: "#A7373F",
  white: "#fff",
  black: "#000",
  grey: "#555",
  greyLight: "#eee",
  greyDark: "#333",
};

const themeColors = {
  light: {
    backgroundColorApp: colors.white,
    backgroundColorImage: colors.greyLight,
    textColor: colors.black,
  },
  dark: {
    backgroundColorApp: "#222",
    backgroundColorImage: colors.greyDark,
    textColor: colors.white,
  },
};

export default () => {
  const colorScheme = themeColors[useColorScheme()];
  return { ...colors, ...colorScheme };
};
