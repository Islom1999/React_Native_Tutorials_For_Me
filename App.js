import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Component from './components/View-Text-Button';
import TextInput from './components/TextInput.js/index.js';
import Lists from './components/ListsAndScrollView/index';
import FlatList from './components/Flatlist';
import TouchableNative from './components/Touchable';
import NativeStyle from './components/Styles';
import NativeAlert from './components/Alert';
import Images from './components/Images';
import DiceApp from './components/Images/dice';
import AlertDialog from './components/AlertDialog';
import DismissKeyboard from './components/DismissKeyboard';
import Counter from './components/UseEffectCounter';
import FlexBox from './components/Flex';
import ModalNative from './components/Modal';
import SwitchNative from './components/Switch';
import IndicatorAcrivity from './components/ActivityIndicator';
import SectionListNative from './components/SectionList';
import PrisableNative from './components/Prisable';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <Component /> */}
      {/* <TextInput /> */}
      {/* <Lists /> */}
      {/* <FlatList/> */}
      {/* <TouchableNative /> */}

      {/* <NativeStyle /> */}
      {/* <NativeAlert/> */}
      {/* <Images/> */}
      {/* <DiceApp/> */}
      {/* <AlertDialog/> */}
      {/* <DismissKeyboard/> */}
      {/* <Counter /> */}
      {/* <FlexBox /> */}

      {/* <ModalNative /> */}
      {/* <SwitchNative /> */}
      {/* <IndicatorAcrivity/> */}
      {/* <SectionListNative/> */}
      <PrisableNative/>

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
