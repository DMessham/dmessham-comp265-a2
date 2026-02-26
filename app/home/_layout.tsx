import { Tabs, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#11240e',
      },
      headerShadowVisible: true,
      headerTintColor: '#efe',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>    
    <Stack.Screen name="index" options={{title: 'Home' }} />
    </Stack>
  );
}
