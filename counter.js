
function increase(){

    var element = document.getElementById("counter");

    if (element){
        const plus = parseInt(element.textContent) +1;
        element.textContent = plus;

    }
}

function decrease(){

    var element = document.getElementById("counter");

    if (element){
        const plus = parseInt(element.textContent) -1;
        element.textContent = plus;

    }
}

function reset(){

    var element = document.getElementById("counter");

    if (element){
        element.textContent = 0;

    }
}

function timer(){

    var element = document.getElementById("seconds");

    if (element){
        element.textContent = "0 sec";

    }
}