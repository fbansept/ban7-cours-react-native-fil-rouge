import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppStyles from "./AppStyles";
import "react-native-gesture-handler";
import { Icon } from "@rneui/base";
import Accueil from "./screens/Accueil/Accueil";
import Message from "./screens/Message/Message";
import Vendre from "./screens/Vendre/Vendre";
import Profil from "./screens/Profil/Profil";
import { createStackNavigator } from "@react-navigation/stack";
import Connexion from "./screens/Connexion/Connexion";

export default () => {
  const App = () => {
    const styles = AppStyles();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async () => {
      try {
        setIsLoggedIn(true);
        console.log("Connexion réussie !");
      } catch (error) {
        console.error("Erreur lors de la connexion :", error);
      }
    };

    const handleLogout = () => {
      setIsLoggedIn(false);
    };

    const NavigationPrincipale = createBottomTabNavigator();

    const NavigationConnexion = createStackNavigator();

    const EcransConnexion = () => (
      <NavigationConnexion.Navigator>
        <NavigationConnexion.Screen
          name="Connexion"
          component={Connexion}
          options={{ headerShown: false }}
        />
      </NavigationConnexion.Navigator>
    );

    const EcransPrincipaux = () => (
      <NavigationPrincipale.Navigator>
        <NavigationPrincipale.Screen
          name="Accueil"
          component={Accueil}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
            tabBarActiveTintColor: styles.menu.iconActiveColor,
            tabBarInactiveTintColor: styles.menu.iconMenuInactiveColor,
          }}
        />
        <NavigationPrincipale.Screen
          name="Vendre"
          component={Vendre}
          options={{
            headerShown: false,
            tabBarLabel: "Vendre",
            tabBarIcon: ({ color }) => (
              <Icon name="euro" type="" color={color} size={26} />
            ),
            tabBarActiveTintColor: styles.menu.iconActiveColor,
            tabBarInactiveTintColor: styles.menu.iconMenuInactiveColor,
          }}
        />
        <NavigationPrincipale.Screen
          name="Messages"
          component={Message}
          options={{
            headerShown: false,
            tabBarLabel: "Messages",
            tabBarIcon: ({ color }) => (
              <Icon name="chat" color={color} size={26} />
            ),
            tabBarActiveTintColor: styles.menu.iconActiveColor,
            tabBarInactiveTintColor: styles.menu.iconMenuInactiveColor,
          }}
        />

        <NavigationPrincipale.Screen
          name="profil"
          component={Profil}
          options={{
            headerShown: false,
            tabBarLabel: "Profil",
            tabBarIcon: ({ color }) => (
              <Icon name="face" color={color} size={26} />
            ),
            tabBarActiveTintColor: styles.menu.iconActiveColor,
            tabBarInactiveTintColor: styles.menu.iconMenuInactiveColor,
          }}
        />
      </NavigationPrincipale.Navigator>
    );

    return (
      <>
        {isLoggedIn ? <EcransPrincipaux /> : <EcransConnexion />}
      </>
    );
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <App></App>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
