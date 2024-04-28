//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";

//https://stackoverflow.com/questions/69230383/failed-to-resolve-module-specifier-firebase-app


// fancy firebase stuff
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore,doc, getDoc, updateDoc} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC-mxNGZQQNFq89PYkLZ0TYlLT869nnYwQ",
    authDomain: "hellowebsite-f5cc0.firebaseapp.com",
    projectId: "hellowebsite-f5cc0",
    storageBucket: "hellowebsite-f5cc0.appspot.com",
    messagingSenderId: "471453856950",
    appId: "1:471453856950:web:2a3fb1deb5e59de5d9e217",
    measurementId: "G-WFVWVYQM1Z"
};

//init stuff
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// get counter doc
const docRef = doc(db, "stuff", "counter");


// load from db
async function load_from_db(){
    const docSnap = await getDoc(docRef);


    if (docSnap.exists()) {
        var stored_count = docSnap.data()["count1"];
        console.log(stored_count);
    }
    else {console.log("No such document!");}

    document.getElementById("counter").textContent = stored_count;
}

load_from_db();



async function addOne(n){

    const docSnap = await getDoc(docRef);
    const plus = docSnap.data()['count1'] + 1;
    await updateDoc(docRef, {"count1": plus});
    counter.textContent = plus;

    console.log(plus);
}
document.getElementById("increase").addEventListener("click",addOne);



async function addMany(n){

    const docSnap = await getDoc(docRef);
    const plus = docSnap.data()['count1'] + n;
    await updateDoc(docRef, {"count1": plus});
    counter.textContent = plus;

    console.log(plus);
}

async function pretend(){
    const delay = Math.floor(Math.random() * 5000)+1;
    const n = Math.floor(Math.random() * 5)+1;

    const docSnap = await getDoc(docRef);
    const plus = docSnap.data()['count1'] + n;
    await updateDoc(docRef, {"count1": plus});
    counter.textContent = plus;

    console.log(plus);

    setTimeout(pretend, delay);
}

pretend();


