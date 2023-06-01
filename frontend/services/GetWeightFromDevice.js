import AsyncStorage from '@react-native-async-storage/async-storage';

// Save the weight to AsyncStorage
export const saveWeightOnDevice = async (weight) => {
  if (weight != null) {
    console.log('GetWeightFromDevice - saveWeightOnDevice')
  try {
    weight = JSON.stringify(weight)
    await AsyncStorage.setItem('melirate_weight', weight);
  } catch (error) {
    console.log('Error saving Melirate Weight:', error);
  }
  }
};

// Get the weight from AsyncStorage
export const getWeightFromDevice = async () => {
  try {
    let weight = await AsyncStorage.getItem('melirate_weight');
    weight = JSON.parse(weight)
    console.log('Weight From Device: ' + weight)
    return weight;
  } catch (error) {
    console.log('Error getting Melirate Weight:', error);
    return null;
  }
};

// Delete the weight to AsyncStorage
export const deleteAllWeightOnDevice = async () => {
  console.log('GetWeightFromDevice - deleteAllWeightOnDevice')
  AsyncStorage.removeItem('melirate_weight').then(res => console.log('Weight Deleted from Device')).catch(error => console.error('Error removing Melirate Weight:', error))
};