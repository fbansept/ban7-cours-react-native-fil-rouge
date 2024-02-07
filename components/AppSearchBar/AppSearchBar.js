import { Icon, Input } from "@rneui/base";
import AppStyles from "../../AppStyles";
import AppInputTextStyles from "./AppSearchBarStyles";

export const AppSearchBar = ({
  style,
  onChangeText = () => {},
  onEndEditing = () => {},
}) => {
  const styles = { ...AppStyles(), ...AppInputTextStyles() };

  return (
    <Input
      style={style}
      onChangeText={(value) => onChangeText(value)}
      onEndEditing={(value) => onEndEditing(value)}
      leftIcon={
        <Icon
          style={{ marginLeft: 10 }}
          type="font-awesome-5"
          name="search"
          size={20}
          color={styles.input.color}
        />
      }
      inputContainerStyle={{
        backgroundColor: "#eee",
        borderRadius: 3,
        height: 38,
        borderBottomWidth: 0,
      }}
      containerStyle={{
        margin: 0,
        padding: 0,
        paddingHorizontal: 0,
        paddingVertical: 0,
        marginHorizontal: 0,
        marginVertical: 0,
        height: 38,
      }}
      placeholder="Rechercher une offre"
      labelStyle={styles.label}
      inputStyle={styles.input}
    />
  );
};
