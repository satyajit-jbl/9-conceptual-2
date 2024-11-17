import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase.init';

export const authContext = createContext()

const AuthProvider = ({routes}) => {
    const googleProvider = new GoogleAuthProvider()

    // to save login data of user
    const[user, setUser] = useState(null)

    //function for register, login, google login
    const handleRegister = (email, password)=>{
        // as we use then in register, we have to return the function
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password)=>{
      return  signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleLogin = () => {
      return  signInWithPopup(auth, googleProvider)
    }
    //update profile of current user, call in register, user return befor callback functin
    const manageProfile=(name, image)=>{
        updateProfile(auth.currentUser,{
            displayName: name, photoURL: image
        })
    }
    const handleLogout=()=>{
        signOut(auth)
    }
    // to export auth data
    const authInfo = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
        manageProfile,
        user,
        setUser
        
    }

    // to observe user log in
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser);
            if(currentUser){
                setUser(currentUser)
            }
            else{
                setUser(null)
            }

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