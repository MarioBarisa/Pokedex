import {Stack} from "expo-router";
import {FavoritesProvider} from "../context/favorites";
import {ThemeProvider} from "@/context/theme";
import {useNavigationTheme} from "@/constants/navigationTheme";

function RootNavigator() {
    const navTheme = useNavigationTheme();

    return (
        <FavoritesProvider>
            <Stack screenOptions={navTheme}>
                <Stack.Screen name="(tabs)"
                              options={{
                                  headerShown: false,
                              }}/>
                <Stack.Screen name="Details"
                              options={{
                               //   headerLargeTitle: true,
                                  title: "Details",
                                  headerBackButtonDisplayMode: "minimal",

                              }}/>
            </Stack>
        </FavoritesProvider>
    );
}


export default function RootLayout() {
    return (
        <ThemeProvider>
            <RootNavigator/>
        </ThemeProvider>
    );
}
