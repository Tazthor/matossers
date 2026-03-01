'use client';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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

export { app, db, storage };

export async function getDataCollection(colleccio) {
  const colRef = collection(db, colleccio);
  try {
    const docsSnap = await getDocs(colRef);
    return docsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error obtenint dades:", error);
    return [];
  }
}

export async function getImages(imagePath) {
  if (!imagePath) return "";
  try {
    return await getDownloadURL(ref(storage, imagePath));
  } catch (error) {
    console.error("Error obtenint imatge:", error);
    return "";
  }
}

export async function setCollection(data, collectionName) {
  const documentId = data.dni.toString().trim().toUpperCase();

  try {
    const dbRef = doc(db, collectionName, documentId);
    await setDoc(dbRef, data);
    return true;
  } catch (error) {
    console.error("Error a Firestore (Permissions o Config):", error);
    throw error; 
  }
}

export async function transformDataWithDoc(data) {
  return Promise.all(data.map(async (item) => ({
    ...item,
    docUrl: await getImages(item.doc)
  })));
}

export async function transformDataWithImages(data) {
  return Promise.all(data.map(async (item) => ({
    ...item,
    imageUrl: await getImages(item.doc)
  })));
}

export async function transformDataWithIcon(data) {
  return Promise.all(data.map(async (item) => ({
    ...item,
    iconUrl: await getImages(item.icon)
  })));
}


