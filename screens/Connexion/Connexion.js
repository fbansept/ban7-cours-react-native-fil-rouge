import ConnexionStyles from "./ConnexionStyles";
import AppStyles from "../../AppStyles";
import { Button, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppButton } from "../../components/AppButton/AppButton";
import AppInputEmail from "../../components/AppInputEmail/AppInputEmail";
import { AppInputText } from "../../components/AppInputText/AppInputText";
import AppInputPassword from "../../components/AppInputPassword/AppInputPassword";
import { useForm } from "react-hook-form";

export default ({ handleLogin }) => {
  const styles = { ...AppStyles(), ...ConnexionStyles() };

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <View style={[styles.container, styles.centered, styles.safeArea]}>
      <AppInputEmail control={control} errors={errors}></AppInputEmail>
      <AppInputPassword control={control} errors={errors}></AppInputPassword>

      <AppButton
        text="Connexion"
        icon="sign-in-alt"
        onPress={() => handleSubmit((data) => onSubmit(data))}
      ></AppButton>

      <AppButton
        style={{ marginTop: 50 }}
        text="J'ai oublié mon mot de passe"
        type="link"
        onPress={() => navigation.navigate("Inscription")}
      ></AppButton>

      <AppButton
        style={{ marginTop: 100 }}
        text="Inscription"
        type="stroke"
        icon="user-plus"
        onPress={() => navigation.navigate("Inscription")}
      ></AppButton>
    </View>
  );
};
