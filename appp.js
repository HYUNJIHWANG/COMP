function Getclock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padstart(2, "0");
    const seconds = String(date.getSeconds()).padstart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

Getclock();
setInterval(GetClock, 1000);