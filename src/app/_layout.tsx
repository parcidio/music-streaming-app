import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { ModalPortal } from 'react-native-modals';

import { useColorScheme } from '../components/useColorScheme';
import PlayerProvider from '../providers/PlayerProvider';
import { CustomThemeProvider } from '../providers/CustomThemeContext';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/profile` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

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

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    // controls the theme
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <CustomThemeProvider>
        {/* controls the current song playing */}
        <PlayerProvider>
          <Stack>
            <Stack.Screen name="welcomeScreen" options={{ headerShown: false }} />
            <Stack.Screen name="signup" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="hits" options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="newArtists" options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="artists" options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="albums" options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="surpriseMe" options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="newReleases" options={{ presentation: 'modal', headerShown: false }} />
            <Stack.Screen name="dj" options={{ presentation: 'modal', headerShown: false }} />
          </Stack>
          <ModalPortal />
        </PlayerProvider>
      </CustomThemeProvider>
    </ThemeProvider>
  );
}
