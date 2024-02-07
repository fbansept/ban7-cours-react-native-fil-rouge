import { StyleSheet } from "react-native";
import theme from "../../theme";

export default function AppInputNewPasswordStyles() {
  const colors = theme();
  const styles = StyleSheet.create({
    valid: {
      color: "green",
    },
    invalid: {
      color: "red",
    },
    errorText: {
      color: "red",
      marginBottom: 10,
      marginStart: 5,
      fontSize: 18,
    },
    errorContainer: {
      flexDirection: "row",
      alignItems: "baseline",
      marginStart: 10,
    },
  });
  return styles;
}
