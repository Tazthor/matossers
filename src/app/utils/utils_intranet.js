'use client';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, deleteDoc, doc, getDocs, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_authDomain,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_databaseURL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_appId,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_measurementId,
};
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


export async function deleteCasteller(dni) {
  try {
    const castellerRef = doc(db, "castellers", dni);
    await deleteDoc(castellerRef);
    return { success: true };
  } catch (error) {
    console.error("Error esborrant el casteller:", error);
    return { success: false, error: error.message };
  }
}

export async function updateCasteller(dni, updatedData) {
  try {
    const castellerRef = doc(db, "castellers", dni);
    await setDoc(castellerRef, updatedData, { merge: true });
    return { success: true };
  } catch (error) {
    console.error("Error actualitzant el casteller:", error);
    return { success: false, error: error.message };
  }
}