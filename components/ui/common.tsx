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
import { paperDark } from '../../constants/theme';
import { Spacing } from "../../constants/theme";
import * as React from "react";
import { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityIndicator, Alert, TextInput, Image, Platform, ScrollView, StyleSheet, View } from "react-native";

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
    routes: routesRow[];
};

export function showAlert(message: string) {
    if (Platform.OS === 'web') {
        window.alert(message);
    } else {
        Alert.alert(message);
    }
}

export let city = "Saskatoon"

export let routes = [
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


export function RouteList({ routes }: Props) {
    return (
        <PaperProvider theme={theme}>
            <View>
                {/* routes List */}
                {routes.map((row, idx) => (
                    <View style={styles.routesCard}>
                        <React.Fragment key={row.name}>
                            <List.Item
                                title={row.name}
                                titleStyle={styles.routesDay}
                                left={() => (
                                    <Text style={styles.routesTemps}>
                                        {row.routeNumber}

                                    </Text>
                                )}
                                right={() => (
                                    <Text style={styles.routesTemps}>
                                        In {row.arrivalTime} & {row.nextArrivalTime} Minutes
                                        {/* Show on map */}
                                    </Text>

                                )}
                                style={styles.routesRow}
                            />
                            <View style={styles.stopsCard}>
                                {/* TODO: make hide/show functions work */}
                                <React.Fragment key={`${row.name}-stoplistHeader`}>
                                    <List.Item
                                        title={`${row.stops.length} stops`}
                                        titleStyle={styles.routesTemps}
                                        right={() => (
                                            <>
                                                <Link
                                                    style={styles.button}
                                                    href={{
                                                        pathname: '/home/details',
                                                        params: { onestopID: row.onestopID, objType: 'route', dataType: 'map' }
                                                    }}> Show On Map</Link>
                                                <IconButton
                                                    icon="chevron-down"
                                                    size={22}
                                                    iconColor="rgba(255,255,255,0.95)"

                                                    style={styles.iconBtnTight}
                                                // onPress={onPressSettings}
                                                />
                                            </>

                                        )}
                                        style={styles.stoplistHeaderRow}
                                    />
                                </React.Fragment>
                                {/* stop list */}
                                {row.stops.map((row2, idx) => (
                                    <React.Fragment key={`${row.name}+${row2.name}-stoplistHeader`}>
                                        <List.Item
                                            title={row2.name}
                                            titleStyle={styles.routesDay}
                                            left={() => (
                                                // <IconSymbol size={22} name="busstop" color="rgba(255,255,255,0.9)"
                                                //     style={styles.iconBtnTight} />
                                                <Image
                                                    style={styles.stopIcon}
                                                    source={{
                                                        uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                                                    }}
                                                />
                                            )}
                                            right={() => (
                                                <Text style={styles.routesTemps}>
                                                    In {row2.arrivalTime} & {row2.nextArrivalTime} Minutes
                                                </Text>

                                            )}
                                            style={styles.routesRow}
                                        />
                                        {idx < row.stops.length - 1 ? (
                                            <Divider style={styles.divider} />
                                        ) : null}
                                    </React.Fragment>
                                ))}
                            </View>

                        </React.Fragment>
                    </View>
                ))}
            </View>
        </PaperProvider>
    );
}


export function SearchList({ routes }: Props) {
    const [isOfflineMode, setIsOfflineMode] = useState(offlineModeStart);

    const [routeSearchQuery, onChangeRouteSeach] = React.useState('');
    const [stopSearchQuery, onChangeStopSeach] = React.useState('');

    const toggleSwitch = () => setIsOfflineMode(previousState => !previousState); // copied right from the react native docs lol

    return (

        <PaperProvider theme={theme}>
            <Appbar.Header style={styles.appbar}>
                <View style={styles.topRow}>
                    <View style={styles.tempRow}>
                            <Image
                            style={styles.logo}
                            source={{
                            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
                            }}
                        />
                        <Text variant="displaySmall" style={styles.tempText}>
                            TransitTrak
                        </Text>
                        <Text variant="labelLarge" style={styles.degreeMark}>
                            a0.2.0
                        </Text>
                    </View>

                    <View style={styles.cityRow}>
                        <Text variant="labelLarge" style={styles.cityText}>
                            {city.toUpperCase()}
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

            {/* Hero Section */}
            <View style={styles.hero}>
                
                    <ActivityIndicator size="large"/>
                    <Text  style={styles.hero}>It's taking a while to load maps...</Text>
                    <View style={styles.illustrationWrap}>
                </View>
                {/* TODO: add map */}
            </View>
            <View>
                <TextInput
                    onChangeText={onChangeRouteSeach}
                    onSubmitEditing={() => showAlert('Route Search not yet implemented')}
                    value={routeSearchQuery}
                    enterKeyHint="search"
                    returnKeyType="search"
                    inputMode="search"
                    placeholder="Search Bus Routes" />
            </View>
            <View>
                <TextInput
                    onChangeText={onChangeStopSeach}
                    onSubmitEditing={() => showAlert('Stop Search not yet implemented')}
                    value={stopSearchQuery}
                    enterKeyHint="search"
                    returnKeyType="search"
                    inputMode="search"
                    placeholder="Search Bus Stops" />
                {/* TODO add search logic */}
            </View>
            <View>
                <TextInput
                    onSubmitEditing={() => showAlert('Search not yet implemented')}
                    enterKeyHint="search"
                    returnKeyType="search"
                    inputMode="search"
                    placeholder="Search Bus Routes & Stops" />
            </View>
            <View>
                {/* routes List */}
                <RouteList routes={routes}></RouteList>
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

    cityRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
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

    tempText: {
        color: "rgba(255,255,255,0.95)",
        fontWeight: "300",
    },

    degreeMark: {
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

    hiloText: {
        color: "rgba(255,255,255,0.95)",
        fontWeight: "600",
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

    routesDay: {
        color: "rgba(255,255,255,0.95)",
        fontWeight: "700",
    },

    routesTemps: {
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
    },

    miniDay: {
        color: "rgba(255,255,255,0.95)",
        fontWeight: "700",
    },

    miniTemps: {
        color: "rgba(255,255,255,0.95)",
        fontWeight: "800",
    },
});
