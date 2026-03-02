import { Link, Stack } from 'expo-router';
import {
    Appbar,
    Button,
    Divider,
    IconButton,
    List,
    ListSectionProps,
    Switch,
    Text,
    TextInput,
    ProgressBar,
    SegmentedButtons,
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
import { ActivityIndicator, SafeAreaView,Alert, Image, Platform, ScrollView, StyleSheet, View } from "react-native";

const theme = {
    ...DefaultTheme,
    colors: paperDark.colors, // Copy it from the color codes scheme and then use it here
};

let exampleBool = false
let exampleString = "Hello, World!"


export default function Details() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [value, setValue] = React.useState('');
    return (
        <>
            <PaperProvider theme={theme}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>Settings Screen</Text>
                    <View>
                    <Text style={styles.text}>test</Text>
                    
                    </View>
                    <View>
                        <Text>Example Bool setting</Text>
                        <BoolSwitch value={exampleBool} />
                    </View>
                    <ListSetting title="example string setting" text="description" value={exampleString}></ListSetting>
                    <List.Item
                        title="Example bool"
                        description="Item description"
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => <BoolSwitch {...props} value={exampleBool} />}
                    />
                    <List.Item
                        title="Distance Units"
                        description=""
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => <Text {...props}>{config.units.distance} & {config.units.distanceSmall} </Text>}
                    />
                    <List.Item
                        title="Time"
                        description={config.units.time}
                        left={props => <List.Icon {...props} icon="clock" />}
                        right={props => <><Button onPress={() => config.units.time="12h"} {...props}>12-hour</Button><Button  onPress={() => config.units.time="24h"} {...props}>24-hour</Button></>}
                    />
                    <List.Item
                        title="Perferred Transport Method"
                        description={value}
                        left={props => <List.Icon {...props} icon="folder" />}
                        right={props => <><View><SegmentedButtons
                            value={value}
                            onValueChange={setValue}
                            {...props}

                            buttons={[
                            {
                                value: 'walk',
                                icon: 'walk',
                                label: 'Walking',
                            },
                            {
                                value: 'bus',
                                icon: 'bus',
                                label: 'Transit',
                            },
                            { value: 'bike', label: 'Biking', icon: 'bike' },
                            ]}
                        /></View></>}
                    />
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
