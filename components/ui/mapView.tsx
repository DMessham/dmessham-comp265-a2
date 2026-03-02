import { Link, } from 'expo-router';
import {
  Appbar,
  Button,
  Divider,
  IconButton,
  List,
  Portal,
  FAB,
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

import { useSafeAreaInsets } from 'react-native-safe-area-context';

const theme = {
  ...DefaultTheme,
  colors: paperDark.colors, // Copy it from the color codes scheme and then use it here
};
const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;
export default function MapView() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const [state, setState] = React.useState({ open: false });

  const { bottom } = useSafeAreaInsets();
  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  return (
    <>
      <View style={styles.container}>
        <Portal>
        <Appbar.Header>
          <Appbar.Content title="no trip active" />
          
          <Appbar.Action icon="layers" onPress={() => { }} />
          <FAB
              mode="flat"
              size="medium"
              icon="close"
              label='End Trip'
              onPress={() => { }}
              style={[
                styles.fab,
                { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
              ]}
            />
        </Appbar.Header>
          <Text
            style={styles.text}
          >
            TODO: Mapview
          </Text>
          <Appbar
            style={[
              styles.bottom,
              {
                height: BOTTOM_APPBAR_HEIGHT + bottom,
                backgroundColor: theme.colors.elevation.level2,
              },
            ]}
            safeAreaInsets={{ bottom }}
          >
            <Appbar.Action icon="alert" onPress={() => { }} />
            <Appbar.Action icon="layers" onPress={() => { }} />
            <Appbar.Action icon="menu" onPress={() => { }} />
            <Appbar.Action icon="help" onPress={() => { }} />
            <FAB
              mode="flat"
              size="medium"
              icon="map"
              onPress={() => { }}
              style={[
                styles.fab,
                { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
              ]}
            />
          </Appbar>
          
          
        </Portal>
      </View>
    </>
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
  },bottom: {
    backgroundColor: 'aquamarine',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});

