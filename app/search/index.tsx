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
import { showAlert, SearchList, routes, RouteList } from '@/components/ui/common';

const theme = {
    ...DefaultTheme,
    colors: paperDark.colors, // Copy it from the color codes scheme and then use it here
};

let offlineModeStart = true;
type routesRow = {
    name: string;
    routeNumber: string;  // MaterialIcon name, e.g. "weather-cloudy"
    arrivalTime: number;
    nextArrivalTime: number;
    onestopID: string;
    stops: stopListItem[]
};

type stopListItem = {
    name: string;
    address: string;
    arrivalTime: number;
    nextArrivalTime: number;
    latitude: number;
    longitude: number;
    onestopID: string;
    transitID: string;
};

type Props = {
    city: string;
    condition: string;
    routes: routesRow[];
};


const transitFeedID = "o-c9k0-saskatoontransit"; //saskatoon transit

const apiBaseURL = 'https://transit.land/api/v2/rest'

let onColor = "rgb(95,155,95)"

export default function App({
    routes = [
        {
            name: "8th Street / City Center", routeNumber: "8", arrivalTime: 3, nextArrivalTime: 13, onestopID: "08",
            stops: [
                { name: "Downtown Terminal West", address: "23rd St E / 3rd Ave N", arrivalTime: 2, nextArrivalTime: 12, latitude: -2, longitude: 2, onestopID: "onestopID", transitID: "transitStopID" },
                { name: "Center Mall Terminal O/B", address: "3310 8th Street E", arrivalTime: 2, nextArrivalTime: 12, latitude: -2, longitude: 2, onestopID: "onestopID", transitID: "transitStopID" }
            ]
        },
        {
            name: "The Meadows / Center Mall", routeNumber: "87", arrivalTime: 2, nextArrivalTime: 32, onestopID: "87",
            stops: [
                { name: "Center Mall Terminal I/B", address: "3310 8th Street E", arrivalTime: 20, nextArrivalTime: 50, latitude: -2, longitude: 2, onestopID: "onestopID", transitID: "transitStopID" },
                { name: "The Meadows", address: "Taylor/Rosewood Gate N", arrivalTime: 32, nextArrivalTime: 62, latitude: -2, longitude: 2, onestopID: "onestopID", transitID: "transitStopID" }
            ]
        },
        {
            name: "Lawson Heights / City Center", routeNumber: "30", arrivalTime: 21, nextArrivalTime: 13, onestopID: "30",
            stops: [
                { name: "Downtown Terminal West", address: "23rd St E / 3rd Ave N", arrivalTime: 20, nextArrivalTime: 62, latitude: -2, longitude: 2, onestopID: "onestopID", transitID: "transitStopID" },
                { name: "Lawson Terminal O/B", address: "Primrose Dr / Pinehouse Dr", arrivalTime: 20, nextArrivalTime: 62, latitude: -2, longitude: 2, onestopID: "onestopID", transitID: "transitStopID" }
            ]
        }
    ]
}: Props) {

    const [isOfflineMode, setIsOfflineMode] = useState(offlineModeStart);

    const [routeSearchQuery, onChangeRouteSeach] = React.useState('');
    const [stopSearchQuery, onChangeStopSeach] = React.useState('');

    const toggleSwitch = () => setIsOfflineMode(previousState => !previousState); // copied right from the react native docs lol
    return (

        <PaperProvider theme={theme}>
            <View>
                <Appbar.Header style={styles.appbar}>
                    <View style={styles.topRow}>

                        <View style={styles.cityRow}>
                            <Text variant="labelLarge" style={styles.cityText}>
                                LOCATION
                            </Text>

                            <IconButton
                                icon="map-marker"
                                size={18}
                                iconColor="rgba(255,255,255,0.95)"
                                style={styles.iconBtnTight}
                            // onPress={onOpenCityMenu}
                            />
                            <Text variant="labelLarge" style={styles.cityText}>Offline Mode</Text>
                            <Switch
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isOfflineMode}
                            />
                            <IconButton
                                icon="cog-outline"
                                size={22}
                                iconColor="rgba(255,255,255,0.95)"
                                style={styles.iconBtnTight}
                            // onPress={onPressSettings}
                            />
                        </View>

                    </View>
                </Appbar.Header>
                <View>
                    <TextInput
                        onSubmitEditing={() => showAlert('Search not yet implemented')}
                        enterKeyHint="search"
                        returnKeyType="search"
                        inputMode="search"
                        placeholder="Search Bus Routes & Stops" />
                </View>
                <ScrollView>
                    <RouteList routes={routes}></RouteList>
                </ScrollView>
            </View>
        </PaperProvider>
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

    cityText: {
        color: "rgba(255,255,255,0.95)",
        fontWeight: "700",
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

    tempRow: {
        flexDirection: "row",
        alignItems: "flex-start",
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

    divider: {
        opacity: 0.25,
    },
    
    tempText: {
        color: "rgba(255,255,255,0.95)",
        fontWeight: "300",
    },

    degreeMark: {
        color: "rgba(255,255,255,0.95)",
    },
    cityRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
});
