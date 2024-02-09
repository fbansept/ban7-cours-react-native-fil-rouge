import { Controller } from "react-hook-form";
import AppStyles from "../../AppStyles";
import AppInputPasswordStyles from "./AppInputPasswordStyles";
import { Input } from "@rneui/themed";

export default AppInputPassword = ({ control, errors, extraRules = [] }) => {
  const styles = { ...AppStyles(), ...AppInputPasswordStyles() };

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Input
            label="Mot de passe"
            style={styles.input}
            secureTextEntry={true}
            onChangeText={(text) => {
              onChange(text);
            }}
            value={value}
            errorStyle={{ color: "red" }}
            errorMessage={errors.password ? errors.password.message : ""}
          />
        </>
      )}
      rules={extraRules}
      name="password"
      defaultValue=""
    />
  );
};
