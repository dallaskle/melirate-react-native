import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { signup, login } from "../routes/auth";

export const signupUser = async (email, password) => {
    const res = await signup(email, password)
    if (res.status == 200) {
        return res.data
    }
    return res.data
}

export const loginUser = async (email, password) => {
    const res = await login(email, password)
    return res.data;
};