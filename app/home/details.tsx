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


export default function Details() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={() => {
            router.setParams({ name: 'Updated' });
          }}>
          TODO: show the {params.dataType} for {params.objType} {params.onestopID}
        </Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#061006',
    fontSize: 16,
    color: '#eee'
  },
  text: {
    color: '#efefef',
  },
  titleText: {
    color: '#eee',
    fontSize: 56
  },
  labelText: {
    color: '#eee8',
    fontSize: 20
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#eeee',
  },
});

