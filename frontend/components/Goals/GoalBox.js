import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi Dallas, here's your current weight goals:</Text>

        <Text style={styles.text}>Body Weight: 72kg in 41 days</Text>
        <Text style={styles.text}>Body Fat %: 15% in 81 days</Text>
        <Text style={styles.text}>Muscle: 31kg in 71 days</Text>
        <Text style={styles.text}>Hydration: stay above 56%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    minHeight: '10%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    margin: 12,
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 12,
  },

  text: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 8,
    marginLeft: 4,
    marginRight: 4,
  },
});

export default GoalBox;
