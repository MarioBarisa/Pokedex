import { Stack } from "expo-router";
import { FavoritesProvider } from "../context/favorites";
import {ThemeProvider} from "@/context/theme";

export default function RootLayout() {
    return (
        <ThemeProvider>


            <FavoritesProvider>
                <Stack>
                    <Stack.Screen name="(tabs)"
                                  options={{
                                      headerShown: false,
                                  }}/>
                    <Stack.Screen name="details"
                                  options={{
                                      headerLargeTitle: true,
                                      title: "Details",
                                      headerBackButtonDisplayMode: "minimal"

                                  }}/>

                </Stack></FavoritesProvider></ThemeProvider>
    );
}
