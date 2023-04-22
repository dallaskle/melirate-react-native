import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getUsersWeight } from '../../dao/WeightDao';
import { sortWeights } from '../../converters/WeightsToWeightCardData';
import AddWeight from '../Weight/AddWeight';
import {Context} from '../../context/Context'
import { WeightEntry } from '../../models/WeightEntry';
import Spinner from '../Spinner';
import { MELIRATE_LIGHTEST_GRAY } from '../../design/Colors';
import WeightCard from './WeightCard';

const WeightList = () => {

  const {token, user} = useContext(Context)

  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true)

  const refreshData = (weightEntry) => {
    weightEntry.userId = user.id;
    setData([weightEntry, ...data])
    getUsersWeightAsync()
  }

  const getUsersWeightAsync = async () => {
    const weightData = await getUsersWeight(token, user.id);
    if (weightData) {
      setData(sortWeights(weightData));
    } else {
      setLoadingData(false)
    }
  };

  useEffect(() => {
    if (token && user) {
      getUsersWeightAsync();
    }
  }, [user, token]);

  const renderItem = ({ item }) => <WeightCard weightData={item} />;

  if (!data.length) {
    return <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text style={styles.title}>Weights</Text>
        {loadingData ? 
          <Spinner />
          :
          <>
            <Text style={{textAlign: 'center', color: 'lightgray'}}>No weights added yet</Text>
        
            <View style={styles.addContainer}>
              <AddWeight token={token} user={user} data={new WeightEntry(76, .23, 38, .56)} first={true} />
            </View>
          </>
        }
      </View>;
  }

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.scrollContainer}
        ListHeaderComponent={<Text style={styles.title}>Weights</Text>}
      />
      <View style={styles.addContainer}>
        <AddWeight token={token} user={user} data={data[0]} refreshData={refreshData} />
      </View>
    </>
  );
};

export default WeightList;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: '0%',
  },
  addContainer: {
    backgroundColor: '#fff',
    width: '60%',
    marginHorizontal: '20%',
    paddingBottom: 20,
  },
  title: {
    padding: 8,
    fontSize: 28,
    fontWeight: '500'
  },
});