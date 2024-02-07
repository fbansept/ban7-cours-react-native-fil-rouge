import { View } from "react-native";
import AppStyles from "../../AppStyles";
import AppInputCalendarStyles from "../AppInputCalendarStyles";
import { Icon, Text } from "@rneui/base";
import { DateTimePickerModal } from "@react-native-community/datetimepicker";
import { useState } from "react";

export const AppInputCalendar = ({ onChange, value }) => {
  const styles = { ...AppStyles(), ...AppInputCalendarStyles() };

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  return (
    <>
      <View style={styles.datePicker}>
        <Text style={{ marginRight: 10 }}>
          {value ? value.toLocaleDateString() : ""}
        </Text>
        <Icon
          name="calendar"
          type="font-awesome"
          onPress={() => setDatePickerVisible(true)}
        />
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        date={value}
        onConfirm={(dateSelectionne) => {
          onChange(dateSelectionne);
          setTimeout(() => setDatePickerVisible(false), 0);
        }}
        onCancel={() => setDatePickerVisible(false)}
      />
    </>
  );
};
