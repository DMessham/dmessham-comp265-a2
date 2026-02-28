import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, StyleSheet } from 'react-native';
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
    MD3LightTheme as DefaultTheme,
    ActivityIndicator,
    PaperProvider
  } from "react-native-paper";

export default function Details() {
    const router = useRouter();
    const params = useLocalSearchParams();

    return (
        <View style={styles.container}>
            <Text
                style={styles.text}
                onPress={() => {
                    router.setParams({ name: 'Updated' });
                }}>
                TODO: show the {params.dataType} for {params.objType} {params.onestopID}
            </Text>
        </View>
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
    textButton: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#eeee',
    },
    page: { flex: 1 },
    content: { padding: 16, gap: 12 },

    h1: { fontSize: 24, fontWeight: "700" },
    h2: { fontSize: 18, fontWeight: "600", marginBottom: 8 },
    p: { fontSize: 14, opacity: 0.85, marginBottom: 10 },

    card: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 14,
        padding: 14,
        gap: 8,
    },

    label: { fontSize: 14, fontWeight: "500" },

    input: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 10,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },

    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 6,
    },

    center: { alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 12 },
    muted: { opacity: 0.7, textAlign: "center" },
    mutedSmall: { opacity: 0.6, fontSize: 12, textAlign: "center" },

    button: {
        marginTop: 8,
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: "center",
        borderWidth: StyleSheet.hairlineWidth,
    },
    buttonPressed: { opacity: 0.7 },
    buttonText: { fontWeight: "600" },

    secondaryButton: {
        marginTop: 10,
        borderRadius: 12,
        paddingVertical: 10,
        alignItems: "center",
        borderWidth: StyleSheet.hairlineWidth,
    },
    secondaryButtonText: { fontWeight: "600", opacity: 0.85 },

    errorBox: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 12,
        padding: 12,
        gap: 6,
    },
    errorTitle: { fontSize: 16, fontWeight: "600" },
    errorMessage: { opacity: 0.85 },

    profile: { flexDirection: "row", gap: 12, alignItems: "center" },
    avatar: { width: 42, height: 42, borderRadius: 32, backgroundColor: '#115511bb', color: '#ddffddee', alignItems: "center", justifyContent: "center" },

    profileName: { fontSize: 16, fontWeight: "700" },

    tagsRow: { flexDirection: "row", flexWrap: "wrap", gap: 6, marginTop: 8 },
    tag: {
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 999,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    tagText: { fontSize: 12, opacity: 0.8 },

    footer: { marginTop: 8, fontSize: 12, opacity: 0.6, textAlign: "center" },
});



function Card({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
    return (
        <View style={styles.card}>
            <Text style={styles.h2}>{title}</Text>
            <Text style={styles.p}>{subtitle}</Text>
            <CenteredMessage>
                {children}
            </CenteredMessage>
        </View>
    );
}

function CenteredMessage({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.center}>
            {children}
        </View>
    );
}

function TransitListItem({ itemType, titleText, Children, aviContent }: { itemType: string, titleText: string, Children: React.ReactElement, aviContent: string }) {
    /*
    valid itemtypes: null (fallback), route, transfer(for stations very close) walk, drive, bike, walkStart(walk to first stop), stop, walkDestination, 
    {routenumber/actionicon}

    the children will be a dropdown for the list of stops, or turns depending on nav type
    */

    //return
    switch (itemType) {
        case 'error':
            return (
                <View style={styles.errorBox}>
                    <Text style={styles.errorTitle}><View style={styles.avatar}>{aviContent}</View>ERROR: {titleText}</Text>
                    <View style={styles.errorMessage}>{Children}</View>
                </View>
            )
        case 'loading':
            return (
                <View style={styles.errorBox}>
                    <Text style={styles.muted}>
                        <View style={styles.avatar}><ActivityIndicator /></View> LOADING {titleText}</Text>
                    {Children}
                </View>
            )
        case 'route':
            return (
                <View style={styles.card}>
                    <View style={styles.avatar}>{aviContent}</View>
                    <Text style={styles.muted}>Route {titleText}</Text>
                    {Children}
                </View>
            )
        case 'transfer':
            return (
                <View style={styles.card}>
                    <View style={styles.avatar}>{aviContent}</View>
                    <Text style={styles.muted}>transfer {titleText}</Text>
                    {Children}
                </View>
            )
        case 'walk':
            return (
                <View style={styles.card}>
                    <View style={styles.avatar}>{aviContent}</View>
                    <Text style={styles.muted}>Walk {titleText}</Text>
                    {Children}
                </View>
            )
        case 'stop':
            return (
                <View style={styles.card}>
                    <View style={styles.avatar}>{aviContent}</View>
                    <Text style={styles.muted}>Bus Stop {titleText}</Text>
                    {Children}
                </View>
            )
        case 'destination':
            return (
                <View style={styles.card}>
                    <View style={styles.avatar}>{aviContent}</View>
                    <Text style={styles.muted}>Destination {titleText}</Text>
                    {Children}
                </View>
            )
        case 'start':
            return (
                <View style={styles.card}>
                    <View style={styles.avatar}>{aviContent}</View>
                    <Text style={styles.muted}>Start {titleText}</Text>
                    {Children}
                </View>
            )
        case 'alert':
            return (
                <View style={styles.errorBox}>
                    <Text style={styles.muted}>ALERT {titleText}</Text>
                    <Text style={styles.muted}>Watch out for:</Text>
                    {Children}
                </View>
            )
        case 'default':
            return (
                <View style={styles.card}>
                    <Text style={styles.muted}>Fallback ({itemType}), TITLE: {titleText}</Text>
                    {Children}
                </View>
            )
    }
}