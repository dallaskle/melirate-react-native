import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Platform } from 'react-native';
import Weight from './frontend/pages/Weight'
import WeightManual from './frontend/components/ManualInput/Weight'
import MeasurementManual from './frontend/components/ManualInput/Measurement'
import ImageManual from './frontend/components/ManualInput/Image'
import Measurement from './frontend/pages/Measurement'
import Image from './frontend/pages/Image'
import { BACKGROUND_COLOR } from './frontend/design/Colors';
import ImageUploader from './frontend/components/Images/ImageUploader';

import { getUserWeight, getAllUserWeights, saveUserWeight } from './frontend/routes/Weight';
import { getUserMeasurement, getAllUserMeasurements, saveUserMeasurement } from './frontend/routes/Measurement';

import Menu from './frontend/components/Menu/Menu'
import WeightList from './frontend/components/Lists/Weight';
import MeasurementList from './frontend/components/Lists/Measurement';

import { ContextProvider } from './frontend/context/Context';
import Auth from './frontend/pages/Auth';
import { RouterContextProvider } from './frontend/context/RouterContext';
import Router from './frontend/pages/Router';

export default function App() {
  
  return (
    <ContextProvider>
      <RouterContextProvider>
        {Platform.OS === 'ios' ? <View style={{flex: 0.04, backgroundColor: BACKGROUND_COLOR}} /> : null}
        <Router />

      

      </RouterContextProvider>
    </ContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
