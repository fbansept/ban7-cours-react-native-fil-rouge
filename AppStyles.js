import { StyleSheet } from "react-native";
import theme from "./theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function AppStyles() {
  const colors = theme();
  const insets = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundColor,
    },
    containerMargin: {
      margin: 10,
    },
    safeArea: {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingBottom: insets.bottom,
      paddingRight: insets.right,
    },
    centered: {
      alignItems: "center",
      justifyContent: "center",
    },
    menu: {
      iconActiveColor: colors.primary,
      iconInactiveColor: colors.grey,
    },
    searchBarContainer: {
      backgroundColor: "transparent",
      borderTopWidth: 0,
      borderBottomWidth: 0,
      flex: 1,
      width: "100%",
      justifyContent: "center",
      padding: 0,
      margin: 0,
    },
    label: {
      fontSize: 16,
      color: colors.textColor,
      fontWeight: "bold",
      marginBottom: 5,
      marginLeft: 10,
    },
    row: {
      display: "flex",
      flexDirection: "row",
    },
  });

  return styles;
}
