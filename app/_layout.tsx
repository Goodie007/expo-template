import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
// import { useFonts } from "expo-font";
import { Slot, Stack } from "expo-router";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { ThemeModesProvider } from "@/providers";
import { Text, TextInput } from 'react-native';
import { useColorScheme } from "@/components/useColorScheme";
import { loadAppFonts } from "@/utils/fonts";
import Login from "./auth/login";

// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;
// @ts-ignore
TextInput.defaultProps = TextInput.defaultProps || {};
// @ts-ignore
TextInput.defaultProps.allowFontScaling = false;

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  //initialRouteName: "(tabs)",
  initialRouteName: "index"
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = Font.useFonts(loadAppFonts());;

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // return <RootLayoutNav />;


// function RootLayoutNav() {
//   const colorScheme = useColorScheme();

  return (
    <ThemeModesProvider>
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        <Stack.Screen name="index" options={{title: "login" }} />
      </Stack> */}
      <Slot />
    </ThemeModesProvider>
  );
}
