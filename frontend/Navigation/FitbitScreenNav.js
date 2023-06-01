import React from 'react'
import {StyleSheet, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FitFriends from '../screens/FitFriends/FitFriends';
import Logo from '../resources/images/logo.png'

const FitFriendsScreen = createNativeStackNavigator();

export default function FitFriendsScreenNav() {
    return(
        <FitFriendsScreen.Navigator
            screenOptions={{headerLeft: ()=> (<Image style={styles.logo} source={Logo} />)}}     
        >
            <FitFriendsScreen.Screen name="FitFriends" component={FitFriends} />
        </FitFriendsScreen.Navigator>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 33,
        width: 33,
        marginBottom: 3,
    }
})