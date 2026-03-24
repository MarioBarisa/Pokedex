import { Text, ScrollView, Image, StyleSheet, View } from "react-native";
import { useFavorites } from "@/context/favorites";
import { Link } from "expo-router";


export default function FavoritesScreen() {

  const { favorites } = useFavorites();


  return (
    <ScrollView>
        {/*<Text>Settings</Text>*/}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});
