import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Platform } from 'react-native';
import Weight from './frontend/pages/Weight'
import { BACKGROUND_COLOR } from './frontend/design/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ? <View style={{flex: 0.05, backgroundColor: BACKGROUND_COLOR}} /> : null}
      <Weight />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
