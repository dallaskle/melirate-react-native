import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { MELIRATE_LIGHT_BLACK } from '../design/Colors';

const Button = ({ text, onPress, color, saving }) => {
  return (
    <TouchableOpacity onPress={onPress} style={color ? [styles.button, {backgroundColor: color}] : styles.button}>
      {saving ? <ActivityIndicator size="large" style={{ width: 75, height: 25 }} color={MELIRATE_LIGHT_BLACK} /> : <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.14,
    elevation: 2,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500'
  },
});

export default Button;
