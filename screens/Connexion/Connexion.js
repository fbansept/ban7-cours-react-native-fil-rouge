import ConnexionStyles from "./ConnexionStyles";
import AppStyles from "../../AppStyles";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppButton } from "../../components/AppButton/AppButton";
import AppInputEmail from "../../components/AppInputEmail/AppInputEmail";
import AppInputPassword from "../../components/AppInputPassword/AppInputPassword";

import Toast from "react-native-root-toast";
import { useForm } from "react-hook-form";

export default ({ handleLogin }) => {
  const styles = { ...AppStyles(), ...ConnexionStyles() };

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "a@a.com", // à supprimer
      password: "root", // à supprimer
    },
  });

  const onSubmit = (data) => handleLogin(data.email, data.password);

  return (
    <View style={[styles.container, styles.centered, styles.safeArea]}>
      <AppInputEmail
        control={control}
        errors={errors}
        extraRules={{ required: "L'email est obligatoire" }}
      ></AppInputEmail>
      <AppInputPassword
        control={control}
        errors={errors}
        extraRules={{ required: "Le mot de passe est obligatoire" }}
      ></AppInputPassword>

      <AppButton
        text="Connexion"
        icon="sign-in-alt"
        onPress={handleSubmit(onSubmit)}
      ></AppButton>

      <AppButton
        style={{ marginTop: 50 }}
        text="J'ai oublié mon mot de passe"
        type="link"
        onPress={() =>
          Toast.show("Cette fonctionnalité n'a pas encore été implémentée :(", {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          })
        }
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
