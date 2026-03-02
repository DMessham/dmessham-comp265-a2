import { Link, } from 'expo-router';
import {
    Appbar,
    Button,
    Divider,
    IconButton,
    List,
    Switch,
    Text,
    ProgressBar,
    MD3DarkTheme as DefaultTheme,
    PaperProvider
} from "react-native-paper";
import { paperDark } from '../constants/theme';
import { Spacing } from "../constants/theme";
import { BoolSwitch, StringSwitch } from '@/components/ui/common';
import * as React from "react";
import { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityIndicator, Alert, TextInput, Image, Platform, ScrollView, StyleSheet, View } from "react-native";

const theme = {
    ...DefaultTheme,
    colors: paperDark.colors, // Copy it from the color codes scheme and then use it here
};

export let deviceState = {
    headphonesConnected: true,
    batteryState: {
        level: 100,
        low: false, // if battery is below 20
        critical: false, //if battery is below 7
        isCharging: true
    },
    networkState: {
        isOnline: true,
        connection: "data",//'data', 'dataRoaming', 'wifi', airplane, null
        connectionDataType: "lte", // 2g, lte, 5Guwb, 5G, 4g,
    },
    emergencyMode: {
        active: false,
        reason: null, // 'manual', 'sos', 'battery', 
    }
}

export let config = {
    units: {
        distance: "km",
        distanceSmall: "meter",
        time: "12h" // 
    },
    alerts: {
        playOnSpeaker: false,
    },
    darkmode: true,
    emergencyMode: false
}

export function getSettings(request: string) {
    switch (request) {
        case 'distUnit':
            return ("km")
        case 'timeUnit':
            return ("12h")
        case 'use24Time':
            if (config.units.time == '24h') {
                return true;
            }
            else {
                return false;
            }
        case 'use12Time':
            return (config.units.time == '12h')
        case 'isEmergency':
            return (false)
        default:
            return (null)
    }
}
export function ListSetting(value: string, title: string, text: string, children: React.ReactElement) {
    return (
        <View>
            <Text>Title: {title}</Text>
            <Text>Desc: {text}</Text>
            <Text>Current value: {value}</Text>
        </View>
    )
}

export function ToggleItem({item, title = "listItem title", text = "listItem description"}:{item: boolean, title: string, text: string}) {
    const [isOfflineMode, setIsOfflineMode] = useState(item);
    const toggleSwitch = () => setIsOfflineMode(previousState => !previousState); // copied right from the react native docs lol
    return (

        <View>
            <Text>{title}</Text>
            <Text>{text}</Text>
            <Switch
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={item}
            />
        </View>
    )
}