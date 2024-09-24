const secondsSelected = 10;
const minutesSelected = 0;
const hoursSelected = 0;
let seconds = secondsSelected;
let minutes = minutesSelected;
let hours = hoursSelected;
let launched = false;
let working = true;
let para = document.getElementById("timer");
let button = document.getElementById('buttonLaunchReset');
let workingIcon = document.getElementById('working');
let chrono;

printTime();

button.addEventListener('click', () => {
    if (!launched){ //button is in "play" mode
        chrono = window.setInterval(addSecond, 1000);
        button.innerHTML = '<i class="fa-solid fa-arrow-rotate-left"></i>';
        launched = true;
    } else { //button is in "reset" mode
        window.clearTimeout(chrono);
        button.innerHTML = '<i class="fa-solid fa-play"></i>';
        workingIcon.innerHTML = '<i class="fa-solid fa-person-digging"></i>';
        seconds = secondsSelected;
        minutes = minutesSelected;
        hours = hoursSelected;
        working = true;
        launched = false;
        printTime();
    }
});


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
        seconds = secondsSelected;
        minutes = minutesSelected;
        hours = hoursSelected;
        working = !working;
        if(working){ // end of pause time
            seconds = secondsSelected;
            minutes = minutesSelected;
            hours = hoursSelected;
            workingIcon.innerHTML = '<i class="fa-solid fa-person-digging"></i>';
        } else { // end of working time
            seconds = 0;
            minutes = 5;
            hours = 0;
            workingIcon.innerHTML = '<i class="fa-solid fa-bed"></i>';
        }
        chrono = window.setInterval(addSecond, 1000);
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

