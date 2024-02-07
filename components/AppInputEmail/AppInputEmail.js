import { Input } from "@rneui/base";
import { Controller } from "react-hook-form";
import AppStyles from "../../AppStyles";
import AppInputEmailStyles from "./AppInputEmailStyles";

export default AppInputEmail = ({ control, errors }) => {
  const styles = { ...AppStyles(), ...AppInputEmailStyles() };

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          keyboardType="email-address"
          value={value}
          label="Email"
          errorStyle={{ color: "red" }}
          errorMessage={
            errors.email ? "Veuillez entrer une adresse email valide." : ""
          }
        />
      )}
      name="email"
      rules={{
        required: true,
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Veuillez entrer une adresse email valide.",
        },
      }}
      defaultValue=""
    />
  );
};
