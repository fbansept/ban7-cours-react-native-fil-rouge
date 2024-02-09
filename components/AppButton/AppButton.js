import { Pressable } from "react-native";
import AppStyles from "../../AppStyles";
import { Icon, Text } from "@rneui/base";
import { useState } from "react";
import AppButtonStyles from "./AppButtonStyles";
import { View } from "react-native";

export const AppButton = ({
  style,
  onPress,
  text,
  icon,
  iconFamily,
  type = "raised",
}) => {
  const styles = { ...AppStyles(), ...AppButtonStyles() };

  return (
    <Pressable
      onPress={() => onPress()}
      style={({ pressed }) => [
        style,
        styles[type].button,
        pressed && styles.pressed,
      ]}
    >
      <View style={[styles.row, styles.centered]}>
        {icon && (
          <Icon
            name={icon}
            type={iconFamily ? iconFamily : "font-awesome-5"}
            style={{ marginRight: 5 }}
            color={styles[type].text.color}
          />
        )}
        <Text style={styles[type].text}>{text}</Text>
      </View>
    </Pressable>
  );
};
