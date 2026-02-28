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
import * as React from "react";
import { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityIndicator, Alert, TextInput, Image, Platform, ScrollView, StyleSheet, View } from "react-native";

const theme = {
    ...DefaultTheme,
    colors: paperDark.colors, // Copy it from the color codes scheme and then use it here
};

let deviceState= {
    headphonesConnected: true,
    batteryState:{
        level: 100,
        low: false, // if battery is below 20
        critical: false, //if battery is below 7
        isCharging: true
    },
    networkState:{
        isOnline:true,
        connection:"",//'data', 'dataRoaming', 'wifi', airplane, null
        connectionDataType:"", // 2g, lte, 5Guwb, 5G, 4g,
    },
    emergencyMode:{
        active: false,
        reason: null, // 'manual', 'sos', 'battery', 
    }
}

let config = {
    units: {
        distance: "km",
        distanceSmall: "meter",
        time: "12h" // 
    },
    alerts: {

    },
    darkmode: true,
    emergencyMode: false,
}

export function getSettings(request){
    switch(request){
        case distUnit:
            return()
        case timeUnit:
            return()
        case use24Time:
            if(config.units.time == '24h'){
                return true;
            }
            else{
                return false;
            }
        case use12Time:
            return(config.units.time == '12h')
        case isEmergency:
            return(deviceState)
        case timeUnit:
        case distUnit:
        case distUnit:
    }
}
export function listSettings(request){

}