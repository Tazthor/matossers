'use client';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
} from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { doc, getDoc, updateDoc } from "firebase/firestore";

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
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };

export async function loginWithGoogle() {
  const googleProvider = new GoogleAuthProvider();
  
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    //console.log("Login:", userCredential);
    const user = userCredential.user;
    const userRef = doc(db, "usuaris", user.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      
      await updateDoc(userRef, {
        lastLogin: serverTimestamp(),
        name: user.displayName,
      });

      return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        role: userData.role, 
      };
    } else {
      await signOut(auth); 
      return { error: { code: "custom/not-authorized", message: "Aquest usuari no té permís d'accés." } };
    }

  } catch (error) {
    console.error("Error Login:", error);
    return { error: error };
  }
}
/*
export async function validateUser(uid) {
  const userRef = doc(db, "usuaris", uid);
  const userSnap = await getDoc(userRef);
  const castellerRef = doc(db, "castellers", uid);
  const castellerSnap = await getDoc(castellerRef);
  await updateDoc(userRef, { role: "casteller" });
  if (!castellerSnap.exists()) {
    await setDoc(castellerRef, {
      uid: uid,
      email: userSnap.data().email,
      name: userSnap.data().name,
      actiu: true,
    });
  }
  return true;
}

export async function deleteUser(uid, removeCasteller) {
  const userRef = doc(db, "usuaris", uid);
  const userSnap = await getDoc(userRef);
  console.log(userSnap.data().role);
  if (userSnap.data().role === "admin") {
    return "No es pot esborrar un altre administrador";
  } else {
    const castellerRef = doc(db, "castellers", uid);
    if (removeCasteller) {
      await deleteDoc(userRef);
      await deleteDoc(castellerRef);
      return "okRmAll";
    } else {
      await updateDoc(castellerRef, { actiu: false });
      await deleteDoc(userRef);
      return "okRmUser";
    }
  }
}

export async function updateRoles (uid, newRole) {
  const userRef = doc(db, "usuaris", uid);
  await updateDoc(userRef, { role: newRole });

}
*/
export async function logoOut() {
  await signOut(auth);
  return "signOut";
}
