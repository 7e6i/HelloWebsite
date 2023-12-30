
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