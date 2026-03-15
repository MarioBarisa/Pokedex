import { Stack } from "expo-router";
import { FavoritesProvider } from "../context/favorites";

export default function RootLayout() {
  return (
    <FavoritesProvider>
    <Stack>
      <Stack.Screen name="(tabs)"
        options={{
          headerShown: false,
        }} />
      <Stack.Screen name="details"
        options={{
          headerLargeTitle: true,
          title: "Details",
          headerBackButtonDisplayMode: "minimal"
      
        }} />
    
    </Stack></FavoritesProvider>
  );
}
