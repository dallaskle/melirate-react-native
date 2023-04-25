import React, { useState } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const WeightPopup = ({ visible, onClose, weightData }) => {
  const [modalVisible, setModalVisible] = useState(visible);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    onClose && onClose();
  };

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      onRequestClose={toggleModal}
      animationType="fade"
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>

          <View>
            <View>
              <Text>Body Weight</Text>
              <Text>{weightData.bodyWeight ? `${weightData.bodyWeight.toFixed(1)} kg` : null}</Text>
            </View>
            <View>
              <Text>Body Fat</Text>
              <Text>{weightData.bodyFat ? `${(weightData.bodyFat * 100).toFixed(1)}%` : null}</Text>
            </View>
            <View>
              <Text>Muscle Mass</Text>
              <Text>{weightData.muscle ? `${(weightData.muscle * 100).toFixed(1)}%` : null}</Text>
            </View>
            <View>
              <Text>Hydration Level</Text>
              <Text>{weightData.hydration ? `${(weightData.hydration * 100).toFixed(1)}%` : null}</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Text>Compare To --></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default WeightPopup;
