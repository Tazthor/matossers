'use client';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDocs, setDoc, Timestamp} from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

export function initApp() {
  const app = initializeApp(firebaseConfig);
  return app;
}

export async function getDataCollection(app, colleccio) {
  const db = getFirestore(app);
  const colRef = collection(db, colleccio);
  const data = [];
  try {
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach((doc) => {
      data.push(doc.data());
    });
  } catch (error) {
    console.log(error);
  }

  return data;
}

export async function transformDataWithDoc(data) {
  for await (var item of data){
    item.docUrl = await getImages(item.doc)
  }
return data
}

export async function transformDataWithImages(data) {
  for await (var item of data){
    item.imageUrl = await getImages(item.image)
  }
return data
}

export async function transformDataWithIcon(data) {
  for await (var item of data){
    item.iconUrl = await getImages(item.icon)
  }
return data
}

export async function getImages(image) {
  const storage = getStorage();
  var urlImage= ""
  await getDownloadURL(ref(storage, image))
  .then((url) => {
    urlImage = url
  })
  .catch((error) => {
    console.log(error)
  });
  return(urlImage)
}

/*export async function setCollection(data, collection) {
  const app = initApp()
  const db = getFirestore(app);
  const dbRef = doc(db, collection);
  console.log(data)
   try {
    await setDoc(dbRef, data);
    return true;
  } catch (error) {
    return { error: error };
  }
 }*/

/* export async function setXatCollection(nom, msg) {
  const app = initApp()
  const db = getFirestore(app);
  var data_= Timestamp.fromDate(new Date())
  const dbRef = doc(db, "xat", data_.toString());
  const data = {
    nom: nom,
    data: data_,
    msg: msg,
  };
  try {
    await setDoc(dbRef, data);
    return true;
  } catch (error) {
    return { error: error };
  }
} */
