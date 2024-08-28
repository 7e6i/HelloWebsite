function updateDateTime() {
    const now = new Date();

    var e = document.querySelector('#now');
    if (e){e.textContent = now.getTime();}

    var e = document.querySelector('#utcdatetime');
    if (e){e.textContent = now.toISOString();}

    var e = document.querySelector('#datetime');
    if (e){e.textContent = now.toLocaleString();}

    var e = document.querySelector('#dayofyear');
    let old = new Date(now.getUTCFullYear()+"-01-01T00:00:00.000Z")
    //console.log(old.toISOString())
    let dif = now - old - now.getTimezoneOffset()*60*1000
    if (e){e.textContent = Math.round(dif/(60*60*24))/1000;}

    var e = document.querySelector('#school');
    let fut = new Date("2025-12-20T00:00:00.000Z")
    let dif2 = fut - now + now.getTimezoneOffset()*60*1000
    if (e){e.textContent = Math.round(dif2/(60*60*24))/1000;}

    setTimeout(updateDateTime, 1000)
}
updateDateTime();


Date.prototype.getWeek = function () {
    var target  = new Date(this.valueOf());
    var dayNr   = (this.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    var firstThursday = target.valueOf();
    target.setMonth(0, 1);
    if (target.getDay() != 4) {
        target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - target) / 604800000);
}

function isoweek(){
    var d= new Date();

    let res = d.getFullYear() + "-" + d.getWeek() + "-" + (d.getDay()+7 %7);
    var e = document.querySelector('#isoweek');
    if (e){e.textContent = res;}
}
isoweek()



function countdowns(){
    var d = new Date();


}


