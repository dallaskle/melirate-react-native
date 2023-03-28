import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const ImagePage = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.subtitle}>Front</Text>
      <View style={styles.row}>
       {true ? <View style={styles.image}><TouchableOpacity><Text>Add Front Photo</Text></TouchableOpacity></View> : <Image style={styles.image} source={require('../resources/images/melirate_body.jpg')} />}
        <Image style={styles.image} source={require('../resources/images/melirate_body.jpg')} />
        <Image style={styles.image} source={require('../resources/images/melirate_body.jpg')} />
      </View>
      <Text style={styles.subtitle}>Back</Text>
      <View style={styles.row}>
        <Image style={styles.image} source={require('../resources/images/melirate_body.jpg')} />
        <Image style={styles.image} source={require('../resources/images/melirate_body.jpg')} />
        <Image style={styles.image} source={require('../resources/images/melirate_body.jpg')} />
      </View>
      <Text style={styles.subtitle}>Side</Text>
      <View style={styles.row}>
        <Image style={styles.image} source={require('../resources/images/melirate_body.jpg')} />
        <Image style={styles.image} source={require('../resources/images/melirate_body.jpg')} />
        <Image style={styles.image} source={require('../resources/images/melirate_body.jpg')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10,
    width: '100%'
  },
  image: {
    width: '33%',
    minHeight: 150,
    borderRadius: 5,
  },
});

export default ImagePage;
