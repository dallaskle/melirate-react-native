import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { signup, login, getUserFromToken } from "../routes/auth";

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

export const getUserFromToken_userDao = async (token) => {
    const res = await getUserFromToken(token);
    return res.data
}