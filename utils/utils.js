import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
/*     // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url); */
  })
  .catch((error) => {
    console.log(error)
  });
  return(urlImage)
}
