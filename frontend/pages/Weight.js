import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import WeightCard from '../components/Weight/WeightCard';
import SplitWeightCard from '../components/Weight/SplitWeightCard'
import InputModal from '../components/InputModal';

const Weight = () => {

  const weights = [
    {
      header: 'Body Weight',
      amount: 76.1,
      amountType: 'kg',
      changes: [-0.2, -0.2, -0.2],
    },
    {
      header: 'Body Fat %',
      amount: 23.4,
      amountType: '%',
      changes: [-0.2, -0.2, -0.2],
    },
    {
      header: 'Muscle',
      amount: 22.8,
      amountType: 'kg',
      changes: [-0.2, -0.2, -0.2],
    },
    {
      header: 'Hydration %',
      amount: 56.2,
      amountType: '%',
      changes: [-0.2, -0.2, -0.2],
    },
  ]

  //States
  const [showInputModal, setShowInputModal] = useState(false)
  const displayInputModal = (updater) => {
    setShowInputModal(updater)
  }

  return (
    <View style={styles.container}>
      <WeightCard width={'70%'} header={weights[0].header} amount={weights[0].amount} amountType={weights[0].amountType} changes={weights[0].changes} onPress={()=>displayInputModal('bodyWeight')} />

      <View style={styles.row}>
        <SplitWeightCard width={'40%'} borderWidth={.5} header={weights[1].header} amount={weights[1].amount} amountType={weights[1].amountType} changes={weights[1].changes} backgroundColor={'white'} />
        <SplitWeightCard width={'40%'} borderWidth={.5} header={weights[2].header} amount={weights[2].amount} amountType={weights[2].amountType} changes={weights[2].changes} backgroundColor={'white'} />
      </View>

      <SplitWeightCard width={'40%'} borderWidth={0} header={weights[3].header} amount={weights[3].amount} amountType={weights[3].amountType} changes={weights[3].changes} backgroundColor={'lightgray'} />
    

      {showInputModal == "bodyWeight" ?
        <InputModal visible={true} onClose={()=>setShowInputModal(false)} children={'just testing this'} />
      : null}

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      backgroundColor: 'lightgray'
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginBottom: 10,
      width: '100%'
    },
  });

export default Weight;