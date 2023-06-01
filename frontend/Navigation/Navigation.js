import React, {useEffect, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Test from '../screens/Test';
import Tabs from './Tabs'
import { getToken } from '../services/Auth/GetTokenFromDevice';
import { getUserFromDevice } from '../services/GetUserFromDevice';
import { getUserFromToken_userDao } from '../dao/UserDao';
import { Context } from '../context/Context';
import AuthNavigator from './AuthNav';

export default function Navigation() {

    const { token, updateToken, updateUserData, initializeWeightsData } = useContext(Context)

    useEffect(()=>{
        getToken().then(res => {
          updateToken(res)
          getUserFromToken_userDao(res).then(loginRes => {
            if(loginRes.user) {
              updateUserData(loginRes.user)
            }
          })
        })
        getUserFromDevice().then(res => {
          updateUserData(res)
        })
        initializeWeightsData()
      },[])

    return(
        <NavigationContainer>

            
            {token == null ? 
              /* Auth Navigator  */
              <AuthNavigator />
            : 
              /* App Navigator (Logged in)  */
              <Tabs />
            }

            {/* Onboarding Navigator  */}

            

        </NavigationContainer>
    )
}