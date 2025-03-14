import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function loginWithGoogle() {
  const googleProvider = new GoogleAuthProvider();
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;
    const userRef = doc(db, "usuaris", user.uid);
    const userSnap = await getDoc(userRef);
    const castellerRef = doc(db, "castellers", user.uid);
    const castellerSnap = await getDoc(castellerRef);
    let role = "espera"; // Valor per defecte

    if (!userSnap.exists() && !castellerSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        role: "espera",
        createdAt: new Date().toLocaleDateString("ca-ES", dateOptions),
        lastLogin: new Date().toLocaleDateString("ca-ES", dateOptions),
      });
    } else if (!userSnap.exists() && castellerSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        role: "casteller",
        createdAt: new Date().toLocaleDateString("ca-ES", dateOptions),
        lastLogin: new Date().toLocaleDateString("ca-ES", dateOptions),
      });
      role = "casteller";
      await updateDoc(castellerRef, { actiu: true });
    } else {
      role = userSnap.data().role;
      await updateDoc(userRef, {
        lastLogin: new Date().toLocaleDateString("ca-ES", dateOptions),
      });
    }

    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      role: role,
    };
  } catch (error) {
    return { error: error.message };
  }
}

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

export async function logoOut() {
  await signOut(auth);
  return "signOut";
}
