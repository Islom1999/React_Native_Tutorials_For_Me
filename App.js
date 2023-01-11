import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Component from './components/View-Text-Button';
import TextInput from './components/TextInput.js/index.js';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Component />
      <TextInput />

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
