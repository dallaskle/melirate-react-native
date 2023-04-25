import React, {useState} from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MELIRATE_LIGHTEST_GRAY } from '../../design/Colors';
import WeightPopup from '../Weight/WeightPopup';

const WeightCard = ({ weightData }) => {

  const [show, setShow] = useState(false)

  return (
    <>
    <TouchableOpacity onPress={()=>setShow(true)} style={styles.card}>
      <Text style={styles.timestamp}>{weightData.timestamp}</Text>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Weight</Text>
          <Text style={styles.value}>{weightData.bodyWeight ? `${weightData.bodyWeight.toFixed(1)} kg` : null}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Body Fat</Text>
          <Text style={styles.value}>{weightData.bodyFat ? `${(weightData.bodyFat * 100).toFixed(1)}%` : null}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Muscle Mass</Text>
          <Text style={styles.value}>{weightData.muscle ? `${(weightData.muscle * 100).toFixed(1)}%` : null}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Hydration</Text>
          <Text style={styles.value}>{weightData.hydration ? `${(weightData.hydration * 100).toFixed(1)}%` : null}</Text>
        </View>
      </View>
    </TouchableOpacity>
    {show ? <WeightPopup visible={true} onClose={()=>setShow(false)} weightData={weightData} /> : null}
    </>
  );
};

export default WeightCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: MELIRATE_LIGHTEST_GRAY,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 8,
    marginVertical: 6,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  timestamp: {
    fontSize: 18,
    fontWeight: '200',
    marginBottom: 10,
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 8,
    width: '50%',
  },
  label: {
    fontSize: 14,
    fontWeight: '300',
  },
  value: {
    fontSize: 20,
    fontWeight: '500',
  }
});