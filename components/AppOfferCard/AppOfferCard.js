import { Pressable, View } from "react-native";
import AppStyles from "../../AppStyles";
import AppOfferCardStyles from "./AppOfferCardStyles";
import { useState } from "react";
import { Image, Text } from "@rneui/base";

export const AppOfferCard = ({ style, uri, titre, etat, prix, onPress }) => {
  const styles = { ...AppStyles(), ...AppOfferCardStyles() };

  const [elevation, setElevation] = useState(2);

  const handlePressIn = () => {
    setElevation(8);
  };

  const handlePressOut = () => {
    setElevation(2);
  };

  return (
    <Pressable
      style={[style, { width: 150, height: 280 }]}
    >
      <View
        style={{
          width: 150,
          height: 200,
          backgroundColor: styles.image.backgroundColor,
        }}
      >
        <Image
          source={{ uri: uri }}
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "contain",
          }} // Ajustement pour adapter l'image
        />
      </View>
      <Text>{titre}</Text>
      <Text>{etat}</Text>
      <Text>{prix}€</Text>
    </Pressable>
  );
};
