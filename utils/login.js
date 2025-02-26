import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";

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

  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    const user = userCredential.user;
    const userRef = doc(db, "usuaris", user.uid);
    const userSnap = await getDoc(userRef);
    const castellerRef = doc(db, "castellers", user.uid);
    const castellerSnap = await getDoc(castellerRef);

    let role = "espera"; // Valor per defecte
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        uid: user.uid, /* valorar si treure-ho */
        email: user.email,
        name: user.displayName,
        role: "espera",
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
      });
      await setDoc(castellerRef, {
        uid: user.uid, /* valorar si treure-ho */
        email: user.email,
        name: user.displayName,
      });
    } else {
      await updateDoc(userRef, {
        lastLogin: serverTimestamp(),
      });
      role = userSnap.data().role;
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

export async function logoOut() {
  await signOut(auth);
  return "signOut";
}
