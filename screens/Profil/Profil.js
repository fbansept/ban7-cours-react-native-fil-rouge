import ProfilStyles from "./ProfilStyles";
import AppStyles from "../../AppStyles";
import { Text, View } from "react-native";
import { AppButton } from "../../components/AppButton/AppButton";
import { useEffect, useState } from "react";

export default ({ handleLogout }) => {
  const styles = { ...AppStyles(), ...ProfilStyles() };

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {

    const fetchProfil = async () => {
      const response = await fetch("http://192.168.43.137:4000/profil", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (!response.ok) {
        throw new Error("La récupération du profil a échoué");
      }
      const profil = await response.json();

      setUserInfo({
        nom: profil.nom,
        prenom: profil.prenom,
        email: profil.email,
      });
    };

    fetchProfil();
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
