import AsyncStorage from '@react-native-async-storage/async-storage';

// Save the JWT auth token to AsyncStorage
export const saveToken = async (token) => {
  if (token != null) {
    try {
      await AsyncStorage.setItem('melirate_jwt_token', token);
    } catch (error) {
      console.error('Error saving Melirate JWT auth token:', error);
    }
  }
};

// Get the JWT auth token from AsyncStorage
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('melirate_jwt_token');
    console.log('Token From Device: ' + token)
    return token;
  } catch (error) {
    console.error('Error getting Melirate JWT auth token:', error);
    return null;
  }
};

//Delete JWT auth token from Aysnc Storage
export const deleteTokenFromDevice = () => {
  AsyncStorage.removeItem('melirate_jwt_token').then(res => console.log('Token Deleted from Device')).catch(error => console.error('Error removing Melirate JWT auth token:', error))
}
