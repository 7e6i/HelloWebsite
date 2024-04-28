var audio1 = new Audio("documents/tap.mp3");
var audio2 = new Audio("documents/whoosh.mp3");
document.getElementById('counter').addEventListener('click', function(){audio1.play()} , false);
document.getElementById('counter').addEventListener('touchstart', function(){audio1.play()} , false);
document.getElementById('decrease').addEventListener('click', function(){audio2.play()} , false);
document.getElementById('decrease').addEventListener('touchstart', function(){audio2.play()} , false);



function timer(){
    var seconds = document.getElementById("seconds");
    var start = document.getElementById("start");

    if (start.textContent == "Stop"){
        var updatedTime = (parseFloat(seconds.textContent.split(" ")[0]) +0.1).toFixed(1);
        seconds.textContent = updatedTime + " sec";
    }

}

timer();
setInterval(timer, 100);