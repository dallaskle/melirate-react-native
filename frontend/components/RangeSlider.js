import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Pressable } from 'react-native';
import { MELIRATE_LIGHT_GRAY, MELIRATE_LIGHTEST_GRAY } from '../design/Colors';

const RangeSlider = ({ startValue, step, type, property, weightEntry, range }) => {
  const [value, setValue] = useState(startValue);
  const [active, setActive] = useState(false);

  const handleValueChange = (newValue) => {
    active ? null : setActive(true)
    weightEntry[property] = newValue;
    setValue(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type.title}</Text>
      
      <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', }}>

          <TouchableOpacity style={styles.adjustBtn} onPress={()=>handleValueChange(value - (step * 10))}>
            <Text style={styles.secondaryAdjustBtnText}>--</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
            
            <TouchableOpacity style={styles.adjustBtn} onPress={()=>handleValueChange(value - step)}>
              <Text style={styles.adjustBtnText}>-</Text>
            </TouchableOpacity>

            <Pressable onPress={() => active ? null : handleValueChange(value)}>
              <Text style={active ? styles.label : [styles.label, {opacity: .35}]}>
                {(value * (type.type == '%' ? 100 : 1)).toString().substring(0,4)}{type.type}
              </Text>
            </Pressable>
            
            <TouchableOpacity style={styles.adjustBtn} onPress={()=>handleValueChange(value + step)}>
              <Text style={styles.adjustBtnText}>+</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.adjustBtn} onPress={()=>handleValueChange(value + (step * 10))}>
            <Text style={styles.secondaryAdjustBtnText}>++</Text>
          </TouchableOpacity>
      
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingVertical: 16,
    paddingHorizontal: 10
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 32,
    fontWeight: '300',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  adjustBtn: {

  },
  adjustBtnText: {
    fontSize: 32,
    fontWeight: '900',
    color: MELIRATE_LIGHT_GRAY,
    paddingHorizontal: 20,
  },
  secondaryAdjustBtnText: {
    fontSize: 24,
    fontWeight: '500',
    color: MELIRATE_LIGHTEST_GRAY,
    paddingVertical: 4,
    paddingRight: 0,
    paddingLeft: 15,
  },
  slider: {
    width: '100%',
    height: 40,
    
  },
});

export default RangeSlider;
