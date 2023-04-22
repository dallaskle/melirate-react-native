import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MeasurementCard = ({ measurement }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{measurement.timestamp}</Text>
      <View style={styles.row}>
        <Text style={styles.label}>Chest:</Text>
        <Text style={styles.value}>{measurement.chest} in</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Shoulders:</Text>
        <Text style={styles.value}>{measurement.shoulders} in</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Stomach:</Text>
        <Text style={styles.value}>{measurement.stomach} in</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Back:</Text>
        <Text style={styles.value}>{measurement.back} in</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Thighs:</Text>
        <Text style={styles.value}>{measurement.thighs} in</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Calves:</Text>
        <Text style={styles.value}>{measurement.calves} in</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Arms:</Text>
        <Text style={styles.value}>{measurement.arms} in</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
  value: {
    fontSize: 16,
  },
});

export default MeasurementCard;
