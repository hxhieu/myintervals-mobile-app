import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Button from 'react-native-ui-lib/button';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button label={'Press'} size={Button.sizes.large} />
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
