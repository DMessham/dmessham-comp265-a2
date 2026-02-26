import { Tabs } from 'expo-router';
export default function TabLayout() {
  return (
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
      <Tabs.Screen name="+not-found" options={{ href: null, title: 'TransitTrack: ERROR' }} />
    </Tabs>
  );
}