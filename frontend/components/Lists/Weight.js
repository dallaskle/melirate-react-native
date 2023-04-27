import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getUsersWeight } from '../../dao/WeightDao';
import { sortWeights } from '../../converters/WeightsToWeightCardData';
import AddWeight from '../Weight/AddWeight';
import {Context} from '../../context/Context'
import { WeightEntry } from '../../models/WeightEntry';
import Spinner from '../Spinner';
import WeightCard from './WeightCard';

const WeightList = () => {

  const {token, user} = useContext(Context)

  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(true)

  const refreshData = (weightEntry, type) => {
    weightEntry.userId = user.id;
    if (type == "ADD") {
      if (data) {
        setData([weightEntry, ...data])
      } else {
        setData([weightEntry])
      }
    } else if (type == "DELETE") {
      const newData = data.filter((entry) => entry.timestamp !== weightEntry.timestamp);
      setData(newData);
    }
  }

  const getUsersWeightAsync = async () => {
    console.log('running')
    const weightData = await getUsersWeight(token, user.id);
    if (weightData) {
      setData(sortWeights(weightData));
      setLoadingData(false)
    } else {
      setLoadingData(false)
    }
  };

  useEffect(() => {
    if (token && user) {
      getUsersWeightAsync();
    }
  }, [user, token]);

  const renderItem = ({ item }) => <WeightCard weightData={item} refreshData={refreshData} />;

  if (!data.length) {
    return <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text style={styles.title}>Weights</Text>
        {loadingData ? 
          <Spinner />
          :
          <>
            <Text style={{textAlign: 'center', color: 'lightgray'}}>No weights added yet</Text>
        
            <View style={styles.addContainer}>
              <AddWeight token={token} user={user} data={new WeightEntry()} first={true} />
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