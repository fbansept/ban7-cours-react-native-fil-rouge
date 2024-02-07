import { Controller } from "react-hook-form";
import AppStyles from "../../AppStyles";
import AppInputNewPasswordStyles from "./AppInputNewPasswordStyles";
import { useState } from "react";
import { Icon, Text } from "@rneui/base";
import { View } from "react-native";
import { Input } from "@rneui/themed";

export default AppInputNewPassword = ({ control, errors }) => {
  const styles = { ...AppStyles(), ...AppInputNewPasswordStyles() };

  const [passwordValidity, setPasswordValidity] = useState({
    minLength: false,
    hasLowercase: false,
    hasUppercase: false,
  });

  const Rule = ({ text, valid }) => {
    return (
      <View style={styles.errorContainer}>
        <Icon
          name={valid ? "checkbox-marked" : "alert-circle-outline"}
          type="material-community"
          color={valid ? styles.valid.color : styles.invalid.color}
        />
        <Text style={[styles.errorText, valid ? styles.valid : styles.invalid]}>
          {text}
        </Text>
      </View>
    );
  };

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <>
          <Input
            label="Mot de passe"
            style={styles.input}
            onBlur={onBlur}
            secureTextEntry={true}
            onChangeText={(text) => {
              onChange(text);
              setPasswordValidity({
                minLength: text.length >= 8,
                hasLowercase: /[a-z]/.test(text),
                hasUppercase: /[A-Z]/.test(text),
              });
            }}
            value={value}
          />
          <Rule
            text="Longueur minimale de 8"
            valid={passwordValidity.minLength}
          ></Rule>
          <Rule
            text="Au moins une lettre minuscule"
            valid={passwordValidity.hasLowercase}
          ></Rule>
          <Rule
            text="Au moins une lettre majuscule"
            valid={passwordValidity.hasUppercase}
          ></Rule>
        </>
      )}
      name="password"
      rules={{
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        },
      }}
      defaultValue=""
    />
  );
};
