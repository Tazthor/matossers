import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, setDoc, writeBatch, getDocs, query, where } from "firebase/firestore";
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

export async function getData(colleccio, dni) {
  if (!colleccio || !dni || typeof dni !== 'string') {
    console.error("getData: colleccio o dni invàlids", { colleccio, dni });
    return null;
  }

  const docRef = doc(db, colleccio, dni.toString().trim().toUpperCase());
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.warn("Document no trobat:", dni);
      return null;
    }
  } catch (error) {
    console.error("Error obtenint document:", error);
    return null;
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


export async function migrarDatesCastellers() {
  const dataDefecte = "01/01/2026";
  const batch = writeBatch(db);
  const castellersRef = collection(db, "castellers");
  
  try {
    const querySnapshot = await getDocs(castellersRef);
    let comptador = 0;

    querySnapshot.forEach((docSnap) => {
      const dada = docSnap.data();
      
      // Només actuem si NO té el camp alta definit
      if (!dada.alta) {
        const docRef = doc(db, "castellers", docSnap.id);
        // Fem un update només d'aquest camp
        batch.update(docRef, { alta: dataDefecte });
        comptador++;
      }
    });

    if (comptador > 0) {
      // Executem tots els canvis junts de cop
      await batch.commit();
      console.log(`✅ Migració completada! S'han actualitzat ${comptador} castellers.`);
      return comptador;
    } else {
      console.log("ℹ️ No s'ha trobat cap casteller sense data d'alta.");
      return 0;
    }
  } catch (error) {
    console.error("❌ Error durant la migració de dates:", error);
    throw error;
  }
}