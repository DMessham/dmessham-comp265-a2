import { Spacing } from "../../constants/theme";
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityIndicator, Alert, Image, Platform, ScrollView, StyleSheet, View, Text } from "react-native";

export default function AboutScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#05172e', },
          headerBackVisible: true,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.titleText}>Profile</Text>
        <Link href="/profile/About" style={styles.button}>
          Your Account
        </Link>
        <Link href="/profile/About" style={styles.button}>
          Log Out
        </Link>
        <Link href="/profile/About" style={styles.button}>
          About TransitTrac
        </Link>
      </View>
      <View style={styles.container}>
        <Text style={styles.titleText}>Saskatoon Transit</Text>
        <Link href="https://saskatoon.ca" style={styles.button}>
          Website
        </Link>
        <Link href="https://saskatoon.ca" style={styles.button}>
          Tickets
        </Link>
      </View>
      <View style={styles.container}>
        <Text style={styles.titleText}>TransitTrack</Text>
        <Link href="/profile/Settings" style={styles.button}>
          Settings
        </Link>
        <Link href="/profile/About" style={styles.button}>
          About TransitTrac
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#11243e',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16
  },
  text: {
    color: '#fff',
  },
  titleText: {
    color: '#fff',
    fontSize: 36
  },
  labelText: {
    color: '#fff8',
    fontSize: 20
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
    padding: Spacing.sm,
    gap: Spacing.md,
  },
});
