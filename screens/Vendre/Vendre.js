import { View } from "react-native";
import { useForm } from "react-hook-form";
import AppStyles from "../../AppStyles";
import VendreStyles from "./VendreStyles";
import { AppInputText } from "../../components/AppInputText/AppInputText";
import { AppInputSelect } from "../../components/AppInputSelect/AppInputSelect";
import { AppButton } from "../../components/AppButton/AppButton";

export default () => {
  const styles = { ...AppStyles(), ...VendreStyles() };

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (offre) => {
    console.log(offre);
    fetch("http://192.168.43.137:4000/offre", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(offre),
    })
      .then((reponse) => reponse.json())
      .then((offre) => console.log(offre));
  };

  const choix = [
    { label: "Mauvais état", value: 1 },
    { label: "Bon état", value: 2 },
    { label: "Comme neuf", value: 3 },
  ];

  return (
    <View style={[styles.container, styles.centered]}>
      <AppInputText
        control={control}
        errors={errors}
        label="Titre"
        errorMessage="Ce champ est requis"
        rules={{ required: true }}
        name="titre"
      ></AppInputText>
      <AppInputText
        control={control}
        label="Description"
        name="description"
        multiline
      ></AppInputText>
      <AppInputSelect
        control={control}
        label="Etat"
        name="etat"
        defaultValue={1}
        values={choix}
      ></AppInputSelect>
      <AppInputText
        control={control}
        inputMode="decimal"
        label="Prix"
        name="prix"
        errors={errors}
        errorMessage="Ce champ est requis"
        rules={{ required: true }}
      ></AppInputText>

      <AppButton text="Ajouter l'offre" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
