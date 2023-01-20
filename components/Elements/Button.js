import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {Button, LinearGradient, Icon} from '@rneui/themed'

const ButtonComponent = () => {
  return (
    <View style={styles.container}>
      <Text>ButtonComponent</Text>

      <View style={styles.flexContainer}>
        <Button title="Solid" />
        <Button title="Outline" type="outline" />
        <Button title="Clear" type="clear" />
      </View>

      <View style={styles.flexContainer}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </View>

      <View style={styles.flexContainer}>
        <Button>Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
      </View>

      <View style={styles.flexContainer}>
        <Button title="Solid" disabled />
        <Button title="Outline" type="outline" disabled />
        <Button title="Clear" type="clear" disabled />
      </View>

      <View style={styles.flexContainer}>
        <Button radius={'sm'} type="solid">
            Save
            <Icon name="save" color="white" />
        </Button>
      </View>

      <View style={styles.flexContainer}>
        <Button title="Solid" type="solid" loading />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    flexContainer: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        alignItems: 'center',
    }
});

export default ButtonComponent