import AsyncStorage from '@react-native-async-storage/async-storage';

// Save the JWT auth token to AsyncStorage
export const saveUserOnDevice = async (user) => {
  try {
    user = JSON.stringify(user)
    await AsyncStorage.setItem('melirate_user', user);
  } catch (error) {
    console.error('Error saving Melirate User:', error);
  }
};

// Get the JWT auth token from AsyncStorage
export const getUserFromDevice = async () => {
  try {
    let user = await AsyncStorage.getItem('melirate_user');
    user = JSON.parse(user)
    return user;
  } catch (error) {
    console.error('Error getting Melirate User:', error);
    return null;
  }
};
