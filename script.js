var questionTitle = document.querySelector(".question");
var answerChoices = document.querySelectorAll(".answer");
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var answerChoice1 = document.querySelector("#one");
var answerChoice2 = document.querySelector("#two");
var answerChoice3 = document.querySelector("#three");
var answerChoice4 = document.querySelector("#four");

//variables for the time and players overall score 
var time = 10;
var score = 0;

//list of questions
var questionChoices = [
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "choice3"
    },
]

//empty array to hold random questions
var randomQuestions = []

var questionNumber = 0; 


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

  //function to choose 10 random questions for the quiz
  function chooseRandomQuestion(){
    //used a while loop for when the question array is less then 10
    while(randomQuestions.length <10) {

        //randomly selecting questions from the object variable Question Choisce
        var random = questionChoices[Math.floor(Math.random() *questionChoices.length)]

        //if the question has not already been randomly selected it will be pushed to the array
        if(!randomQuestions.includes(random)){
            randomQuestions.push(random);
            console.log(randomQuestions);
        }
    }
  }




  //display the next question and answer choices

  function displayQestion(number){
    chooseRandomQuestion();

    var currentQ = randomQuestions[number];
    questionTitle.textContent = currentQ.question;
    answerChoice1.textContent = currentQ.choice1;
    answerChoice2.textContent = currentQ.choice2;
    answerChoice3.textContent = currentQ.choice3;
    answerChoice4.textContent = currentQ.choice4;

  }

  displayQestion(questionNumber);

