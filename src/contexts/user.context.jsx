import React from 'react'
import { createContext, useState ,useEffect} from 'react'
import {onAuthStateChangedListener,createUserDocumentFromAuth} from '../utils/firebase/firebase.utils'
// actual value you want to acces
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

});

export const UserProvider  = ({children})=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
useEffect(()=>{
    const unSubscribe = onAuthStateChangedListener((user)=>{
        if(user){
            createUserDocumentFromAuth(user)
        }
        setCurrentUser(user)
        console.log("user in context", user)
        
    });
    return unSubscribe;
})

    
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

