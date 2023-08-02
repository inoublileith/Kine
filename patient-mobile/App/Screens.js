import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

import { AuthContext } from "./context";

import Login from "./components/LoginForm";
import Register from "./components/RegisterForm";
import OnBoarding from "./components/OnBoarding";
import Commander from "./components/Commander";
import Seance from './components/Seance'

// import { useForm } from "react-hook-form";
// import { Ionicons } from "@expo/vector-icons";

// import { Controller } from "react-hook-form";
import Doctor from './components/Identification'
import Rendezvous from './components/Rendez'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  label: {
    color: "black",
    marginLeft: 10,

    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    height: 40,
    backgroundColor: "#FD4659",
    borderRadius: 4,
    width: 100,
    borderRadius: 5,
  },
  buttonVerif: {
    marginTop: 20,
    height: 40,
    backgroundColor: "#32bf84",
    borderRadius: 4,
    width: 100,
    borderRadius: 5,
  },
  Listitem: {
    marginTop: 10,
    borderRadius: 4,
    width: 350,
    // justifyContent: "lef",
    // alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 30,
  },
  title: {
    color: "#222",
    fontSize: 15,
    fontWeight: "bold",
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Verifieroriginalite = ({ navigation }) => (
  <ScreenContainer>
    <Doctor navigation={navigation} />
  </ScreenContainer>
)

export const Details = ({ route }) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.nom && <Text>{route.params.nom}</Text>}
  </ScreenContainer>
)

export const Search = ({ navigation }) => (
  <ScreenContainer>
    <Text>commander</Text>
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Explore = ({ navigation }) => (
  <ScreenContainer>
    <Rendezvous navigation={navigation} />
  </ScreenContainer>
)

export const RecScreen = ({ navigation }) => (
  <ScreenContainer>
    <Seance navigation={navigation} />
  </ScreenContainer>
)

export const CommandeScreen = ({route}) => (
  <ScreenContainer>
    <Commander route={route}/>
  </ScreenContainer>
);

export const Profile = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Sign Out" onPress={() => signOut()} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const OnBoard = ({ navigation }) => (
  <ScreenContainer>
    <OnBoarding navigation={navigation} />
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Login navigation={navigation} />
    </ScreenContainer>
  );
};

export const CreateAccount = ({ navigation }) => {
  const { signUp } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Register navigation={navigation} />
    </ScreenContainer>
  );
};
