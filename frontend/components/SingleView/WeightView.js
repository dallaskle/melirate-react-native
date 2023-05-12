import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { WieghtArrayToPropertyArray, separateByProperty } from '../../converters/WeightArrayToProperyArray';
import { MELIRATE_GRAY } from '../../design/Colors';
import SingleLine from './SingleLine'

const WeightView = ({ data, title, property }) => {

    const [newData] = useState(WieghtArrayToPropertyArray(property, data))
    const [graphData] = useState(separateByProperty(newData, "timestamp", "property"))

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        horizontal
        data={newData}
        keyExtractor={item => `${item.timestamp}${item.property}`}
        renderItem={({ item }) => (
          <View key={`${item.timestamp}${item.property}`} style={styles.itemContainer}>
            <Text style={styles.dateText}>{item.timestamp}</Text>
            <Text style={styles.itemText}>{`${item.property}`}</Text>
          </View>
        )}
      />
      <SingleLine graphData={graphData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  heading: {
    fontSize: 16,
    fontWeight: '300',
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
