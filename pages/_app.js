import '../styles/globals.css'
import '../styles/fonts.css';

import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

/*async function getData () {
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

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);

  const q = query(collection(db, "actuacions"));
    
  const querySnapshot = await getDocs(q);
  
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

}*/


function Matossers({ Component, pageProps }) {

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider> 
  )
}

export default Matossers