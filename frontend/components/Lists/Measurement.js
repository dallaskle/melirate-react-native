import React from 'react';
import { View, ScrollView } from 'react-native';
import MeasurementCard from './MeasurementCard';
import {getUsersMeasurement} from '../../dao/MeasurementDao'

const MeasurementList = () => {

  const fakeMeasurementData = [
    {
        timestamp: '2023-03-24',
        chest: 41,
        shoulders: 31,
        stomach: 31,
        back: .38,
        thighs: 23,
        calves: 14,
        arms: 14,
        user_id: 1,
    },
    {
        timestamp: '2023-03-23',
        chest: 41,
        shoulders: 31,
        stomach: 31,
        back: 38,
        thighs: 23,
        calves: 14,
        arms: 14,
        user_id: 1,
    },
    {
        timestamp: '2023-03-17',
        chest: 41.5,
        shoulders: 31.5,
        stomach: 31.5,
        back: 38.5,
        thighs: 23.5,
        calves: 14.5,
        arms: 14.5,
        user_id: 1,
    },
    {
        timestamp: '2023-02-24',
        chest: 41,
        shoulders: 31,
        stomach: 31,
        back: .38,
        thighs: 23,
        calves: 14,
        arms: 14,
        user_id: 1,
    },
]

  return (
    <ScrollView>
      {fakeMeasurementData.map((measurement, index) => (
        <View key={index}>
          <MeasurementCard measurement={measurement} />
        </View>
      ))}
    </ScrollView>
  );
};

export default MeasurementList;
