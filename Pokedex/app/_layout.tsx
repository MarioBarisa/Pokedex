import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          title: "Home",
          headerSearchBarOptions: {
            placeholder: "Search Pokemon",
          },
      
      
        }} />
      <Stack.Screen name="details"
        options={{
          title: "Details",
          headerBackButtonDisplayMode: "minimal"
      
        }} />
    
    </Stack>
  );
}
