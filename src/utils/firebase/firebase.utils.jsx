
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
  } from 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    console.log(userAuth);
  };
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);