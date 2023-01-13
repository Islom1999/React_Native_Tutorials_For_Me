import { View, Text, Platform, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Platforms = () => {
  return (
    <ScrollView>

      <Text style={styles.text}>OS</Text>
      <Text style={styles.value}>{Platform.OS}</Text>

      <Text style={styles.text}>OS Version</Text>
      <Text style={styles.value}>{Platform.Version}</Text>

      <Text style={styles.text}>isTV</Text>
      <Text style={styles.value}>{Platform.isTV.toString()}</Text>

      {Platform.OS === 'ios' && <> 
        <Text style={styles.text}>isTV</Text>
        <Text style={styles.value}>{Platform.isPad.toString()}</Text>
      </> }

      <Text style={styles.text}>Constants</Text>
      <Text style={styles.value}>
        {JSON.stringify(Platform.constants, null, 4)}
      </Text>
      

    </ScrollView>
  )
}

const styles = StyleSheet.create({
    value: {
        color: 'green',
        fontSize :25,
    },
    text: {
        color: 'blue',
        fontSize :25,
    }
});

export default Platforms