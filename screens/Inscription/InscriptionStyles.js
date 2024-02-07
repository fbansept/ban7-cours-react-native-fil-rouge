import { StyleSheet } from "react-native";
import theme from "../../theme";

export default InscriptionStyles = () => {
  const colors = theme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding: 20,
    },
    datePicker: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
    },
    datePickerContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      color: "#86939e",
      fontWeight: "bold",
      marginBottom: 5,
      marginLeft: 10,
    },
  });
  return styles;
};
