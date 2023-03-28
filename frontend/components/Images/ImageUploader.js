import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { BASE_URL } from '../../routes/url';
import { saveUserImage, getUserImage } from '../../routes/Image';

export default function ImageUploader(props) {
  const [image, setImage] = useState(null);

  const getImage = () => {
    getUserImage("12345", "24355").then(res => {
      console.log(res)
      setImage(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri)
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    props.takeURL(uri);
    /*saveUserImage("12345", {
      imageUrl: uri,//Buffer.from(uri, "base64").toString(),
      view: "front"
    }).then(res => console.log(res)).catch(err => {
      console.log(err)
    })*/
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <Button title="GET IMAGE" onPress={getImage} />
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 200, height: 200, marginTop: 20 }}
        />
      )}
    </View>
  );
}
