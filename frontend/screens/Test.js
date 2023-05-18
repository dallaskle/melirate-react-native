import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import WeightCard from '../components/Weight/WeightCard';

const Test = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
    },
  });

export default Test;