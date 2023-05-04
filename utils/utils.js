import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDocs, query, where } from "firebase/firestore";

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

export function initApp() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return app;
}

export async function loginWithGoogle(app) {
  app ? app : initApp();
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const user = {}
  
  return signInWithPopup(auth, googleProvider)
    .then((result) => {
        user = result.user;   
        return (user) 
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

export async function getDataCollection(app, colleccio) {
  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);
  const colRef = collection(db, colleccio);
  const data = [];
  try {
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach((doc) => {
      //console.log(doc.data());
      //console.log(doc.id);
      data.push(doc.data());
    });
  } catch (error) {
    console.log(error);
  }

  return data;

  // const q = query(collection(db, 'actuacions'));

  //const querySnapshot = await getDocs(q);

  //const docSnap = await getDocs(q);

  /*        querySnapshot.forEach((doc) => {
            
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          
        });*/
}

/* export async function getDataCollectionUser(app, colleccio, user) {
  const db = getFirestore(app);
  const userRef = collection(db, colleccio);

  // Create a query against the collection.
  const q = query(userRef, where("email", "==", user.email));
  console.log(q)
}
 */