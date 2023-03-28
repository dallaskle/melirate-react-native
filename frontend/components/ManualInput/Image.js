import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { saveUserImage } from '../../routes/Image';
import ImageUploader from '../Images/ImageUploader';

const SaveImageForm = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [view, setView] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const saveImage = async () => {
    const imageId = Math.floor(Math.random()*10000000000); // This can be generated on the server
    const timestamp = timestamp ? timestamp : new Date().toISOString().slice(0, 10); // Current date in ISO format
    const data = {
      imageUrl,
      view,
      imageId,
      timestamp
    };       
    saveUserImage("12345", data).then(res => console.log(res)).catch(err => console.log(err))
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Image URL:</Text>
      <ImageUploader takeURL={(val) => setImageUrl(val)}/>
      <Text style={styles.label}>View:</Text>
      <TextInput
        style={styles.input}
        value={view}
        onChangeText={setView}
      />
      <Text style={styles.label}>Timestamp:</Text>
      <TextInput
        style={styles.input}
        value={timestamp}
        onChangeText={setTimestamp}
      />
      <Button title="Save" onPress={saveImage} />
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

export default SaveImageForm;
