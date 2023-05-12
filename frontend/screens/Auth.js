import React, { useState, useContext } from 'react'
import Login from '../components/Auth/Login';
import Spinner from '../components/Spinner';

import { loginUser, signupUser } from '../dao/UserDao';
import {Context} from '../context/Context'
import {RouterContext} from '../context/RouterContext'
import { Alert } from 'react-native';
import { saveToken } from '../services/Auth/GetTokenFromDevice';


const Auth = () => {

    const [loading, setLoading] = useState(false);

    const [isLogin, setIsLogin] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { updateUserData, updateToken } = useContext(Context);
    const { updateRouter } = useContext(RouterContext);

    const handleClick = () => {
        // Implement your own signup logic here
        if (isLogin) {

            setLoading(true)

            loginUser(email,password).then(data => {
                updateToken(data.token)
                updateUserData(data.user)
                setLoading(false)
                updateRouter({name: 'WeightList', label: 'Weight List'})
            }).catch(err => {
                setLoading(false)
            })
            
        } else {
            setLoading(true)
            signupUser(email, password).then(data => {
                updateToken(data.token)
                updateUserData(data.user)
                saveToken(data.token)
                if(!data.token){
                    setLoading(false)
                }
                //route to new page
                updateRouter({name: 'WeightList', label: 'Weight List'})
            }).catch(err => {
                setLoading(false)
            })
        }

    }

    if (loading) {
        return <Spinner />
    }
    
    return (
            <Login 
                setIsLogin={setIsLogin}
                setEmail={setEmail} 
                setPassword={setPassword} 
                handleClick={handleClick} 
                isLogin={isLogin}
            />
    )
}

export default Auth;