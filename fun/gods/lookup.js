import {initializeApp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import {
    getFirestore,
    doc,
    getDoc,
    getDocs,
    updateDoc,
    setDoc,
    query,
    orderBy,
    limit,
    collection
} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyC-mxNGZQQNFq89PYkLZ0TYlLT869nnYwQ",
    authDomain: "hellowebsite-f5cc0.firebaseapp.com",
    projectId: "hellowebsite-f5cc0",
    storageBucket: "hellowebsite-f5cc0.appspot.com",
    messagingSenderId: "471453856950",
    appId: "1:471453856950:web:2a3fb1deb5e59de5d9e217",
    measurementId: "G-WFVWVYQM1Z"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const gods_coll = collection(db, "greek_gods");


var currentGod = null

var actualElixir = 0;
var actualIchor = 0;
var tempElixir = 0;
var tempIchor = 0;

var refreshRate = 10;
var updateIn = refreshRate;


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

async function findUser(){

    const findInput = document.getElementById("findInput");

    // no input
    if (findInput.value === ""){
        document.getElementById("lookup-message").textContent = "Search for a deity";
        return;
    }

    const inputText = findInput.value;
    findInput.value = "";
    var userRef;

    // check if name is valid
    try{
        if (inputText === "." || inputText === ".." || inputText==="__.*__"){throw new Error();}
        userRef = doc(gods_coll, inputText);
    }
    catch {
        document.getElementById("lookup-message").textContent = "Entry does not exist";
        return;
    }


    const docSnap = await getDoc(userRef);
    // if there is a user with that name, display it
    if (docSnap.exists()) {
        document.getElementById("lookup-message").textContent = "Search for a deity";
        document.getElementById("god-name").textContent = inputText;
        currentGod = inputText;
        actualElixir = docSnap.data()["elixir"];
        actualIchor = docSnap.data()["ichor"];
        setCounts();
    }
    else {
        document.getElementById("lookup-message").textContent = "Entry does not exist";
    }

}
document.getElementById("findUser").addEventListener("click", findUser);


function setCounts(){
    document.getElementById("elixir").textContent = numberWithCommas(actualElixir);
    document.getElementById("manna").textContent = numberWithCommas(actualElixir-actualIchor);
    document.getElementById("ichor").textContent = numberWithCommas(actualIchor);
}



function increase(){
    if (currentGod == null){
        return;
    }
    const ele = document.getElementById("elixir");
    tempElixir+=1;
    ele.textContent = numberWithCommas(actualElixir+tempElixir);
    document.getElementById("manna").textContent = numberWithCommas(actualElixir+tempElixir-actualIchor-tempIchor);
}
document.getElementById("elixir").addEventListener("click", increase)

function decrease(){
    if (currentGod == null){
        return;
    }
    const ele = document.getElementById("ichor");
    tempIchor+=1;
    ele.textContent = numberWithCommas(actualIchor+tempIchor);
    document.getElementById("manna").textContent = numberWithCommas(actualElixir+tempElixir-actualIchor-tempIchor);
}
document.getElementById("ichor").addEventListener("click", decrease)



async function update(){

    if (updateIn === 0){

        if (tempElixir > 0 || tempIchor>0){
            const godRef = doc(gods_coll, currentGod);
            const docSnap = await getDoc(godRef);
            actualElixir = docSnap.data()["elixir"] + tempElixir;
            actualIchor = docSnap.data()["ichor"] + tempIchor;
            await updateDoc(godRef, {"elixir": actualElixir, "ichor":actualIchor, "manna": (actualElixir-actualIchor)});

            tempIchor = 0;
            tempElixir = 0;

            setCounts();
        }

        updateIn = refreshRate;
        document.getElementById("updating-in").textContent = updateIn;
    }

    else{
        updateIn -= 1;
        document.getElementById("updating-in").textContent = updateIn;
    }

    setTimeout(update, 1000)
}
update();

