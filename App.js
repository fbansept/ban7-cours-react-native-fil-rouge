import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { useEffect, useRef, useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
import Inscription from "./screens/Inscription/Inscription";

import Toast from "react-native-root-toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default () => {
  const navigationRef = useRef(null);

  const App = () => {
    const styles = AppStyles();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const verifyJwt = async () => {
      try {
        const jwt = await AsyncStorage.getItem("jwt");
        if (jwt !== null) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.log("Erreur lors de la vérification du jwt : ", error);
        setIsLoggedIn(false);
      }
    };

    useEffect(() => {
      verifyJwt();
    }, []);

    const handleLogin = async (email, password) => {
      try {
        const response = await fetch("http://192.168.43.137:4000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (!response.ok) {
          Toast.show("Erreur de connexion", {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
        } else {
          Toast.show("Vous êtes connecté", {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
        }

        const { jwt } = await response.json();
        await AsyncStorage.setItem("jwt", jwt);
        setIsLoggedIn(true);
      } catch (error) {
        console.log(error);
        Toast.show("Erreur ", {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
      }
    };

    const NavigationPrincipale = createBottomTabNavigator();

    const NavigationConnexion = createStackNavigator();

    const handleLogout = async () => {
      setIsLoggedIn(false);
      await AsyncStorage.removeItem("jwt");
      navigationRef.current.reset({
        index: 0,
        routes: [{ name: "Connexion" }],
      });
    };

    const ConnexionScreen = () => (
      <Connexion handleLogin={handleLogin}></Connexion>
    );

    const ProfilScreen = () => <Profil handleLogout={handleLogout}></Profil>;

    const EcransConnexion = () => (
      <NavigationConnexion.Navigator>
        <NavigationConnexion.Screen
          name="Connexion"
          component={ConnexionScreen}
          options={{ headerShown: false }}
        />
        <NavigationConnexion.Screen
          name="Inscription"
          component={Inscription}
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
          component={ProfilScreen}
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

    return <>{isLoggedIn ? <EcransPrincipaux /> : <EcransConnexion />}</>;
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <StatusBar style="auto" />
        <App></App>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
