import React from 'react'
import {StyleSheet, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Settings from '../screens/Settings/Settings'
import Logo from '../resources/images/logo.png'

const SettingsScreen = createNativeStackNavigator();

export default function SettingsScreenNav() {
    return(
        <SettingsScreen.Navigator
            screenOptions={{headerLeft: ()=> (<Image style={styles.logo} source={Logo} />)}}
        >
            <SettingsScreen.Screen name="Settings" component={Settings} />
        </SettingsScreen.Navigator>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 33,
        width: 33,
        marginBottom: 3,
    }
})