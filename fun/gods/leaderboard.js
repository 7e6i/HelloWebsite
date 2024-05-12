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

//init stuff
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const gods_coll = collection(db, "greek_gods");



async function tableCreate() {
    const ref = doc(gods_coll, "ranking");
    const docSnap = await getDoc(ref);
    const data = docSnap.data();
    //console.log(data, typeof data);

    var tboday = document.getElementById("leaderboardTable");

    for (let i = 1; i <= 13; i++) {
        var temp = "<tr>";
        temp += "<th class='has-text-centered'>"+i+"</th>";

        temp += "<td class='has-text-centered'>"+data[i][0]+"</td>";
        temp += "<td class='has-text-centered'>"+data[i][1]+"</td>";
        temp += "<td class='has-text-centered'>"+data[i][2]+"</td>";
        temp += "<td class='has-text-centered'>"+data[i][3]+"</td>";

        temp = temp + "</tr>";
        tboday.innerHTML += temp;
    }

    document.getElementById("last-updated").textContent = data["last_updated"];
}
tableCreate();


//
// async function load_table() {
//
//     const ref = doc(gods, "top10");
//     const docSnap = await getDoc(ref);
//
//     console.log(docSnap['1']);
//
// }
//
// load_table();



