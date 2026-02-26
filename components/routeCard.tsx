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
  ActivityIndicator,
  ProgressBar,
  MD3DarkTheme as DefaultTheme,
  PaperProvider
} from "react-native-paper";
import { paperDark } from '../constants/theme';
import { Spacing } from "../constants/theme";
import * as React from "react";
import { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert, Image, Platform, ScrollView, StyleSheet, View } from "react-native";

const theme = {
  ...DefaultTheme,
  colors: paperDark.colors, // Copy it from the color codes scheme and then use it here
};
