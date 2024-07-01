import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {

const [user, setUser] = useState(null); 
const [loading, setLoading] = useState(true);

useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
       setUser(currentUser);
       console.log("observing current user",currentUser);
    })
    return () =>{
        unSubscribe();
    }
},[])
const googleProvider = new GoogleAuthProvider();
const createUser = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
    return signOut(auth);
}


const updateUserInfo =(profile) =>{
    return updateProfile(auth.currentUser ,profile)
}
const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

const authInfo = { user, createUser, signInUser, logOut, signInWithGoogle ,updateUserInfo}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.PropTypes = {
    children: PropTypes.node
}