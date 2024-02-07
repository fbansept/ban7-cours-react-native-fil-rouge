import { View, StyleSheet } from "react-native";
import { useForm } from "react-hook-form";
import AppInputEmail from "../../components/AppInputEmail/AppInputEmail";
import AppStyles from "../../AppStyles";
import AppInputNewPassword from "../../components/AppInputNewPassword/AppInputNewPassword";
import InscriptionStyles from "./InscriptionStyles";
import { AppButton } from "../../components/AppButton/AppButton";

export default () => {
  const styles = { ...AppStyles(), ...InscriptionStyles() };

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <AppInputEmail control={control} errors={errors}></AppInputEmail>
      <AppInputNewPassword
        control={control}
        errors={errors}
      ></AppInputNewPassword>
      <AppButton text="Valider" onPress={handleSubmit(onSubmit)}></AppButton>
    </View>
  );
};
