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
import RefleshControll from './components/RefleshControll';
import InputAccessory from './components/InputAcsessoryView';
import TouchableFeedback from './components/TouchableNativeFeedback';
import AppearnseNative from './components/Appearence';
import Platforms from './components/Platforms';
import AnimatedLibrary from './components/AnimatedLibrary';
import PlatformColorNative from './components/PlatformColor';
import DrawerLayout from './components/DrawerLayoutAndroid';
import Transforms from './components/Transforms';
import BackHandlerNative from './components/BackHandler';
import ActionSheetIOSNative from './components/ActionSheetIOS';
import Prompt from './components/Prompt';
import VibrationNative from './components/Vibration';
import SliderNative from './components/Slider';
import AvatarNative from './components/Elements/Avatar';
import BadgeNative from './components/Elements/Badge';
import ButtonComponent from './components/Elements/Button';
import CheckBoxComponent from './components/Elements/CheckBox';
import InputComponent from './components/Elements/Input';
import OverlayComponent from './components/Elements/Overlay';
import Pricing from './components/Elements/PrisingCard';
import FAB from './components/Elements/FAB';
import SpeedDialNative from './components/Elements/SpeesDial';
import SocialIcons from './components/Elements/SocialIcon';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <Component /> */}
      {/* <TextInput /> */}
      {/* <Lists /> */}
      {/* <FlatList/> */}
      {/* <TouchableNative /> */}

      {/* <NativeStyle /> */}
      {/* <NativeAlert /> */}
      {/* <Images/> */}
      {/* <DiceApp/> */}
      {/* <AlertDialog/> */}
      {/* <DismissKeyboard/> */}
      {/* <Counter /> */}
      {/* <FlexBox /> */}

      {/* <ModalNative /> */}
      {/* <SwitchNative /> */}
      {/* <IndicatorAcrivity /> */}
      {/* <SectionListNative /> */}
      {/* <PrisableNative /> */}
      {/* <RefleshControll /> */}
      {/* <InputAccessory /> */}

      {/* <TouchableFeedback /> */}
      {/* <AppearnseNative /> */}
      {/* <Platforms /> */}
      {/* <AnimatedLibrary /> */}
      {/* <PlatformColorNative /> */}
      {/* <DrawerLayout /> */}
      {/* <Transforms /> */}

      {/* <BackHandlerNative /> */}
      {/* <ActionSheetIOSNative /> */}
      {/* <Prompt /> */}
      {/* <VibrationNative /> */}

      {/* <SliderNative /> */}

      {/* <AvatarNative /> */}
      {/* <BadgeNative /> */}
      {/* <ButtonComponent/> */}
      {/* <CheckBoxComponent/> */}
      {/* <InputComponent/> */}
      {/* <OverlayComponent/> */}
      {/* <Pricing/> */}
      {/* <FAB/> */}
      {/* <SpeedDialNative/> */}
      <SocialIcons/>

      

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
