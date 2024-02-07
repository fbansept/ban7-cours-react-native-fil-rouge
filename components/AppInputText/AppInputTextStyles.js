import { StyleSheet } from "react-native";
import theme from "../../theme";

export default function AppInputTextStyles() {
  const colors = theme();
  const styles = StyleSheet.create({
    label: {
      color: colors.textColor,
    },
    input: {
      color: colors.textColor,
    },
    inputMultiline: {
      color: colors.textColor,
      textAlignVertical: "top",
    },
  });
  return styles;
}
