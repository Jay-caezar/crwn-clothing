import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmNdx74ZJt3yvxTEWHT5StmUh9Tvf0diM",
  authDomain: "crwn-clothing-db-db9a7.firebaseapp.com",
  projectId: "crwn-clothing-db-db9a7",
  storageBucket: "crwn-clothing-db-db9a7.appspot.com",
  messagingSenderId: "114605972689",
  appId: "1:114605972689:web:1843083aca79e0b99979f0",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
