import React, {useContext} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import Button from '../Button'
import { Context } from '../../context/Context'
 
const LogoutButton = () => {

    const {logoutUser} = useContext(Context);

    return(
        <View style={styles.container}>
            <Button text="Logout" onPress={logoutUser} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      
    },
  });

export default LogoutButton;