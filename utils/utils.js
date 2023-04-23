import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDocs } from "firebase/firestore";
import { useState } from "react";

export function initApp() {
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

        return app
}

export async function getDataCollection (app, colleccio) {
        // Initialize Cloud Firestore and get a reference to the service
        const db = getFirestore(app);
        const colRef = collection(db, colleccio);
        try {
            const docsSnap = await getDocs(colRef);
            docsSnap.forEach(doc => {
                console.log("data:", doc.data());
                //console.log(doc.id);
                return doc.data()
            })
        } catch (error) {
            console.log(error);
        }

       // const q = query(collection(db, 'actuacions'));
          
       //const querySnapshot = await getDocs(q);
        
       //const docSnap = await getDocs(q);

  
  /*        querySnapshot.forEach((doc) => {
            
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          
        });*/
      
     
}