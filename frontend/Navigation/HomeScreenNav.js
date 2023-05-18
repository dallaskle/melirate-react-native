import React from 'react'
import {StyleSheet, Image} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Main from '../screens/Main';
import Logo from '../resources/images/logo.png'

const HomeScreen = createNativeStackNavigator();

export default function HomeScreenNav() {
    return(
        <HomeScreen.Navigator
            screenOptions={{headerLeft: ()=> (<Image style={styles.logo} source={Logo} />)}}
        >
            <HomeScreen.Screen name="Latest Weights" component={Main} />
        </HomeScreen.Navigator>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 33,
        width: 33,
        marginBottom: 3,
    }
})