import { Spacing } from "../../constants/theme";
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ActivityIndicator, Alert, Image, Platform, ScrollView, StyleSheet, View, Text } from "react-native";
export default function SettingsScreen() {
    const router = useRouter();
  const params = useLocalSearchParams();
    return (
        <>
            <Stack.Screen
                options={{
                    title: params.name,
                    headerStyle: { backgroundColor: 'lightblue', },
                    headerBackVisible: true,
                }}
            />
            <View style={styles.container}>
                <Text style={styles.titleText}>Settings Screen</Text>
                <Text style={styles.text}>Settings item</Text>

            </View>

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
