import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import HelloWorld from './components/HelloWorld';
import UserList from './components/UserList';

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorld/>
      <UserList />
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
