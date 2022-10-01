var question = document.querySelector(".question");
var answerChoices = document.querySelectorAll(".answer");
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#time");

var time = 10;

function setTimer() {
    // Sets interval in variable
    //The setInterval() method takes a function as its first argument
    var timerInterval = setInterval(function() {
      //The function is the action that we want to be evaluated at each interval. This function prints a message at each interval
      time--;
      timeEl.textContent = "Time: " + time;
  
      if(time === 0) {
        clearInterval(timerInterval);
      }

    }, 1000);
  }


  function onstartButton() {
    startButton.addEventListener("click",function(){
        setTimer();
        startButton.setAttribute("style","font-size:20px");

    });
    

  }

  onstartButton();
