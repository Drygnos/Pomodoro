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
let workingIcon = document.querySelector('#work p');
let restingIcon = document.querySelector('#rest p');
let confirm = document.getElementById('confirmFormular');
let taf = 0;
let chrono;

printTime();

confirm.addEventListener('click', () => { //the formular is sent
    window.location.href = "#"; // Redirection
    secondsSelected = document.getElementById("workSeconds").value;
    minutesSelected = document.getElementById("workMinutes").value;
    hoursSelected = document.getElementById("workHours").value;

    taf = secondsSelected + (minutesSelected*60) + (hoursSelected*3600)
    if(taf > 7200){
        taf = 7200;
        hoursSelected = 2;
        minutesSelected = 0;
        secondsSelected = 0;
    }
    /*
    convertWorkingSeconds(taf);
    */

    pauseSeconds = document.getElementById("restSeconds").value;
    pauseMinutes = document.getElementById("restMinutes").value;
    pauseHours = document.getElementById("restHours").value;
    seconds = secondsSelected;
    minutes = minutesSelected;
    hours = hoursSelected;
    printTime();

});

button.addEventListener('click', () => {
    if (!launched){ //button is in "play" mode
        chrono = window.setInterval(addSecond, 1000);
        workingIcon.textContent = 'WORK';
        restingIcon.textContent = 'Rest';
        workingIcon.classList.add('active');
        restingIcon.classList.remove('active');

        button.innerHTML = '<i class="fa-solid fa-arrow-rotate-left fa-2xl"></i>';
        launched = true;
    } else { //button is in "reset" mode
        window.clearTimeout(chrono);
        workingIcon.textContent = 'Work';
        restingIcon.textContent = 'Rest';
        workingIcon.classList.remove('active');
        restingIcon.classList.remove('active');

        button.innerHTML = '<i class="fa-solid fa-play fa-2xl"></i>';
        seconds = secondsSelected;
        minutes = minutesSelected;
        hours = hoursSelected;
        working = true;
        launched = false;
        printTime();
    }
});

function convertWorkingSeconds(totalSeconds) {
    hoursSelected = Math.floor(totalSeconds / 3600);  // Nombre d'heures
    minutesSelected = Math.floor((totalSeconds % 3600) / 60);  // Minutes restantes
    secondsSelected = totalSeconds % 60;  // Secondes restantes
}

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
            restingIcon.textContent = 'Rest';
            workingIcon.classList.add('active');
            restingIcon.classList.remove('active');
            
        } else { // end of working time
            seconds = pauseSeconds;
            minutes = pauseMinutes;
            hours = pauseHours;
            workingIcon.textContent = 'Work';
            restingIcon.textContent = 'REST';
            workingIcon.classList.remove('active');
            restingIcon.classList.add('active');
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

