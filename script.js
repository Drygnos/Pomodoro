let seconds = 10;
let minutes = 0;
let hours = 0;
let para = document.getElementById("timer");
let button = document.getElementById('buttonLaunchReset');
printTime();
button.addEventListener('click', () => {
    let chrono = window.setInterval(addSecond, 1000);
})
function addSecond() {
    if (seconds > 0){
        seconds--;
    } else if (minutes > 0){
        minutes--;
        seconds = 59;
    }else if (hours > 0){
        hours--;
        minutes = 59;
        seconds = 59;
        }
    else{
        window.clearTimeout(chrono);
    }
    printTime();
}

function printTime(){
    if (hours == 0){
        para.innerHTML = (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    } else{
        para.innerHTML = hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    }
}

