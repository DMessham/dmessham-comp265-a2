import { Link, } from 'expo-router';
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
    <PaperProvider theme={theme}>
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
const transitFeedID = "o-c9k0-saskatoontransit"; //saskatoon transit

const apiBaseURL = 'https://transit.land/api/v2/rest'

let onColor = "rgb(95,155,95)"

function showAlert(message: string) {
  if (Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert(message);
  }
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
  textButton: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#eeee',
  },
  button: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#fff',
    padding: Spacing.sm,
    gap: Spacing.md,
  },
  screen: {
    flex: 1,
    backgroundColor: "#0F2F0A",
    padding: Spacing.sm,
    gap: Spacing.md,
    paddingBottom: 0,
  },

  appbar: {
    backgroundColor: "transparent",
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  topRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  logo: {
    width: 32,
    height: 32,
  },

  stopIcon: {
    width: Spacing.lg,
    height: Spacing.lg,
    marginInlineStart: Spacing.md
  },

  iconBtnTight: {
    width: 24,
    height: 24,
  },

  hero: {
    alignItems: "center",
    color: "rgba(255,255,255,0.95)",
  },

  metaRight: {
    marginLeft: 14,
    marginTop: 22,
  },

  conditionText: {
    color: "rgba(255,255,255,0.95)",
    fontWeight: "700",
  },

  illustrationWrap: {
    alignItems: "center",
    justifyContent: "center",
  },

  routesCard: {
    borderRadius: 16,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    paddingTop: Spacing.sm,
    backgroundColor: "rgba(255,255,255,0.25)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.25)",
  },

  stopsCard: {
    borderRadius: 12,
    padding: Spacing.sm,
    paddingTop: 0,
    margin: 0,
    backgroundColor: "rgba(25,25,25,0.5)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.5)",
  },

  routesRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  stoplistHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },

  routesSub: {
    color: "rgba(255,255,255,0.95)",
    fontWeight: "700",
  },

  divider: {
    opacity: 0.25,
  },

  hScrollTitle: {
    color: "rgba(255,255,255,0.95)",
    fontWeight: "700",
    marginBottom: 10,
  },

  miniCard: {
    width: 120,
    marginRight: 12,
    borderRadius: 16,

    backgroundColor: "rgba(255,255,255,0.25)",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.25)",
  },

  miniCardContent: {
    alignItems: "center",
  }
});
