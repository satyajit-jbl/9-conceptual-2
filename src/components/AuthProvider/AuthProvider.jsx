import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.init';

export const authContext = createContext()

const AuthProvider = ({routes}) => {
    const googleProvider = new GoogleAuthProvider()

    // to save login data of user
    const[user, setUser] = useState(null)

    //function for register, login, google login
    const handleRegister = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
    }
    const handleLogout=()=>{
        signOut(auth)
    }
    // to export auth data
    const authInfo = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout
    }

    // to observe user log in
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);

             // to stop observer
            return ()=>{
                unsubscribe()
            }
        })
    },[])
    return (
        <div>
            <authContext.Provider value={authInfo}>
            {routes}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;