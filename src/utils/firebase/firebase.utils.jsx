
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged 
  } from 'firebase/auth';
  import { useNavigate } from "react-router-dom";

  
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBiBzE9rJ9j-p26uMAQEhT6cUE7QWKymWw",
  authDomain: "crwn-clothing-db-4a7e2.firebaseapp.com",
  projectId: "crwn-clothing-db-4a7e2",
  storageBucket: "crwn-clothing-db-4a7e2.appspot.com",
  messagingSenderId: "566238817855",
  appId: "1:566238817855:web:b3d4e1257d1413fc76d28a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//     if (!userAuth) return;
  
//     console.log(userAuth);
//   };
  
  export const auth = getAuth();
  export const signInWithGooglePopup =async () => {
    try{

     await signInWithPopup(auth, provider)
      localStorage.setItem("username", JSON.stringify(auth));
      // Navigate('/home')
  
      console.log("auth",auth)
  
      console.log("Provider," , provider)
    }catch(err){
      console.log("error with sigin google", err.message)

    }
    
    }

  //firbase database
export const db = getFirestore();


// manually User add in the Form
export const createUserDocumentFromAuth = async (userAuth,additionalInformation = {}) => {

    // if user is not here then return nothing
  if (!userAuth) return;
// console.log("usercome from inputs",additionalInformation)
 // rafrance of data base users is the name of collection
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
      
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

//Sign in With Email and Password which is stord in FireDatabase

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};


//sign out user

export const signOutUser =async ()=>{
 await signOut(auth);


}

export const onAuthStateChangedListener = (callback)=>{
  onAuthStateChanged(auth,callback)
  // console.log("callbackfunction",callback)
}