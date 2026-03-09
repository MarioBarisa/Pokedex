import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


    interface PokemonDetails{
        name: string;
        imageFront: string;
        imageBack: string;
        id: number,
        types: {
            type: {
                name: string
            }
        }[];
        height: number;
        weight: number;
        abilities: { ability: { name: string }}[];
        stats: {
            base_stat: number;
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
                    id: data.id,
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

    const colorByType = {
            grass: "lightgreen",
            water: "lightblue",
            fire: "#ff6666",
            bug: "lightgreen",
            normal: "gray",
            electric: "yellow",
            ground: "brown",
            poison: "purple",
            fairy: "pink"
            }

  return (
    <ScrollView
      contentContainerStyle={{
        gap: 10,
        padding: 8
      }}
      >
          <Text></Text>
          {pokemon && ( //erro ako jo nije fetch prošaop da ne bude sve blank
              <View style={{ backgroundColor: colorByType[pokemon.types[0].type.name], borderRadius: 25 }}>
                  <Text style={{ fontSize: 20, fontWeight: 700, textAlign: "start", padding:12 }}>#{pokemon.id}</Text>
                  <Text style={styles.name}>{pokemon.name}</Text>
                    <Text style={styles.text}>{pokemon.types.map((t, index) => (
                      <Text key={index}>
                          {t.type.name}
                          {index !== pokemon.types.length - 1 ? "," : ""}
                      </Text>
                  ))}</Text>
                  <View style={styles.info}>
                  <Image
                    source={{ uri: pokemon.imageFront }}
                    style={{ width: 210, height: 210 }}
                  />
                   <Image
                    source={{ uri: pokemon.imageBack}}
                    style={{ width: 210, height: 210 }}
                      />
                  </View>
                  <View style={{ flexDirection: "row", justifyContent:"center", gap:12 }}>
                      <Text style={styles.wh}>Pokemon height: {pokemon.height}</Text>
                      <Text style={styles.wh}>Pokemon weight: {pokemon.weight}</Text>
                  </View>
                  <Text style={styles.heding}>Stats:</Text>
                  <View>
                      {pokemon.stats.map((s, index) => (
                          <Text style={styles.stats} key={index}>
                            <Text style={{fontWeight: "800"}}>{s.stat.name}: </Text>   {s.base_stat}
                          </Text>
                      ))}
                  </View>
                   <Text style={styles.heding}>Abilites:</Text>
                  <View>
                      {pokemon.abilities.map((s, index) => (
                          <Text style={styles.stats} key={index}>
                             {index+1}. <Text style={{ fontWeight: "800" }}> {s.ability.name}</Text>   
                          </Text>
                      ))}
                  </View>
              </View>
              
          )}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  name: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 5
    },
      heding: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "left",
        padding:8
  },

  info: {
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
        padding: 5,
        textAlign: "center",
        
    },
        wh: {
        fontSize: 15,
        fontWeight: "500",
        
    },
     stats: {
        fontSize: 16,
        fontWeight: "600",
        marginLeft: 15,
        padding: 7,
        textAlign: "left"
        },
});
