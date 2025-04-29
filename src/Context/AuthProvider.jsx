import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';


const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();


    const signInWithGoogle =()=>{
        return signInWithPopup(auth,provider);
    }

    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const updateUserName =(userName)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,userName);
    }

    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const LogoutUser =()=>{
        setLoading(true);
        return signOut(auth); 
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=> unSubscribe();
    },[])

    const userInfo={
        createUser,
        updateUserName,
        loginUser,
        loading,
        user,
        LogoutUser,
        signInWithGoogle
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