import { StyleSheet } from "react-native";
import theme from "../../theme";

export default function AppInputSelectStyles() {
  const colors = theme();
  const styles = StyleSheet.create({
    picker: {
      color: colors.textColor,
    },
    item: {
      color: colors.textColor,
    },
  });
  return styles;
}
