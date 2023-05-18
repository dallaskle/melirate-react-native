import React from 'react'
import {StyleSheet, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Weight from '../components/Lists/Weight'
import Logo from '../resources/images/logo.png'

const WeightScreen = createNativeStackNavigator();

export default function WeightScreenNav() {
    return(
        <WeightScreen.Navigator
            screenOptions={{headerLeft: ()=> (<Image style={styles.logo} source={Logo} />)}}
        >
            <WeightScreen.Screen name="Weight List" component={Weight} />
        </WeightScreen.Navigator>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 33,
        width: 33,
        marginBottom: 3,
    }
})