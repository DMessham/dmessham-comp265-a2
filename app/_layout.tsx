import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs screenOptions={{
      tabBarActiveTintColor: "rgb(95,155,95)",
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: true,
      headerTintColor: '#efe',
      tabBarStyle: {
        backgroundColor: '#151215',
      },
    }}>
      <Tabs.Screen name="home" options={{headerShown: false, title: 'TransitTrack' }} />
      <Tabs.Screen name="profile" options={{ headerShown: false, title: 'You'  }} />
      <Tabs.Screen name="search" options={{ headerShown: false, title: 'Search'  }} />
      <Tabs.Screen name="trip" options={{ headerShown: false, title: 'Trip'  }} />
      <Tabs.Screen name="+not-found" options={{ href: null, title: 'TransitTrack: ERROR' }} />
      <Tabs.Screen name="modal" options={{ href: null, title: 'TransitTrack: ERROR' }} />
    </Tabs>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
