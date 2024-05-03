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

function changeQuotes(){
    const n = Math.floor(Math.random() * 10000);
    //console.log(quoteArray);
    document.getElementById("quote").textContent = quoteArray[n % quoteArray.length];

    setTimeout(changeQuotes, 5*1000);
}
changeQuotes();


// const verbDict = {
//     "overcast" : "#0259b0",
//     "sunny" : "#e8e535",
//     "gloomy": "#445a6e",
// }
//
// function paradise(){
//     console.log(verbDict);
// }
// paradise();




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


