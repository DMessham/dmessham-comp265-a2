import { Link, Stack } from 'expo-router';
import {
  Appbar,
  Button,
  Divider,
  IconButton,
  List,
  Switch,
  Text,
  TextInput,
  ProgressBar,
  MD3DarkTheme as DefaultTheme,
  PaperProvider
} from "react-native-paper";
import { paperDark } from '../../constants/theme';
import { Spacing } from "../../constants/theme";
import * as React from "react";
import { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityIndicator, Alert, Image, Platform, ScrollView, StyleSheet, View } from "react-native";

const theme = {
  ...DefaultTheme,
  colors: paperDark.colors, // Copy it from the color codes scheme and then use it here
};

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
        <Text style={styles.titleText}>Route Planning</Text>
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
