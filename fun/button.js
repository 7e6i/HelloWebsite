//import { initializeApp } from "firebase/app";
//import { getFirestore } from "firebase/firestore";

//https://stackoverflow.com/questions/69230383/failed-to-resolve-module-specifier-firebase-app
//https://firebase.google.com/docs/firestore/quotas#limits



// fancy firebase stuff
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore,doc, getDoc, getDocs, updateDoc, setDoc, query, orderBy, limit, collection} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

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

// get TheCounter doc
const theCountRef = doc(db, "the_button_users", "TheCount");

// preload elements
const theCounter = document.getElementById("theCounter")
const theButton = document.getElementById("theButton")
var tempCount = 0;
var currentUser = {"name":null, "count":null}


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


// load from db
async function load_from_db(){
    const countSnap = await getDoc(theCountRef);
    const stored_count = countSnap.data()["count"];
    console.log(stored_count);
    theCounter.textContent = numberWithCommas(stored_count);
}
load_from_db();


async function addOne(){
    tempCount+=1;
    theButton.textContent = tempCount;
}
theButton.addEventListener("click",addOne);


async function savePoints(){

    // if there aren't new points
    if (tempCount===0){
        theButton.textContent = "The Button"
    }

    // update the main counter
    const countSnap = await getDoc(theCountRef);
    const newMainCount = countSnap.data()['count'] + tempCount;
    await updateDoc(theCountRef, {"count": newMainCount});
    theCounter.textContent = numberWithCommas(newMainCount);

    if (tempCount>0){
        theButton.textContent = "0";
    }

    // check if it is TheCount document
    if (currentUser["name"]==="TheCount"){
        currentUser["count"] = newMainCount;
        setStats(currentUser["name"], currentUser["count"]);
    }

    // otherwise update the user
    else if (currentUser["name"] != null){

        // query the name
        const userRef = doc(db, "the_button_users", currentUser["name"]);
        const userSnap = await getDoc(userRef);

        // if the user is already created, update it
        if (userSnap.exists()){
            currentUser["count"] =  userSnap.data()['count'] + tempCount;
            await updateDoc(userRef, {"count": currentUser["count"]});
        }
        // if not, make a new user
        else if (tempCount > 0){
            currentUser["count"] =  tempCount;
            await setDoc(doc(db, "the_button_users", currentUser["name"]), {"count": currentUser["count"]});
        }

        // update the screen
        setStats(currentUser["name"], currentUser["count"])
    }

    // print out changes
    console.log(newMainCount, currentUser["name"], currentUser["count"])

    // update the temp counter
    tempCount = 0;

    updateLeaderboard();

    setTimeout(savePoints, 10*1000);
}
savePoints();
//document.getElementById("saveButton").addEventListener("click",savePoints);



// async function pretend(){
//     const delay = Math.floor(Math.random() * 5000)+1;
//     const n = Math.floor(Math.random() * 5)+1;
//
//     const docSnap = await getDoc(docRef);
//     const plus = docSnap.data()['count1'] + n;
//     await updateDoc(docRef, {"count1": plus});
//     theCounter.textContent = numberWithCommas(plus);
//
//     console.log(plus);
//
//     setTimeout(pretend, delay);
// }
//pretend();



function setStats(name, points){
    document.getElementById("userName").textContent = name;

    const userPoints = document.getElementById("userPoints");
    if (typeof points === "number"){
        userPoints.textContent = numberWithCommas(points)
    }
    else{
        userPoints.textContent = points;
    }

}

async function findUser(){

    const findInput = document.getElementById("findInput");

    // no input
    if (findInput.value === ""){
        currentUser = {"name":null, "count": null}
        setStats("-","-")
        return;
    }

    const inputText = findInput.value;
    findInput.value = "";
    var userRef;

    // check if valid name
    try{
        if (inputText === "." || inputText === ".." || inputText==="__.*__"){throw new Error();}
        userRef = doc(db, "the_button_users", inputText);
    }
    catch {
        currentUser = {"name":null, "count": null}
        setStats(inputText, "invalid name");
        //console.log(inputText + " is invalid");
        return;
    }

    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
        const cnt =docSnap.data()["count"];
        currentUser = {"name":inputText, "count": cnt}
        setStats(inputText, cnt)
        //console.log(inputText, cnt);
    }
    else {
        currentUser = {"name":inputText, "count": 0}
        setStats(inputText, "start clicking!")
        //console.log(inputText + " doesn't exist");
    }

}
document.getElementById("findUser").addEventListener("click", findUser);



async function updateLeaderboard(){
    const theButtonUsersRef = collection(db, "the_button_users");
    const q = query(theButtonUsersRef, orderBy("count", "desc"), limit(10+1));

    const querySnapshot = await getDocs(q);

    var i = 0
    for (const docSnap  of querySnapshot.docs){
        document.getElementById(i+"name").textContent = docSnap.id;
        document.getElementById(i+"points").textContent = numberWithCommas(docSnap.data()["count"]);
        //console.log(docSnap.id, docSnap.data());
        i +=1;
    }


}
