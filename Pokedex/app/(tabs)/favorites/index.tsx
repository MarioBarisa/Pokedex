import { Text, ScrollView, Image, StyleSheet, View } from "react-native";
import { useFavorites } from "@/context/favorites";
import { Link } from "expo-router";


export default function FavoritesScreen() {

  const { favorites } = useFavorites();


  return (
    <ScrollView
      contentContainerStyle={{
        gap: 10,
        padding: 8,
      }}
      contentInsetAdjustmentBehavior="automatic"
      automaticallyAdjustContentInsets={true}
    >
      {favorites.length === 0 ? (
        <Text>You dont have any favorites yet.</Text>
      ) : (
          favorites.map((pokemon) => (
            <Link
              key={pokemon.name}
              href={{pathname: "/details", params: {name: pokemon.name}}}
            >
              <View style={{ alignItems: "center" , width: "100%", backgroundColor: "#E5E5EA", borderRadius: 20, padding:20}}>
              <Image source={{ uri: pokemon.imageFront }} style={{ width: 100, height: 100 }}></Image>
              <Text style={styles.name}>#{ pokemon.id} - {pokemon.name}</Text>
              </View>
            </Link>
          ))
      )}
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
