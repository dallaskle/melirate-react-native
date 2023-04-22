import React, {useState} from 'react';
import Button from '../Button';
import InputModal from '../InputModal';
import { WeightEntry } from '../../models/WeightEntry';
import { saveWeight } from '../../dao/WeightDao';
import { MELIRATE_GRAY } from '../../design/Colors';

const AddWeight = ({token, user, data, refreshData, first}) => {

    const inputList = [
        {title: "🧍 Body Weight 🧍", type: " kg", property: "bodyWeight",}, 
        {title: "🏃 Body Fat 🏃", type: "%", property: "bodyFat",}, 
        {title: "🏋️ Muscle 🏋️", type: "%", property: "muscle",}, 
        {title: "💧 Hydration Level 💧", type: "%", property: "hydration",},
    ];
    const propertiesList = ["bodyWeight", "bodyFat", "muscle", "hydration"];
    const weightEntry = new WeightEntry();

    const [showInputModal, setShowInputModal] = useState(false)
    const [saving, setSaving] = useState(false)

    const saveWeightEntry = () => {
        setShowInputModal(false)
        setSaving(true)
        saveWeight(token, user.id, weightEntry).then(res => {
          refreshData(weightEntry)
          setSaving(false)
        })
    }

  return (
    <>
        <Button text="ADD WEIGHT" saving={saving} onPress={saving ? null : () => setShowInputModal(true)} color={MELIRATE_GRAY} />
        <InputModal 
          visible={showInputModal} 
          data={data} 
          onSave={saveWeightEntry} 
          onClose={()=>setShowInputModal(false)} 
          type={'Weight'} inputList={inputList} 
          propertiesList={propertiesList} 
          weightEntry={weightEntry} 
          first={first} 
        />
    </>
    
  );
};

export default AddWeight;
