import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

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
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#eeee',
  },
});

