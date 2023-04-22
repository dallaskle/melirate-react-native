import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { saveWeight } from '../../dao/WeightDao';
import {Context} from '../../context/Context'
import { WeightEntry } from '../../models/WeightEntry';

const SaveWeightForm = () => {

  const {user, token} = useContext(Context);
  
  const [bodyFat, setBodyFat] = useState("");
  const [bodyWeight, setBodyWeight] = useState("");
  const [hydration, setHydration] = useState("");
  const [muscle, setMuscle] = useState("");
  const [timestamp, setTimestamp] = useState("")

  const saveMyWeight = async () => {
      const weightEntry = new WeightEntry(bodyWeight, bodyFat, muscle, hydration, timestamp);      
      saveWeight(token, user.id, weightEntry).then(res => console.log(res)).catch(err => console.log(err))
  };

  return (
    <><Text style={styles.title}>Manual Weight Entry</Text>
    <View style={styles.container}>
      
      <Text style={styles.label}>Body Fat:</Text>
      <TextInput
        style={styles.input}
        value={bodyFat}
        onChangeText={setBodyFat}
      />
      <Text style={styles.label}>Body Weight:</Text>
      <TextInput
        style={styles.input}
        value={bodyWeight}
        onChangeText={setBodyWeight}
      />
      <Text style={styles.label}>Hydration:</Text>
      <TextInput
        style={styles.input}
        value={hydration}
        onChangeText={setHydration}
      />
      <Text style={styles.label}>Muscle:</Text>
      <TextInput
        style={styles.input}
        value={muscle}
        onChangeText={setMuscle}
      />
      <Text style={styles.label}>Timestamp:</Text>
      <TextInput
        style={styles.input}
        value={timestamp}
        onChangeText={setTimestamp}
      />
      <Button title="Save" onPress={saveMyWeight} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  title: {
    padding: 8,
    fontSize: 28,
    fontWeight: '500'
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
});

export default SaveWeightForm;
