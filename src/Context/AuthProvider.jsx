import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    console.log(user)
    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const updateUserName =(userName)=>{
        return updateProfile(auth.currentUser,userName);
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const LogoutUser =()=>{
        return signOut(auth); 
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            if(currentUser)
            {
                setUser(currentUser);
            }
            else
            {
                setUser(null);
            }
        })
        return ()=> unSubscribe;
    },[])

    const userInfo={
        createUser,
        updateUserName,
        loginUser,
        user,
        LogoutUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;