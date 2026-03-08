import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


    interface PokemonDetails{
        name: string;
        imageFront: string;
        imageBack: string;
        types: {
            type: {
                name: string
            }
        };
        height: number;
        weight: number;
        abilities: { ability: { name: string }[] };
        stats: {
            base_stats: number;
            stat: { name: string }
        }[];
    }

export default function Index() {

    const { name } = useLocalSearchParams<{ name: string }>();
    const [pokemon, setPokemons] = useState<PokemonDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if (!name) return;
        const fetchPokemonDetails = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch pokeon details");

                }
                const data = await response.json();
                const mapped: PokemonDetails = {
                    name: data.name,
                    imageFront: data.sprites.front_default,
                    imageBack: data.sprites.back_default,
                    types: data.types,
                    height: data.height,
                    weight: data.weight,
                    abilities: data.abilities,
                    stats: data.stats,
                };

                setPokemons(mapped);

            }
            catch (err: any) {
                setError(err.message ?? "Unknown error");
            } finally {
                setLoading(false);
            }
        };
        fetchPokemonDetails();
    }, [name]);


  return (
    <ScrollView
      contentContainerStyle={{
        gap: 10,
        padding: 8
      }}
      >
          <Text></Text>
          {pokemon && ( //erro ako jo nije fetch prošaop da ne bude sve blank
            <View>
              <Image
            source={{ uri: pokemon.imageFront }}
            style={{ width: 200, height: 200 }}
          />
            </View>
          )}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
})
