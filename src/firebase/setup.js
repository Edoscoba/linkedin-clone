
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAk9xWmuKuJosxJbjui5QiC0mbEelm7ggA",
  authDomain: "linkedin-clone-80a0e.firebaseapp.com",
  projectId: "linkedin-clone-80a0e",
  storageBucket: "linkedin-clone-80a0e.appspot.com",
  messagingSenderId: "831579586068",
  appId: "1:831579586068:web:0a170bdb912c92263ab101"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)