import { Tabs, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: '#31641e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    
    <Stack.Screen name="index" options={{title: '{USER.USERNAME}' }} />
    <Stack.Screen name="routePlan" options={{title: 'Route' }} />
    </Stack>
  );
}
