import React, { useState, useEffect } from "react";
import socketio from "socket.io-client";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Platform,
  StyleSheet,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

import SpotList from "../components/SpotList";

import logo from "../assets/logo.png";

export default function Dashboard({ navigation }) {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("user").then(user => {
      const socket = socketio("http://172.16.102.68:3333", {
        query: { user }
      });

      socket.on("booking_response", booking => {
        Alert.alert(
          `Sua reserva em ${booking.spot.company} em ${booking.date} foi ${
            booking.approved ? "APROVADA" : "REJEITADA"
          }!`
        );
      });
    });
  }, []);

  useEffect(() => {
    AsyncStorage.getItem("techs").then(storegeTechs => {
      const techsArray = storegeTechs.split(",").map(tech => tech.trim());

      setTechs(techsArray);
    });
  }, []);

  async function handleSignout() {
    await AsyncStorage.removeItem("user");

    navigation.navigate("Login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleSignout}>
        <Image style={styles.logo} source={logo} />
      </TouchableOpacity>

      <ScrollView>
        {techs.map(tech => (
          <SpotList key={tech} tech={tech} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0
  },

  logo: {
    height: 32,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 10
  }
});
