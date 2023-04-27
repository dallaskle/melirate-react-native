import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const EditDelete = ({leftText, handleDeleteWeight}) => {
  return (
    <View style={styles.row}>
      <Text>{leftText}</Text>

      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconBtn}>
            <AntDesign name="edit" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconBtn} onPress={handleDeleteWeight}>
            <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  iconBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
});

export default EditDelete;
