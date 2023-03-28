import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Platform } from 'react-native';
//import Weight from './frontend/pages/Weight'
import Weight from './frontend/components/ManualInput/Image'
import Measurement from './frontend/pages/Measurement'
import Image from './frontend/pages/Image'
import { BACKGROUND_COLOR } from './frontend/design/Colors';
import ImageUploader from './frontend/components/Images/ImageUploader';

import { getUserWeight, getAllUserWeights, saveUserWeight } from './frontend/routes/Weight';
import { getUserMeasurement, getAllUserMeasurements, saveUserMeasurement } from './frontend/routes/Measurement';

export default function App() {

  //getUserWeight("12345", "67890").then(res => console.log(res))
  //getAllUserWeights("12345").then(res => console.log(res))
  const params1 = {
    bodyFat: 0.23 ,
    bodyWeight: 77,
    muscle: 36.5,
    hydration: .56
  }
  //saveUserWeight("12345", params1).then(res => console.log(res))
  const meas1 = {
    arms: 14,
    calves: 12,
    chest: 37,
    shoulders: 23, 
    stomach: 31,
    thighs: 25
  }
  //getUserMeasurement("12345", "67893").then(res => console.log(res))
  //getAllUserMeasurements("12345").then(res => console.log(res))
  //saveUserMeasurement("12345", meas1).then(res => console.log(res))

  const [router, setRouter] = useState('')
  
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ? <View style={{flex: 0.07, backgroundColor: BACKGROUND_COLOR}} /> : null}
      {router == 'Weight' ? <Weight /> : null}
      {router == 'Measurement' ? <Measurement /> : null}
      {router == 'Image' ? <Image /> : null}
      
      <View><Button title={"Weight"} onPress={()=>setRouter('Weight')} /><Button title={"Measurement"} onPress={()=>setRouter('Measurement')} /><Button title={"Image"} onPress={()=>setRouter('Image')} /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
