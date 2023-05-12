import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getGreeting } from './Greetings';
import { getRandomQuote } from '../../resources/texts/inspirational';
import { MELIRATE_GRAY, MELIRATE_LIGHT_GRAY } from '../../design/Colors';

const MainBanner = () => {

    const [greeting] = useState(getGreeting())
    const [quote] = useState(getRandomQuote())

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{greeting}</Text>
      <View style={styles.card}>
        <Text style={styles.quote}>
          {quote}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 8,
    paddingBottom: 20,
    
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: MELIRATE_LIGHT_GRAY,
    
  },
  quote: {
    fontSize: 18,
    textAlign: 'left',
    marginVertical: 20,
    color: 'black',
    fontWeight: '200'
  },
});

export default MainBanner;
