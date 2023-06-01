import AsyncStorage from '@react-native-async-storage/async-storage';

// Save the user to AsyncStorage
export const saveUserOnDevice = async (user) => {
  if (user != null) {
    try {
      user = JSON.stringify(user)
      await AsyncStorage.setItem('melirate_user', user);
    } catch (error) {
      console.error('Error saving Melirate User:', error);
    }
  }
};

// Get the user from AsyncStorage
export const getUserFromDevice = async () => {
  try {
    let user = await AsyncStorage.getItem('melirate_user');
    user = JSON.parse(user)
    console.log('User From Device: ' + user)
    return user;
  } catch (error) {
    console.error('Error getting Melirate User:', error);
    return null;
  }
};

// Delete the user from AsyncStorage
export const deleteUserOnDevice = () => {
  AsyncStorage.removeItem('melirate_user').then(res => console.log('User Deleted from Device')).catch(error => console.error('Error removing Melirate User:', error));
};