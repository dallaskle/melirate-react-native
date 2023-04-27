import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HalfRowText = ({ text1, text2 }) => {
  return (
    <View style={styles.row}>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text}>{text2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 24,
    paddingHorizontal: 20,
    
  },
});

export default HalfRowText;
