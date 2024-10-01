let secondsSelected = 0;
let minutesSelected = 25;
let hoursSelected = 0;
let pauseSeconds = 0;
let pauseMinutes = 5;
let pauseHours = 0;
let seconds = secondsSelected;
let minutes = minutesSelected;
let hours = hoursSelected;
let launched = false;
let working = true;
let para = document.getElementById("timer");
let button = document.getElementById('buttonLaunchReset');
let workingIcon = document.getElementById('work');
let restingIcon = document.getElementById('rest');
let confirm = document.getElementById('confirmFormular');
let chrono;

printTime();

confirm.addEventListener('click', () => { //the formular is sent
    secondsSelected = document.getElementById("workSeconds").value;
    minutesSelected = document.getElementById("workMinutes").value;
    hoursSelected = document.getElementById("workHours").value;
    pauseSeconds = document.getElementById("seconds").value;
    pauseMinutes = document.getElementById("minutes").value;
    pauseHours = document.getElementById("hours").value;
    seconds = secondsSelected;
    minutes = minutesSelected;
    hours = hoursSelected;
    printTime();

});

button.addEventListener('click', () => {
    if (!launched){ //button is in "play" mode
        chrono = window.setInterval(addSecond, 1000);
        workingIcon.textContent = 'WORK';
        workingIcon.style.color = '#FFFF00';
        restingIcon.textContent = 'Rest';
        restingIcon.style.color = '#888888';
        button.innerHTML = '<i class="fa-solid fa-arrow-rotate-left fa-2xl"></i>';
        launched = true;
    } else { //button is in "reset" mode
        window.clearTimeout(chrono);
        workingIcon.textContent = 'Work';
        workingIcon.style.color = '#eaf1f2';
        restingIcon.textContent = 'Rest';
        restingIcon.style.color = '#eaf1f2';
        button.innerHTML = '<i class="fa-solid fa-play fa-2xl"></i>';
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
        working = !working;
        if(working){ // end of pause time
            seconds = secondsSelected;
            minutes = minutesSelected;
            hours = hoursSelected;
            workingIcon.textContent = 'WORK';
            workingIcon.style.color = '#FFFF00';
            restingIcon.textContent = 'Rest';
            restingIcon.style.color = '#888888';
            
        } else { // end of working time
            seconds = pauseSeconds;
            minutes = pauseMinutes;
            hours = pauseHours;
            workingIcon.textContent = 'Work';
            workingIcon.style.color = '#888888';
            restingIcon.textContent = 'REST';
            restingIcon.style.color = '#FFFF00';
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

