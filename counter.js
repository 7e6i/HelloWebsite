var audio = new Audio("documents/sound.mp3");

function increase(){

    var counter = document.getElementById("counter");
    var rate = document.getElementById("rate");
    var seconds = document.getElementById("seconds");

    if (counter){
        const plus = parseInt(counter.textContent) +1;

        counter.textContent = plus;

        var updatedTime = (parseFloat(seconds.textContent.split(" ")[0]) +0.1).toFixed(1);
        var updatedRate = (updatedTime / plus).toFixed(1)
        rate.textContent = updatedRate + " sec/n";

    }


    audio.play();

}

function decrease(){

    var counter = document.getElementById("counter");

    var seconds = document.getElementById("seconds");
    var rate = document.getElementById("rate");

    if (counter){
        const plus = parseInt(counter.textContent)-1;
        if (plus<0){
            plus = 0;
        }

        counter.textContent = plus;

        var updatedTime = (parseFloat(seconds.textContent.split(" ")[0]) +0.1).toFixed(1);
        var updatedRate = (updatedTime / plus).toFixed(1)
        rate.textContent = updatedRate + " sec/n";

    }

}

function reset(){

    var counter = document.getElementById("counter");
    var seconds = document.getElementById("seconds");
    var rate = document.getElementById("rate");
    var start = document.getElementById("start");

    if (counter && seconds && rate){
        counter.textContent = 0;
        seconds.textContent = "0 sec";
        rate.textContent = "0 sec/n";
        start.textContent = "Start";

    }
}


var seconds = 0;

function startStop(){

    var element = document.getElementById("start");

    if (element){
        if (element.textContent == "Start"){
            element.textContent = "Stop";
        }
        else if (element.textContent == "Stop"){
            element.textContent = "Start";
        }
    }
}


