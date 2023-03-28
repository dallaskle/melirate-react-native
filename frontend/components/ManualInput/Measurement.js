import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { saveUserMeasurement } from '../../routes/Measurement';

const SaveMeasurementForm = () => {
  const [arms, setArms] = useState("");
  const [calves, setCalves] = useState("");
  const [chest, setChest] = useState("");
  const [shoulders, setShoulders] = useState("");
  const [stomach, setStomach] = useState("");
  const [thighs, setThighs] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const saveMeasurement = async () => {
    const measurementId = Math.floor(Math.random() * 100000);
    const isoTimestamp = timestamp ? timestamp : new Date().toISOString().slice(0, 10);
    const data = {
      arms,
      calves,
      chest,
      shoulders,
      stomach,
      thighs,
      measurementId,
      timestamp: isoTimestamp
    };
    saveUserMeasurement("12345", data)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Arms:</Text>
      <TextInput style={styles.input} value={arms} onChangeText={setArms} />
      <Text style={styles.label}>Calves:</Text>
      <TextInput style={styles.input} value={calves} onChangeText={setCalves} />
      <Text style={styles.label}>Chest:</Text>
      <TextInput style={styles.input} value={chest} onChangeText={setChest} />
      <Text style={styles.label}>Shoulders:</Text>
      <TextInput
        style={styles.input}
        value={shoulders}
        onChangeText={setShoulders}
      />
      <Text style={styles.label}>Stomach:</Text>
      <TextInput style={styles.input} value={stomach} onChangeText={setStomach} />
      <Text style={styles.label}>Thighs:</Text>
      <TextInput style={styles.input} value={thighs} onChangeText={setThighs} />
      <Text style={styles.label}>Timestamp:</Text>
      <TextInput style={styles.input} value={timestamp} onChangeText={setTimestamp} />
      <Button title="Save" onPress={saveMeasurement} />
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

export default SaveMeasurementForm;
