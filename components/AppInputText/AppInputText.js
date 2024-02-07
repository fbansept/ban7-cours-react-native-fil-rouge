import { Controller } from "react-hook-form";
import AppStyles from "../../AppStyles";
import AppInputTextStyles from "./AppInputTextStyles";
import { Input } from "@rneui/themed";

export const AppInputText = ({
  label,
  defaultValue,
  rules,
  errorMessage,
  control,
  name,
  errors = {},
  multiline = false,
  numberOfLines = 4,
  inputMode = "text",
}) => {
  const styles = { ...AppStyles(), ...AppInputTextStyles() };

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          style={{margin:0, padding: 0}}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          onBlur={onBlur}
          onChangeText={(value) => onChange(value)}
          value={value}
          label={label}
          inputMode={inputMode}
          labelStyle={styles.label}
          inputStyle={multiline ? styles.inputMultiline : styles.input}
          errorStyle={{ color: "red" }}
          errorMessage={errors[name] ? errorMessage : ""}
        />
      )}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
    />
  );
};
