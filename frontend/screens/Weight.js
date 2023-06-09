import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import WeightCard from '../components/Weight/WeightCard';
import SplitWeightCard from '../components/Weight/SplitWeightCard'
import InputModal from '../components/InputModal';
import GoalBox from '../components/Goals/GoalBox'
import { GetWeightCardDataService } from '../services/GetWeightCardDataService';
import ImageUploader from '../components/Images/ImageUploader';
import { WeightEntry } from '../models/WeightEntry';

const Weight = () => {

  //States
  const [showInputModal, setShowInputModal] = useState(false)

  const inputList = [{title: "🧍 Body Weight 🧍", type: " kg"}, {title: "🏃 Body Fat % 🏃", type: "%"}, {title: "🏋️ Muscle 🏋️", type: " kg"}, {title: "💧 Hydration Level 💧", type: "%"},];
  const propertiesList = ["bodyWeight", "bodyFat", "muscle", "hydration"];

  const weightEntry = new WeightEntry();

  const [weights, setWeight] = useState()

  useEffect(async ()=> {
    const _weights = await GetWeightCardDataService('1');
    setWeight(_weights)
  }, [])

  if(!weights) {
    return <></>
  }

  return (
    <View style={styles.container}>     

      <GoalBox />

      <WeightCard width={'70%'} header={weights[0].header} amount={weights[0].amount} amountType={weights[0].amountType} changes={weights[0].changes} onPress={()=>displayInputModal('bodyWeight')} />

      <View style={styles.row}>
        <SplitWeightCard width={'40%'} borderWidth={.5} header={weights[1].header} amount={weights[1].amount} amountType={weights[1].amountType} changes={weights[1].changes} backgroundColor={'white'} />
        <SplitWeightCard width={'40%'} borderWidth={.5} header={weights[2].header} amount={weights[2].amount} amountType={weights[2].amountType} changes={weights[2].changes} backgroundColor={'white'} />
      </View>

      <SplitWeightCard width={'40%'} borderWidth={0} header={weights[3].header} amount={weights[3].amount} amountType={weights[3].amountType} changes={weights[3].changes} backgroundColor={'lightgray'} />
    

      {showInputModal == "bodyWeight" ?
        <>
          <InputModal visible={true} onClose={()=>setShowInputModal(false)} type={'Weight'} inputList={inputList} propertiesList={propertiesList} weightEntry={weightEntry} children={'just testing this'} />
        </>
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