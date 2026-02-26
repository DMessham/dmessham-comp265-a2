
import { ActivityIndicator, Alert, Image, Platform, ScrollView, StyleSheet, View, Text } from "react-native";
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';

import { Spacing } from "../../constants/theme";
export default function AboutScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>TransitTrac</Text>
        <Text style={styles.labelText}>React Native Edition</Text>
        <Text style={styles.text}>Version 0.2.1</Text>
        
        <Text style={styles.text}>2025 DMessham</Text>

        <Text style={styles.text}>Powered By Transitland API</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
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
  },
});
