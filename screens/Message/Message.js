import { View } from "react-native";
import { useForm } from "react-hook-form";
import AppStyles from "../../AppStyles";
import MessageStyles from "./MessageStyles";
import { AppInputText } from "../../components/AppInputText/AppInputText";
import { AppInputSelect } from "../../components/AppInputSelect/AppInputSelect";
import { AppButton } from "../../components/AppButton/AppButton";

export default () => {
  const styles = { ...AppStyles(), ...MessageStyles() };

  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  return (
    <View style={[styles.container, styles.centered]}>


  
    </View>
  );
};
