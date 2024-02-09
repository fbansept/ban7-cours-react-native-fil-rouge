import AccueilStyles from "./AccueilStyles";
import AppStyles from "../../AppStyles";
import { FlatList, View } from "react-native";
import { AppSearchBar } from "../../components/AppSearchBar/AppSearchBar";
import { Text } from "@rneui/base";
import { AppOfferCard } from "../../components/AppOfferCard/AppOfferCard";
import { useEffect, useState } from "react";

export default () => {
  const styles = { ...AppStyles(), ...AccueilStyles() };

  const handleEndEditing = (value) => console.log(value);

  // const offres = [
  //   {
  //     id: 1,
  //     titre: "Première offre",
  //     descrition: "Description Première offre",
  //     etat: "neuf",
  //     prix: "99",
  //     photos: "https://placehold.co/300x400/png",
  //   },
  //   {
  //     id: 2,
  //     titre: "Deuxième offre",
  //     descrition: "Description Deuxième offre",
  //     etat: "Bon etat",
  //     prix: "77,00",
  //     photos: "https://placehold.co/600x300/png",
  //   },
  //   {
  //     id: 3,
  //     titre: "Troisième offre",
  //     descrition: "Description Troisième offre",
  //     etat: "Mauvais état",
  //     prix: "1,00",
  //     photos: "https://placehold.co/300x600/png",
  //   },
  //   {
  //     id: 4,
  //     titre: "Quatrième offre",
  //     descrition: "Description Quatrième offre",
  //     etat: "neuf",
  //     prix: "9,99",
  //     photos: "https://placehold.co/50x50/png",
  //   },
  // ];

  const [offres, setOffres] = useState([]);

  async function fetchOffres() {
    try {
      const response = await fetch("http://192.168.43.137:4000/offres");
      if (!response.ok) {
        throw new Error("La récupération des offres a échoué");
      }
      const offres = await response.json();
      return offres;
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchOffres().then(setOffres);
  }, []);

  return (
    <View style={[styles.container, styles.safeArea]}>
      <View style={styles.containerMargin}>
        <AppSearchBar onEndEditing={handleEndEditing}></AppSearchBar>
        <Text h4 style={{ marginTop: 10, marginBottom: 10 }}>
          Derniers Ajouts
        </Text>

        <FlatList
          data={offres}
          horizontal={true}
          renderItem={({ item }) => (
            <AppOfferCard
              style={{ marginRight: 10 }}
              titre={item.titre}
              etat={item.etat}
              prix={item.prix}
              uri={item.photos[0]}
            ></AppOfferCard>
          )}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
};
