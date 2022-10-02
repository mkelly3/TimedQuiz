var questionTitle = document.querySelector(".question");
var answerChoices = document.querySelectorAll(".answer");
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var answerChoice1 = document.querySelector("#one");
var answerChoice2 = document.querySelector("#two");
var answerChoice3 = document.querySelector("#three");
var answerChoice4 = document.querySelector("#four");
var playerScore = document.querySelector("#score");
var playerInitials = document.querySelector("#initials");
var endScreen = document.querySelector(".endScreen");

//variables for the time and players overall score 
var time = 60;
var score = 0;

//list of questions
var questionChoices = [
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "three"
    },
    {
        question: "What is my name",
        choice1: "Morgan",
        choice2: "Kelly",
        choice3: "Liz",
        choice4: "All of the above",
        correct: "four"
    },
    {
        question: "What is my favorite color",
        choice1: "blue",
        choice2: "green",
        choice3: "purple",
        choice4: "yellow",
        correct: "one"
    },
    {
        question: "Hello word",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "three"
    },
    {
        question: "What is the meaning of life",
        choice1: "IDK",
        choice2: "Everything",
        choice3: "Ice Cream",
        choice4: "Hola",
        correct: "choice2"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "one"
    },
    {
        question: "What is 2+2",
        choice1: "4",
        choice2: "6",
        choice3: "2",
        choice4: "1",
        correct: "one"
    },
    {
        question: "What is my favorite animal",
        choice1: "Tiger",
        choice2: "Dog",
        choice3: "Dolphin",
        choice4: "Bear",
        correct: "two"
    },
    {
        question: "How many siblings do i have",
        choice1: "three",
        choice2: "zero",
        choice3: "2",
        choice4: "1",
        correct: "four"
    }
    ,
    {
        question: "What is my favorite season",
        choice1: "fall",
        choice2: "spring",
        choice3: "winter",
        choice4: "summer",
        correct: "three"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "one"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "one"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "one"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "one"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "one"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "one"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "one"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "one"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "one"
    },
    {
        question: "What HTML element is used to insert a picture",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "one"
    },
]

//empty array to hold random questions
var randomQuestions = []
var questionNumber = 0; 

function setTimer() {
    var timerInterval = setInterval(function() {
      time--;
      timeEl.textContent = "Time: " + time;
  
      if(time === 0 || questionNumber == 10) {
        clearInterval(timerInterval);
      }

    }, 1000);
  }



  //function to choose 10 random questions for the quiz
  function chooseRandomQuestion(){
    //used a while loop for when the question array is less then 10
    while(randomQuestions.length <10) {

        //randomly selecting questions from the object variable Question Choisce
        var random = questionChoices[Math.floor(Math.random() *questionChoices.length)]

        //if the question has not already been randomly selected it will be pushed to the array
        if(!randomQuestions.includes(random)){
            randomQuestions.push(random);
            //console.log(randomQuestions);
        }
    }
  }
  //display the next question and answer choices
  var currentQ;

  function displayQestion(number){
    chooseRandomQuestion();
    currentQ = randomQuestions[number];

    if(number < randomQuestions.length) {
        questionTitle.textContent = currentQ.question;
        answerChoice1.textContent = currentQ.choice1;
        answerChoice2.textContent = currentQ.choice2;
        answerChoice3.textContent = currentQ.choice3;
        answerChoice4.textContent = currentQ.choice4;  
    }
    else{
        questionTitle.textContent = "";
        answerChoice1.textContent = "";
        answerChoice2.textContent = "";
        answerChoice3.textContent = "";
        answerChoice4.textContent = "";
        playerScore.textContent = "Your Score is " + score;
    }
    
  }

  //function to check if the correct answer is chosen
  
  

function correctAnswerClicked(){
    var correctAnswer = currentQ.correct;
    
   
    for(var i=0; i<answerChoices.length; i++){
        answerChoices[i].addEventListener("click",function(event) {
            key = event.target.id;
            console.log(key);
            if(key === correctAnswer){
                score = score + 1;
                console.log(score);
            }
            else{
                time = time - 2;
            }
            questionNumber++;
            displayQestion(questionNumber);
        })
    }
    
}

function saveUserScore(){
    var userInfo = {
        finalScore: score,
        initials: playerInitials.value
    }
    localStorage.setItem("userInfo",JSON.stringify(userInfo));
}

function getUserScores(){
    var lastScore = JSON.parse(localStorage.getItem("userInfo"));

    if(lastScore !== null){
        playerScore.textContent = userInfor.score;
        playerInitials.textContent = userInfo.initials;
    }
    else{
        return;
    }
}


//end the game and bring up 
function endGame(){
    var userName = document.createElement("input");
    if(questionNumber === 9 || time === 0){
        endScreen.appendChild(userName);
        saveUserScore();
        getUserScores();
    }
}


function onstartButton() {
    startButton.addEventListener("click",function(){
        displayQestion(questionNumber);
        correctAnswerClicked();
        setTimer();
        startButton.setAttribute("style","font-size:20px");

    });
  }

onstartButton();
endGame();


