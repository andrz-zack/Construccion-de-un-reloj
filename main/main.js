
let ID = document.getElementById.bind(document);

this.onload = function(){
    let sec, min, hr, clock, secondHand, minuteHand, hourHand, secDeg, minDeg, hrDeg, radius, start, i, spanDeg, top, right, clockIsPaused; 

    //cargando el reloj
    function loadClock(){
        sec = new Date().getSeconds() + 2;
        min = new Date().getMinutes();
        hr = new Date().getHours();
        clock = ID("clock-wrapper");
        secondHand = ID("clock-second");
        minuteHand = ID("clock-minute");
        hourHand = ID("clock-hour");

        secDeg = (sec * 6);
        minDeg = (min + (sec / 60)) * 6;
        hrDeg = ((hr - 12) * 30) + ((min / 60) * 30);
}

document.addEventListener("visibilitychange", loadClock);
loadClock();

radius = ((clock.offsetWidth - 20) / 2);

/* comenzando con el reloj */



}