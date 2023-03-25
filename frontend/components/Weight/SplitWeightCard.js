import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const WeightCard = (props) => {
  return (
    <View style={[styles.container, {width: props.width, borderWidth: props.borderWidth}]}>
        
        <View style={styles.main}>
            <Text style={styles.header}>{props.header}</Text>
            <Text style={styles.weight}>{props.amount} {props.amountType}</Text>
        </View>

        <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.label}>1D</Text>
                <Text style={styles.value}>{props.changes[0]}</Text>
                <Text style={styles.change}>-0.1%</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>1W</Text>
                <Text style={styles.value}>{props.changes[1]}</Text>
                <Text style={styles.change}>-0.1%</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>1M</Text>
                <Text style={styles.value}>{props.changes[2]}</Text>
                <Text style={styles.change}>-0.1%</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 6,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: 'black',
  },
  main: {
    padding: 5,
    alignItems: 'center'
  },
  header: {
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 5,
  },
  weight: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5,
    borderTopColor: 'black',
    borderTopWidth: 1,
    width: '100%'
  },
  value: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 2,
  },
  column: {
    alignItems: 'center',
    padding: 8,
  },
  label: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
  },
  change: {
    fontSize: 12,
    fontWeight: '300',
  },
});

export default WeightCard;