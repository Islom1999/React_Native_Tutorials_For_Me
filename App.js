import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Component from './components/View-Text-Button';
import TextInput from './components/TextInput.js/index.js';
import Lists from './components/ListsAndScrollView/index';
import FlatList from './components/Flatlist';
import TouchableNative from './components/Touchable';
import NativeStyle from './components/Styles';
import NativeAlert from './components/Alert';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <Component /> */}
      {/* <TextInput /> */}
      {/* <Lists /> */}
      {/* <FlatList/> */}
      {/* <TouchableNative /> */}

      {/* <NativeStyle /> */}
      <NativeAlert/>

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
