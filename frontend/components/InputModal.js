import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import RangeSlider from './RangeSlider';

const InputModal = ({ visible, onClose, children }) => {
  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <RangeSlider startValue={76.1} step={0.1} onChange={(e)=>console.log(e[0])} />
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    height: '60%',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  closeButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default InputModal;
