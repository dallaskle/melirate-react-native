import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { saveUserWeight } from '../../routes/Weight';

const SaveWeightForm = () => {
  const [bodyFat, setBodyFat] = useState("");
  const [bodyWeight, setBodyWeight] = useState("");
  const [hydration, setHydration] = useState("");
  const [muscle, setMuscle] = useState("");
  const [timestamp, setTimestamp] = useState("")

  const saveWeight = async () => {
      const weightId = Math.floor(Math.random()*10000000000); // This can be generated on the server
      const timestamp = timestamp ? timestamp : new Date().toISOString().slice(0, 10); // Current date in ISO format
      const data = {
        bodyFat,
        bodyWeight,
        hydration,
        muscle,
        weightId,
        timestamp
      };       
      saveUserWeight("12345", data).then(res => console.log(res)).catch(err => console.log(err))
  };

  return (
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
      <Button title="Save" onPress={saveWeight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
