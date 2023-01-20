import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { CheckBox } from '@rneui/themed';

const CheckBoxComponent = () => {

    const [checked, setChecked] = React.useState(true);
    const [checked1, setChecked1] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);
    const toggleCheckbox1 = () => setChecked1(!checked1);

    const [selectedIndex, setIndex] = React.useState(0);

    const [checkedIcon, setState] = React.useState(true);
    const toggleCheckboxIcon = () => setState(!checkedIcon);

    const [checkedIcon1, setState1] = React.useState(true);
    const toggleCheckboxIcon1 = () => setState1(!checkedIcon1);

    return (
      <View>
        <View style={styles.flexContainer}>
            <CheckBox
            checked={checked}
            onPress={toggleCheckbox}
            // Use ThemeProvider to make change for all checkbox
            iconType="material-community"
            checkedIcon="checkbox-marked"
            uncheckedIcon="checkbox-blank-outline"
            checkedColor="red"
            />
            <CheckBox
            checked={checked1}
            onPress={toggleCheckbox1}
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            />
            <CheckBox
            checked={false}
            disabled
            iconType="material-community"
            checkedIcon="checkbox-outline"
            uncheckedIcon={'checkbox-blank-outline'}
            />
        </View>

        <View style={styles.flexContainer}>
            <CheckBox checked title="Label" />
            <CheckBox checked disabled title="Label" />
        </View>

        <View style={styles.flexContainer}>
            <CheckBox
                checked={selectedIndex === 0}
                onPress={() => setIndex(0)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
            />
            <CheckBox
                checked={selectedIndex === 1}
                onPress={() => setIndex(1)}
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
            />
        </View>

        <View style={styles.flexContainer}>
            <CheckBox checked size={18} />
            <CheckBox checked size={24} />
            <CheckBox checked size={32} />
        </View>

        <View style={styles.flexContainer}>
            <CheckBox
            checked={checkedIcon}
            checkedIcon="heart"
            uncheckedIcon="heart-o"
            checkedColor="red"
            onPress={toggleCheckboxIcon}
            />
            <CheckBox
            checked={checkedIcon1}
            checkedIcon="bookmark"
            uncheckedIcon="bookmark-o"
            checkedColor="heart"
            onPress={toggleCheckboxIcon1}
            />
        </View>

      </View>
    )
}

const styles = StyleSheet.create({
    flexContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        alignItems: 'center',
    }
});

export default CheckBoxComponent