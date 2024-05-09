let Data = null;

async function getBoredData(){
    console.log('running getData');
    const DataURL = `http://www.boredapi.com/api/activity?participants=4`
   try {
    const response = await fetch(DataURL);
    Data = await response.json();
   }
   catch(error){
    console.log("Uh oh. There was an error. Maybe data was not found?");
    console.log(error);
   }
    console.log(Data);

    let newh3 = document.createElement("h3");
    newh3.textContent = "Would you like to " + Data.activity + "?";
    let containerh3 = document.querySelector("#bored-container");
    containerh3.appendChild(newh3);

    let newYesButton = document.createElement('button');
    newYesButton.textContent = 'Yes';
    let containerYesButton = document.querySelector("#bored-container");
    containerYesButton.appendChild(newYesButton);
    newYesButton.addEventListener("click",onButtonYesClick);

    let newNoButton = document.createElement('button');
    newNoButton.textContent = 'No';
    let containerNoButton = document.querySelector("#bored-container");
    containerNoButton.appendChild(newNoButton);
    newNoButton.addEventListener("click",onButtonNoClick);


}

function onButtonYesClick() {
    document.getElementById('bored-answer-1').innerHTML = "Ok, let's " + Data.activity;
  }

function onButtonNoClick() {
    document.getElementById('bored-answer-1').innerHTML = "Nothing to do then...";
    document.getElementById('bored-answer-2').innerHTML = `ok... let's do something else in`;
    timer(5);
    startTimer = true;
   
}

function timer(time){

    // 40 minutes is 2400 seconds
    var sec = time
    //var sec = 2400;

    var displaySec=0;


    var timer = setInterval(function(){

        displayMin =  (sec - sec % 60) / 60;
        displaySec = sec % 60;

        document.getElementById('boredTimerDisplay').innerHTML=displayMin + ':0' + displaySec;
        if (startTimer)
        {
            sec--;
        }
       
        if (sec < 0) {
            clearInterval(timer);
            location.reload();
        }
    }, 1000);
}

function runProgram(){

    console.log('runProgram');
    //your code goes here
    getBoredData()
}

document.addEventListener('DOMContentLoaded', runProgram);