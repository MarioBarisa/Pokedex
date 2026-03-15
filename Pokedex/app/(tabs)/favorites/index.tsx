import { Text, ScrollView } from "react-native";

export default function FavoritesScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 10,
        padding: 8,
      }}
      contentInsetAdjustmentBehavior="automatic"
      automaticallyAdjustContentInsets={true}
    >
      <Text> Ovo je favorites stranica. </Text>
    </ScrollView>
  );
}
