import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";

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

export async function loginEmailPassword(email, pass) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, pass);
    let role = await getRoles(userCredential.user.email);
    if (role == "") {
      role = "public";
    }
    return role;
  } catch (error) {
    return { error: error };
  }
}

export async function loginWithGoogle() {
  const googleProvider = new GoogleAuthProvider();
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    let role = await getRoles(userCredential.user.email);
    if (role == "") {
      role = "public";
      await setUsersCollection(userCredential.user);
    }
    return role;
  } catch (error) {
    return { error: error };
  }
}

export async function createAccount(email, pass) {
  const returnSecureToken = true;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      pass,
      returnSecureToken
    );
    await setUsersCollection(userCredential.user);

    return true;
  } catch (error) {
    return { error };
  }
}

export async function monitorAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //console.log(user);
    } else {
      //console.log(user);
    }
  });
}

export async function logoOut() {
  await signOut(auth);
  return "signOut";
}

async function getRoles(email) {
  const userRef = collection(db, "usuaris");
  let data = "";

  const q = query(userRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data = doc.data().role;
  });
  return data;
}

async function setUsersCollection(user) {
  const dbRef = doc(db, "usuaris", user.uid);
  const data = {
    email: user.email,
    role: "public",
  };
  try {
    await setDoc(dbRef, data);
    return true;
  } catch (error) {
    return { error: error };
  }
}
