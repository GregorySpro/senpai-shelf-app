import { StyleSheet, Text, View } from 'react-native';
import Register from './components/Register';
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'Jersay10': require('./assets/fonts/Jersey10-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // ou <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
