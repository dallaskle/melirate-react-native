import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

const RangeSlider = ({ startValue, step, onChange }) => {
  const [value, setValue] = useState(startValue);

  const handleValueChange = (newValue) => {
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{value.toFixed(1)}</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={step}
        value={value}
        onValueChange={handleValueChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});

export default RangeSlider;
