import {Text, View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found', headerStyle: { backgroundColor: '#31040e' }, headerTintColor: '#fff', headerBackVisible: true, headerTitleStyle: { fontWeight: 'bold', },}} />
      <View style={styles.container}>
        <Text style={styles.titleText}>Error!</Text>
        <Text style={styles.labelText}>There's nothing here...</Text>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191010',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16
  },
  text: {
    color: '#ffefef',
  },
  titleText: {
    color: '#fee',
    fontSize: 56
  },
  labelText: {
    color: '#fee8',
    fontSize: 20
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#feee',
  },
});
