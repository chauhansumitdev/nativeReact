import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Strange things happen, sometimes it is intended, sometimes unintended.</Text>
      <Text>The best part is, apart from keeping on eye on every other variable, relax and let things happen on its own.</Text>
      <Text>Usually I dont give advices, but sometimes I do, mostly depends on the intellect of the person I am talking to.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
