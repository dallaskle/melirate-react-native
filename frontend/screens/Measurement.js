import React, {useState} from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import GoalBox from '../components/Goals/GoalBox';
import MelirateBody from '../resources/images/melirate_body.jpg'
import Button from '../components/Button'
import InputModal from '../components/InputModal';

const Measurement = () => {


  //States
  const [showInputModal, setShowInputModal] = useState(false)
  const displayInputModal = (updater) => {
    setShowInputModal(updater)
  }

  return (
    <>
    <View style={{backgroundColor: 'lightgray', paddingBottom: 20, alignItems: 'center'}}><GoalBox /></View>
    <ImageBackground
      source={MelirateBody}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.lineContainer}>
            <View style={styles.lineStart}>
                <Text style={styles.lineTypeText}>Shoulders</Text>
                <Text style={styles.lineAmountText}>39 cm</Text>
            </View>
        </View>
        <View style={styles.lineContainer}>
            <View style={styles.lineEnd}>
                <Text style={styles.lineTypeText}>Chest</Text>
                <Text style={styles.lineAmountText}>37 cm</Text>
            </View>
        </View>
        <View style={styles.lineContainer}>
            <View style={styles.lineStart}>
                <Text style={styles.lineTypeText}>Arms</Text>
                <Text style={styles.lineAmountText}>15 cm</Text>
            </View>
        </View>
        <View style={styles.lineContainer}>
            <View style={styles.lineEnd}>
                <Text style={styles.lineTypeText}>Stomach</Text>
                <Text style={styles.lineAmountText}>31 cm</Text>
            </View>
        </View>
        <View style={styles.lineContainer}>
            <View style={styles.lineStart}>
                <Text style={styles.lineTypeText}>Thighs</Text>
                <Text style={styles.lineAmountText}>23 cm</Text>
            </View>
        </View>
        <View style={styles.lineContainer}>
            <View style={styles.lineEnd}>
                <Text style={styles.lineTypeText}>Calves</Text>
                <Text style={styles.lineAmountText}>14 cm</Text>
            </View>
        </View>
        
      </View>

      <View style={{backgroundColor: 'rgba(0,0,0,0.17)', padding: 20}}>
        <Button text={"ADD MEASUREMENT"} onPress={()=>setShowInputModal('addMeasurement')} />
      </View>
      

    </ImageBackground>

    {showInputModal == "addMeasurement" ?
        <InputModal visible={true} onClose={()=>setShowInputModal(false)} children={'just testing this'} />
      : null}


    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.17)',
    paddingTop: '10%',
    paddingBottom: '50%'
  },
  lineContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 10,
  },
  lineStart: {
    width: '30%',
    marginRight: '70%',
  },
  lineEnd: {
    width: '30%',
    marginLeft: '70%'
  },
  lineTypeText: {
    color: 'gray',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '300'
  },
  lineAmountText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600'
  },
});

export default Measurement;