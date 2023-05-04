import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGtJC973MQxS5V7ZISBHfjmZICFAxz4g4",
  authDomain: "matossers.firebaseapp.com",
  databaseURL: "https://matossers.firebaseio.com",
  projectId: "matossers",
  storageBucket: "matossers.appspot.com",
  messagingSenderId: "76874283575",
  appId: "1:76874283575:web:4995df3102552b0dde1db2",
  measurementId: "G-Y1L5YSPM4B",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function loginEmailPassword (email, pass) {
    const loginEmail = email
    const loginPassword = pass
    try{
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    return ({user:userCredential.user})
    }
    catch (error) {
        return ({error:error})
    }
}

export async function createAccount (email, pass) {
    const loginEmail = email
    const loginPassword = pass
    try{
    const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword)
    return ({user:userCredential.user})
    }
    catch (error) {
        return ({error:error})
    }
}