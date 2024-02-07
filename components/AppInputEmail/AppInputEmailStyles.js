import { StyleSheet } from "react-native";
import theme from "../../theme";

export default function AppInputEmailStyles() {
  const colors = theme();
  const styles = StyleSheet.create({
    label: {
      color: colors.textColor,
    },
    input: {
      color: colors.textColor,
    },
  });
  return styles;
}
