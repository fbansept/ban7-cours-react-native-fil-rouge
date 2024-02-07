import { Controller } from "react-hook-form";
import AppStyles from "../../AppStyles";
import AppInputSelectStyles from "./AppInputSelectStyles";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";
import { Text } from "@rneui/base";
import { useEffect } from "react";

export const AppInputSelect = ({
  label,
  values,
  defaultValue,
  control,
  name,
}) => {
  const styles = { ...AppStyles(), ...AppInputSelectStyles() };

  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>{label}</Text>
            <View style={{ flexDirection: "row" }}>
              <Picker
                style={{ flex: 1, color: "white" }}
                selectedValue={value}
                onValueChange={onChange}
                itemStyle={styles.item}
              >
                {values.map((item, index) => (
                  <Picker.Item
                    key={index}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>
      )}
      defaultValue={defaultValue}
      name={name}
    />
  );
};
