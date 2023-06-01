import React from 'react'
import {StyleSheet, Image} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Logo from '../resources/images/logo.png'
import Auth from '../screens/Auth';

const AuthNav = createNativeStackNavigator();

export default function AuthNavigator() {
    return(
        <AuthNav.Navigator
            screenOptions={{headerLeft: ()=> (<Image style={styles.logo} source={Logo} />)}}
        >
            <AuthNav.Screen name="Auth" component={Auth} />
        </AuthNav.Navigator>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 33,
        width: 33,
        marginBottom: 3,
    }
})