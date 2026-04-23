const clock = document.querySelector("#clock");
setInterval(function getClock() {
    const date = new Date();
    console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);