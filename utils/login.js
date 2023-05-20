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
const db = getFirestore(app);

export async function loginEmailPassword(email, pass) {
  const loginEmail = email;
  const loginPassword = pass;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    const role = await getRoles(userCredential.user.email);
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
    const role = await getRoles(userCredential.user.email);
    if (role == "") {
      role = "public";
    }
    return role;
  } catch (error) {
    return { error: error };
  }
}

export async function createAccount(email, pass) {
  const loginEmail = email;
  const loginPassword = pass;
  const returnSecureToken = true
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword,
      returnSecureToken
    );
    const usuariBd = await setUsersCollection(userCredential.user)
    console.log("aqui despres", usuariBd)

    return true;
  } catch (error) {
    return { error: error };
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
  const data = "";

  const q = query(userRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data = doc.data().role;
  });
  return data;
}

async function setUsersCollection(user) {
  console.log(user)
  const dbRef = doc(db, "usuaris", user.uid);
  const data = {
    email: user.email,
    role: "public"
  };
  try {
    await setDoc(dbRef, data);
    return(true)
  } catch (error) {
    return { error: error };
  }
}
