//import {DateTime} from './luxon.js'
var luxon = window.luxon

function updateDateTime() {
    const now = luxon.DateTime.now()

    document.querySelector('#now').textContent = now.valueOf()

    document.querySelector('#localdatetime').textContent = now.toFormat("FFFF (ZZ)")

    document.querySelector('#isoweek').textContent = now.toFormat("kkkk-WW-c")

    document.querySelector('#isoweek').textContent = now.toFormat("kkkk-WW-c")

    const jan1 = luxon.DateTime.fromISO(now.toFormat("yyyy")+"-01-01").valueOf()
    document.querySelector('#dayofyear').textContent = ((now.valueOf() - jan1)/(60*60*24*1000)).toFixed(3)

    const ends = luxon.DateTime.fromISO("2025-12-20").valueOf()
    document.querySelector('#school').textContent = ((ends-now.valueOf())/(60*60*24*1000)).toFixed(3)

    setTimeout(updateDateTime, 1000)
}
updateDateTime();

