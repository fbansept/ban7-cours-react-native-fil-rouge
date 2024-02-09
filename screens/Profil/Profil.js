import ProfilStyles from "./ProfilStyles";
import AppStyles from "../../AppStyles";
import { Text, View } from "react-native";
import { AppButton } from "../../components/AppButton/AppButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { decode } from "base-64";

function decodeJWT(jwt) {
  try {
    const base64Url = jwt.split(".")[1]; // Récupère le payload du jwt
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/"); // Convertit en base64 standard
    const jsonPayload = decodeURIComponent(
      decode(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Erreur lors du décodage du JWT:", e);
    return null;
  }
}

export default ({ handleLogout }) => {
  const styles = { ...AppStyles(), ...ProfilStyles() };

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    // Récupérer le JWT depuis AsyncStorage
    const fetchJwt = async () => {
      const jwt = await AsyncStorage.getItem("jwt");
      if (jwt) {
        const decoded = decodeJWT(jwt);

        setUserInfo({
          nom: decoded.nom,
          prenom: decoded.prenom,
          email: decoded.email,
        });
      }
    };

    fetchJwt();
  }, []);

  return (
    <View style={[styles.container, styles.centered]}>
      <Text style={styles.text}>Nom: {userInfo.nom}</Text>
      <Text style={styles.text}>Prénom: {userInfo.prenom}</Text>
      <Text style={styles.text}>Email: {userInfo.email}</Text>
      <AppButton text="Déconnexion" onPress={handleLogout} />
    </View>
  );
};
