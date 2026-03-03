import { showAlert } from "@/components/ui/common";
import { Spacing } from "../../constants/theme";
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityIndicator, Alert, Image, Platform, ScrollView, StyleSheet, View } from "react-native";
import {
  Appbar,
  Button,
  Divider,
  IconButton,
  List,
  ListSectionProps,
  Switch,
  Text,
  TextInput,
  ProgressBar,
  SegmentedButtons,
  MD3DarkTheme as DefaultTheme,
  PaperProvider
} from "react-native-paper";
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
        <Button mode="text" compact={true} buttonColor="#11243e" onPress={() => showAlert('Search not yet implemented')} style={styles.button}>
          Log Out
        </Button>
          <Link style={styles.button}
            href={{
              pathname: '/profile/details',
              params: { objType: 'favplaces', dataType: 'list' }
            }}>favorite Places</Link>
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
        <Text style={styles.titleText}>TransitTrac</Text>
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
