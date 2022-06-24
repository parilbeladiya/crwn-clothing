import { initializeApp } from "firebase/app";

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4uOAtEmAOESJhl2HwfHdunCVfwNkEXe0",
  authDomain: "crwn-clothing-db-7d6d6.firebaseapp.com",
  projectId: "crwn-clothing-db-7d6d6",
  storageBucket: "crwn-clothing-db-7d6d6.appspot.com",
  messagingSenderId: "846383606089",
  appId: "1:846383606089:web:39b1245da8ea5c49b29298"
};


const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

