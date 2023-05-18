import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Main from '../screens/Main';

const HomeScreen = createNativeStackNavigator();

export default function HomeScreenNav() {
    return(
        <HomeScreen.Navigator>
            <HomeScreen.Screen name="Weight" component={Main} />
        </HomeScreen.Navigator>
    )
}