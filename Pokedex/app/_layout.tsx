import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"
        options={{
          headerLargeTitle: true,
          title: "Home",
          /* headerSearchBarOptions: {
            placeholder: "Search Pokemon",
          }, */
      
      
        }} />
      <Stack.Screen name="details"
        options={{
          headerLargeTitle: true,
          title: "Details",
          headerBackButtonDisplayMode: "minimal"
      
        }} />
    
    </Stack>
  );
}
