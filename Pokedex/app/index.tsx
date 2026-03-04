import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

export default function Index() {

  const [pokemons, setPokemons] = useState([])


useEffect(() => {
  const fetchPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=40");
      const data = await response.json();
      setPokemons(data.results);
    } catch (error) {
      console.log(error);
    }
  };
 fetchPokemon();
}, [])


  return (
    <ScrollView>

      <Text>Pokedex</Text>

      {pokemons.map((pokemon) => (
        <View key={pokemon.name}>
          {pokemon.name}
          </View>
        ))}

    </ScrollView>
  );
}
