import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native';
import RangeSlider from './RangeSlider';

const InputModal = ({ visible, data, onSave, onClose, type, inputList, propertiesList, weightEntry }) => {

  const getDefault = (property) => {
    if (property == 'bodyWeight') {
      return 76
    } else if (property == 'bodyFat') {
      return .23
    } else if (property == 'muscle') {
      return .37
    } else if (property == 'hydration') {
      return .56
    }
  }
  const getStep = (property) => {
    if (property == 'bodyWeight') {
      return .1
    } else if (property == 'bodyFat') {
      return .001
    } else if (property == 'muscle') {
      return .001
    } else if (property == 'hydration') {
      return .001
    }
  }

  return (
    <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {inputList.map((amt, i) => {
              let property = inputList[i].property;
              let num = data[inputList[i].property];
              return <RangeSlider 
                        key={i} 
                        weightEntry={weightEntry} 
                        property={property} 
                        startValue={num ? num : getDefault(property)} 
                        step={getStep(property)} 
                        type={amt} 
                      />
          })}
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onSave} style={styles.saveButton}>
            <Text style={styles.closeButtonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cancel</Text>
          </TouchableOpacity>
          </View>
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
    minHeight: '20%',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 24,
  },
  saveButton: {
    paddingTop: 10,
    paddingBottom: 24,
  },
  closeButton: {
    paddingTop: 10,
    paddingBottom: 24,
    bottom: 0,
    right: 0,
    position: 'absolute'
  },
  closeButtonText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default InputModal;
