import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Platform } from 'react-native';
import { BACKGROUND_COLOR } from './frontend/design/Colors';
import { ContextProvider } from './frontend/context/Context';
import { RouterContextProvider } from './frontend/context/RouterContext';
import Router from './frontend/Router';

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
