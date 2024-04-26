//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";

//https://stackoverflow.com/questions/69230383/failed-to-resolve-module-specifier-firebase-app

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore,doc, getDoc} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyC-mxNGZQQNFq89PYkLZ0TYlLT869nnYwQ",
    authDomain: "hellowebsite-f5cc0.firebaseapp.com",
    projectId: "hellowebsite-f5cc0",
    storageBucket: "hellowebsite-f5cc0.appspot.com",
    messagingSenderId: "471453856950",
    appId: "1:471453856950:web:2a3fb1deb5e59de5d9e217",
    measurementId: "G-WFVWVYQM1Z"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


const docRef = doc(db, "stuff", "counter");
const docSnap = await getDoc(docRef);

var stored_count;
if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    stored_count = docSnap.data()["count1"];

}
else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
}

console.log(stored_count);
var element = document.getElementById("counter");
if (element){
    element.textContent = stored_count;
}