import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Test from '../screens/Test';
import HomeScreenNav from './HomeScreenNav';
import WeightScreenNav from './WeightScreenNav';
import FitbitScreen from './FitbitScreen'
import SettingsScreen from './SettingsScreen'

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={{headerShown: false}}
        >   
            <Tab.Screen name="Weight" component={HomeScreenNav} />
            <Tab.Screen name="WeightList" component={WeightScreenNav} />
            <Tab.Screen name="FitFriends" component={FitbitScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}