import ChercheStyles from "./ProfilStyles";
import AppStyles from "../../AppStyles";
import { Text, View } from "react-native";

export default ({ navigation }) => {
  const styles = { ...AppStyles(), ...ChercheStyles() };

  return (
    <View style={[styles.container, styles.centered]}>
      <Text>Profil</Text>
    </View>
  );
};
