import {Text, ScrollView, StyleSheet, TextInput, View, Button, Alert} from "react-native";
import { useState } from "react";
import { useFavorites } from "@/context/favorites";
import {name} from "ts-interface-checker";


export default function FavoritesScreen() {

  const { favorites } = useFavorites();
  let [loggedIn, setLoggedIn] = useState(false);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");


  return (

      <ScrollView>
        <Text style={styles.textMain}>{loggedIn ? "Hello, " + username + "!" : "You are not logged in."}</Text>
        {loggedIn && (
            <View>
               <Text style={styles.textBody}>Number of favorites: {favorites.length}</Text>
               <Button
                   title={"Logut"}
                   color={"red"}
                   onPress={()=>{
                     setLoggedIn(false);
                     Alert.alert("Logged out", "You are logged out.")
                   }}/>
            </View>
        )}

        {!loggedIn && (
            <View>
              <Text style={styles.textBodyCenterHiglighted}>Please make an account or log in.</Text>
              <View style={{padding: 15, gap: 8, marginTop: 10}}>
                <TextInput
                    placeholder="Pokedex Username"
                    placeholderTextColor="rgba(60, 60, 67, 0.3)"
                    clearButtonMode="unless-editing"
                    style={styles.systemInput}
                    onChangeText={setUsername}
                />
                <TextInput
                    placeholder="Pokedex Password"
                    placeholderTextColor="rgba(60, 60, 67, 0.3)"
                    clearButtonMode="unless-editing"
                    style={styles.systemInput}
                    onChangeText={setPassword}
                />

                <Button
                    accessibilityLabel="Login button"
                    title={"Login"}
                    onPress={() => {
                      if(password==""){
                        Alert.alert("Missing password", "Please enter a valid password.")
                      }else{
                        setLoggedIn(true);
                      }
                    }}/>

              </View>
            </View>
        )}
      </ScrollView>
  );
}


const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },

  text:{
    fontSize: 20,
    paddingTop: 50,
    paddingBottom: 5,
    fontWeight: "bold",
    textAlign: "center"
  },
    textBody:{
    fontSize: 15,
    padding: 5,
    fontWeight: "600", //semibold == 600
    alignItems: "flex-start"
  },

  textMain:{
    fontSize: 35,
    padding: 15,
    fontWeight: "bold",
    textAlign: "center"
  },

    textBodyCenterHiglighted: {
      fontSize: 15,
      fontWeight: "bold",
      textAlign: "center"
    },

    systemInput: {
      backgroundColor: "rgba(118, 118, 128, 0.12)",
      borderRadius: 10,
      paddingHorizontal: 8,
      paddingVertical: 7,
      fontSize: 17,
      marginHorizontal: 16,
      color: "#000"
    },

});
