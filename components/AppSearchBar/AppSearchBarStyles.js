import { StyleSheet } from "react-native";
import theme from "../../theme";

export default function AppInputTextStyles() {
  const colors = theme();
  const styles = StyleSheet.create({
    label: {
      color: colors.textColor,
    },
    input: {
      color: colors.grey,
      borderWidth: 0,
      margin: 0,
      padding: 0,
    },
    inputMultiline: {
      color: colors.textColor,
      textAlignVertical: "top",
    },
  });
  return styles;
}
