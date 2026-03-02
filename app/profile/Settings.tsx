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
import { deviceState, config, getSettings, ListSetting, ToggleItem } from '@/components/userSettings';
import { BoolSwitch, StringSwitch } from '@/components/ui/common';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityIndicator, Alert, Image, Platform, ScrollView, StyleSheet, View } from "react-native";

const theme = {
    ...DefaultTheme,
    colors: paperDark.colors, // Copy it from the color codes scheme and then use it here
};

let exampleBool = false


export default function Details() {
    const router = useRouter();
    const params = useLocalSearchParams();

    return (
        <>
            <PaperProvider theme={theme}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Settings Screen</Text>
                    <Text style={styles.text}>Settings item </Text>
                    <View>
                        <Text>Example setting</Text>
                        {/* <BoolSwitch value={exampleBool} /> */}
                    </View>
                    <ListSetting title="example bool" text="description" value={exampleBool}></ListSetting>
                </View>
            </PaperProvider>
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
        padding: Spacing.sm,
        gap: Spacing.md,
    },
});
