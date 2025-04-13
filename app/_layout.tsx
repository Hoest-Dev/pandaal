import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";
import { BlurView } from "expo-blur";
import constants from "../assets/constants.json";

SplashScreen.preventAutoHideAsync();

function Branding() {
  let brandingStyles = {
    fontFamily: constants.brandingFont,
    fontSize: 16,
    color: constants.accentColor,
  };
  return <Text style={brandingStyles}>pandaal</Text>;
}

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins: require("../assets/fonts/PoppinsRegular.ttf"),
    PoppinsBold: require("../assets/fonts/PoppinsBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <Stack
      screenOptions={{
        headerTitle: () => null,
        headerTransparent: true,
        headerBackground: () => (
          <BlurView experimentalBlurMethod="dimezisBlurView" />
        ),
        contentStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: () => <Branding />,
        }}
      />
    </Stack>
  );
}
