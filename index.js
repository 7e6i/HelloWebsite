const quoteArray = [
    "So now we live beside the pool, where everything is good - Lorde",
    "There is no instance of a nation benefiting from prolonged warfare - Sun Tzu, The Art of War",
    "It is only with a worthy rival that one can reach their fullest potential - Technoblade",
    "Just another [overcast] day in paradise",
    "DON’T PANIC! - The Hitchhiker’s Guide to the Galaxy",
    "Never attribute to malice that which is adequately explained by stupidity - Robert J. Hanlon",
    "It never gets easier, you just go faster - Greg LeMond",
    "Everyone’s good until they breathe - Gregg Troy",
    "Do not go gentle into that good night - Dylan Thomas"
];

// function changeQuotes(){
//     const n = Math.floor(Math.random() * 10000);
//     //console.log(quoteArray);
//     document.getElementById("quote").textContent = quoteArray[n % quoteArray.length];
//
//     setTimeout(changeQuotes, 5*1000);
// }
// changeQuotes();


const verbList = ["overcast", "sunny", "gloomy", "glorious", "meh"]
const colorList = [
    "#0986ec",
    "#f5d405",
    "#445a6e",
    "#c900ff",
    "#81833f"]

function paradise(){
    const n = Math.floor(Math.random() * 10000);
    //console.log(quoteArray);

    const ele = document.getElementById("quote")
    ele.textContent = verbList[n % verbList.length];
    ele.style.color = colorList[n % colorList.length];

    setTimeout(paradise, 1*1000);
}
paradise();




function updateDateTime() {
    const now = new Date();
    const currentDateTime = now.toLocaleString();

    var element = document.querySelector('#datetime');
    if (element){
        element.textContent = currentDateTime;
    }
    setTimeout(updateDateTime, 100)
}
updateDateTime();



function generateRandom() {
    const n = Math.floor(Math.random() * 1000)+1;

    var element = document.querySelector('#random');
    if (element){
        element.textContent = n;
    }
    setTimeout(generateRandom, 1000)
}
generateRandom();


