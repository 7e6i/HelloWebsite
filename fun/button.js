//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";

//https://stackoverflow.com/questions/69230383/failed-to-resolve-module-specifier-firebase-app
//https://firebase.google.com/docs/firestore/quotas#limits



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

// preload elements
const theCounter = document.getElementById("theCounter")
const theButton = document.getElementById("theButton")
const saveButton = document.getElementById("saveButton")
var tempCount = 0;


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// load from db
async function load_from_db(){
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        var stored_count = docSnap.data()["count1"];
        console.log(stored_count);
    }
    else {console.log("No such document!");}

    theCounter.textContent = numberWithCommas(stored_count);
}

load_from_db();



async function addOne(){



    tempCount+=1;
    theButton.textContent = tempCount;

}
theButton.addEventListener("click",addOne);


async function savePoints(){
    if (tempCount> 0){
        const docSnap = await getDoc(docRef);
        const plus = docSnap.data()['count1'] + tempCount;
        await updateDoc(docRef, {"count1": plus});
        theCounter.textContent = numberWithCommas(plus);
        console.log(plus);
        tempCount = 0;
        theButton.textContent = tempCount;

    }

    setTimeout(savePoints, 60*1000);
}
savePoints();
saveButton.addEventListener("click",savePoints);



async function pretend(){
    const delay = Math.floor(Math.random() * 5000)+1;
    const n = Math.floor(Math.random() * 5)+1;

    const docSnap = await getDoc(docRef);
    const plus = docSnap.data()['count1'] + n;
    await updateDoc(docRef, {"count1": plus});
    theCounter.textContent = numberWithCommas(plus);

    console.log(plus);

    setTimeout(pretend, delay);
}

pretend();


