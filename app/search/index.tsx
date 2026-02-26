import { Link, Stack, useRouter, useLocalSearchParams } from 'expo-router';
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
import { showAlert, SearchList, routes } from '@/components/ui/common';
import { ActivityIndicator, Alert, Image, Platform, ScrollView, StyleSheet, View } from "react-native";

const theme = {
  ...DefaultTheme,
  colors: paperDark.colors, // Copy it from the color codes scheme and then use it here
};

let results = null

export default function SearchScreen() {
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
        <Text style={styles.titleText}>Detailed Search</Text>
        <View>
          <TextInput
            onSubmitEditing={() => showAlert('Search not yet implemented')}
            enterKeyHint="search"
            returnKeyType="search"
            inputMode="search"
            placeholder="Search Bus Routes & Stops" />
        </View>
        <SearchList routes={routes}></SearchList>
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
