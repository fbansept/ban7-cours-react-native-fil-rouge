import { StyleSheet } from "react-native";
import theme from "../../theme";

export default function AppButtonStyles() {
  const colors = theme();
  const styles = StyleSheet.create({
    link: {
      button: {
        backgroundColor: "transparent",
      },
      text: {
        color: colors.primary,
      },
    },
    raised: {
      button: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
      },
      text: {
        color: colors.white,
      },
    },
    stroke: {
      button: {
        backgroundColor: "transparent",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        borderColor: colors.primary,
        borderWidth: 3,
      },
      text: {
        color: colors.primary,
      },
    },
    flat: {
      backgroundColor: colors.primary,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 4,
      button: {
        backgroundColor: "transparent",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        border: colors.primary,
      },
      text: {
        color: colors.white,
      },
    },
    pressed: {
      backgroundColor: colors.primaryDarker,
    },
  });
  return styles;
}
