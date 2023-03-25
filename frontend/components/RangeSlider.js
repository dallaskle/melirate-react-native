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
      <Text style={styles.label}>{value}</Text>
      <Slider
        style={styles.slider}
        minimumValue={startValue * .8}
        maximumValue={startValue * 1.2}
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
