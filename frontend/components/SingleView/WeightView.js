import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { WieghtArrayToPropertyArray } from '../../converters/WeightArrayToProperyArray';
import { MELIRATE_GRAY } from '../../design/Colors';

const WeightView = ({ data, title, property }) => {

    let newData = []

    newData = WieghtArrayToPropertyArray(property, data)

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        horizontal
        data={newData}
        keyExtractor={item => item.index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.dateText}>{item.timestamp}</Text>
            <Text style={styles.itemText}>{`${item.property}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
  },
  dateText: {
    fontSize: 10,
    color: MELIRATE_GRAY
  },
});

export default WeightView;
