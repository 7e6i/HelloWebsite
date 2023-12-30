
function timer(){
    var seconds = document.getElementById("seconds");
    var start = document.getElementById("start");
    var count = document.getElementById("counter");
    var rate = document.getElementById("rate");

    if (start.textContent == "Stop"){
        var updatedTime = (parseFloat(seconds.textContent.split(" ")[0]) +0.1).toFixed(1);

        seconds.textContent = updatedTime + " sec";

        var updatedRate = (updatedTime / parseInt(count.textContent)).toFixed(1)
        rate.textContent = updatedRate + " sec/n";
    }

}

timer();
setInterval(timer, 100);