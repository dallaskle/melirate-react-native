import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AbsoluteToPercentChange } from '../../converters/AbsoluteToPercentChange';
import Button from '../Button'

const WeightCard = (props) => {
  return (
    <View style={[styles.container, {width: props.width}]}>
        
        <View style={styles.main}>
            <Text style={styles.header}>{props.header}</Text>
            {props.amount ? <Text style={styles.weight}>{props.amount} {props.amountType}</Text> : <Button text={"ADD WEIGHT"} onPress={props.onPress} />}
        </View>

        <View style={styles.row}>
            <View style={styles.column}>
                <Text style={styles.label}>1D</Text>
                <Text style={styles.value}>{props.changes[0]}</Text>
                <Text style={styles.change}>{AbsoluteToPercentChange(props.changes[0], props.amount)}%</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>1W</Text>
                <Text style={styles.value}>{props.changes[1]}</Text>
                <Text style={styles.change}>{AbsoluteToPercentChange(props.changes[1], props.amount)}%</Text>
            </View>
            <View style={styles.column}>
                <Text style={styles.label}>1M</Text>
                <Text style={styles.value}>{props.changes[2]}</Text>
                <Text style={styles.change}>{AbsoluteToPercentChange(props.changes[2], props.amount)}%</Text>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12
  },
  main: {
    padding: 10,
    alignItems: 'center'
  },
  header: {
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 10,
  },
  weight: {
    fontSize: 48,
    fontWeight: '600',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
    borderTopColor: 'black',
    borderTopWidth: 1,
    width: '100%'
  },
  value: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 4,
  },
  column: {
    alignItems: 'center',
    padding: 12,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  change: {
    fontSize: 14,
    fontWeight: '300',
  },
});

export default WeightCard;