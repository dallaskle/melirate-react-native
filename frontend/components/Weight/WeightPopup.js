import React, { useState, useContext } from 'react';
import { Modal, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { deleteWeight } from '../../dao/WeightDao';
import { Context } from '../../context/Context';
import EditDelete from './EditDelete';
import Button from '../Button'
import HalfRowText from '../Pieces/HalfRowText';
import Spinner from '../Spinner';

const WeightPopup = ({ visible, onClose, weightData, refreshData }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const [deleting, setDeleting] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    onClose && onClose();
  };

  const {user, token} = useContext(Context)

  const handleDeleteWeight = () => {
    refreshData(weightData, "DELETE")
    setDeleting(true)
    deleteWeight(token, user.id, weightData).then (res => {
      setModalVisible(false)
    }).catch(err => {
      refreshData(weightData, "ADD")
      setModalVisible(false)
      setDeleting(false)
    })
  }

  return (
    <Modal
      visible={modalVisible}
      transparent={true}
      onRequestClose={toggleModal}
      animationType="fade"
    >
      <View style={styles.container}>

        {deleting ? 
          <Spinner />
        :

        <>
        <View style={styles.modalContainer}>

            <EditDelete leftText={weightData.timestamp} handleDeleteWeight={handleDeleteWeight} />

            <View style={styles.group}>
              <View style={styles.groupItem}>
                <Text style={styles.groupItemTitle}>Body Weight</Text>
                <Text style={styles.weightText}>{weightData.bodyWeight ? `${weightData.bodyWeight.toFixed(1)} kg` : null}</Text>
              </View>
              <View style={styles.groupItem}>
                <Text style={styles.groupItemTitle}>Body Fat</Text>
                <HalfRowText text1={weightData.bodyFat ? `${(weightData.bodyFat * weightData.bodyWeight).toFixed(1)} kg` : null} text2={weightData.bodyFat ? `${(weightData.bodyFat * 100).toFixed(1)}%` : null} />
                <Text></Text>
              </View>
              <View style={styles.groupItem}>
                <Text style={styles.groupItemTitle}>Muscle Mass</Text>
                <HalfRowText text1={weightData.muscle ? `${(weightData.muscle * weightData.bodyWeight).toFixed(1)} kg` : null} text2={weightData.muscle ? `${(weightData.muscle * 100).toFixed(1)}%` : null} />
                <Text></Text>
              </View>
              <View style={styles.groupItem}>
                <Text style={styles.groupItemTitle}>Hydration Level</Text>
                <HalfRowText text1={weightData.hydration ? `${(weightData.hydration * weightData.bodyWeight).toFixed(1)} kg` : null} text2={weightData.hydration ? `${(weightData.hydration * 100).toFixed(1)}%` : null} />
              </View>
            </View>

            <Button text="Close" onPress={toggleModal} />   

        </View>
        </>}

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    width: '90%', 
  },
  group: {
    flexDirection: 'column',
    width: '100%',
    padding: 20, 
  },
  groupItem: {
    paddingVertical: 8,
    alignItems: 'center'
  },
  groupItemTitle: {
    paddingTop: 4, 
    paddingBottom: 12, 
    fontSize: 18,
    fontWeight: '300',

  },  
  weightText: {
    fontSize: 24,
    paddingHorizontal: 20,
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
