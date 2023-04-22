import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { MELIRATE_GRAY } from '../design/Colors';

const Spinner = () => {

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={MELIRATE_GRAY} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Spinner;
