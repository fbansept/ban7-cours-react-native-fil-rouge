import { StyleSheet } from "react-native";
import theme from "../../theme";

export default function AppOfferCardStyles() {
  const colors = theme();
  const styles = StyleSheet.create({
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
    pressed: {
      backgroundColor: colors.primaryDarker,
    },
    image: {
      backgroundColor: colors.backgroundColorImage,
    },
  });
  return styles;
}
