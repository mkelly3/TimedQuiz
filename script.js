var container = document.querySelector(".container");
var questionTitle = document.querySelector(".question");
var answerChoices = document.querySelectorAll(".answer");
var startButton = document.querySelector("#start");
var timeEl = document.querySelector("#time");
var answerChoice1 = document.querySelector("#one");
var answerChoice2 = document.querySelector("#two");
var answerChoice3 = document.querySelector("#three");
var answerChoice4 = document.querySelector("#four");
var playerScore = document.querySelector("#score");
var playerInitials = document.getElementById('initials').value;
var gameScreen = document.querySelector("#game");
var endScreen = document.querySelector("#end");
var introScreen = document.querySelector("#intro");
var submitScoresButton = document.querySelector("#submitScores");
var lastScoresScreen = document.querySelector("#lastScores");
var previous = document.querySelector("#previousScores");




//variables for the time and players overall score 
var time = 75;
var score = 0;
//empty array to hold random questions
var randomQuestions = []
var questionNumber = 0; 
var scoreList = [];
var initialList = [];
var timerInterval;

//list of questions
var questionChoices = [
    {
        question: "What HTML element is used to insert a picture?",
        choice1: "<picture/>",
        choice2: "<a/>",
        choice3: "<img/>",
        choice4: "<br/>",
        correct: "three"
    },
    {
        question: "What does HTML stand for?",
        choice1: "Hyper Text Markup Language",
        choice2: "Hyper Text Marketing Lanaguae",
        choice3: "Hyper Trainer Marking Language",
        choice4: "HTML is not an abbreviation",
        correct: "one"
    },
    {
        question: "Which answer is the correct HTML title header?",
        choice1: "<header>Title</header>",
        choice2: "<h1/>",
        choice3: "<h1>Title</h2>",
        choice4: "<h1>Title</h1>",
        correct: "four"
    },
    {
        question: "How do you define a variable in JavaSript?",
        choice1: "let",
        choice2: "--var",
        choice3: "var",
        choice4: "variable",
        correct: "three"
    },
    {
        question: "How do you apply CSS elements universally?",
        choice1: "*",
        choice2: "body",
        choice3: ".class",
        choice4: "#",
        correct: "one"
    },
    {
        question: "What is not a semantic element?",
        choice1: "section",
        choice2: "header",
        choice3: "aside",
        choice4: "div",
        correct: "four"
    },
    {
        question: "What property is used to change the background color?",
        choice1: "color",
        choice2: "backgound",
        choice3: "background-color",
        choice4: "border",
        correct: "three"
    },
    {
        question: "Which CSS property controls the text size?",
        choice1: "text",
        choice2: "font-size",
        choice3: "font-weight",
        choice4: "text-size",
        correct: "two"
    },
    {
        question: "How would you write 'Hello World' in an alert box?",
        choice1: "('Hello World')",
        choice2: "confirm('Hello World')",
        choice3: "prompt('Hello World')",
        choice4: "alert('Hello World')",
        correct: "four"
    }
    ,
    {
        question: "How do you create a function called myFunction in Javascript?",
        choice1: "function myFunction()",
        choice2: "myFunction()",
        choice3: "create function myFunction()",
        choice4: "var function myFunction()",
        correct: "one"
    },
    {
        question: "How do you set two variables strictly equal to one another",
        choice1: "=",
        choice2: "==",
        choice3: "===",
        choice4: "!=",
        correct: "three"
    },
    {
        question: "What arithmetic expression shows two things are no equal",
        choice1: "!=",
        choice2: "/",
        choice3: "notEqual",
        choice4: "=!",
        correct: "one"
    },
    {
        question: "How would you run a set of data multiple times",
        choice1: "If else statment",
        choice2: "repeat the same code over and over again",
        choice3: "for loop",
        choice4: "function",
        correct: "three"
    },
    {
        question: "What is the data type for a variable that equls true",
        choice1: "String",
        choice2: "Boolen",
        choice3: "Null",
        choice4: "Integer",
        correct: "two"
    },
    {
        question: "What does == do? ",
        choice1: "Compares two variables data type and value",
        choice2: "Compares two variables value only",
        choice3: "Compares two variables data type only",
        choice4: "Compares two variables in data type, value and length",
        correct: "two"
    }
]



function setTimer() {
    timerInterval = setInterval(function() {
      time--;
      timeEl.textContent = "Time: " + time;
  
      if(time === 0) {
        clearInterval(timerInterval);
        gameScreen.classList.add('hidden');
        endScreen.classList.remove('hidden');
        // playerScore.textContent = score;
        // playerInitials.textContent = 'Please enter your initials'
      }

    }, 1000);
  }




  //function to choose 10 random questions for the quiz
  function chooseRandomQuestion(){
    //used a while loop for when the question array is less then 10
    while(randomQuestions.length <10) {

        //randomly selecting questions from the object variable Question Choisce
        var random = questionChoices[Math.floor(Math.random() *questionChoices.length)]
        console.log('random',randomQuestions)
        //if the question has not already been randomly selected it will be pushed to the array
        if(!randomQuestions.includes(random)){
            randomQuestions.push(random);
            //console.log(randomQuestions);
        }
    }
  }
  //display the next question and answer choices
  var currentQ;
  
//end the game and bring up 
function endGame(){
    var userName = document.createElement("input");
    if(questionNumber === 9 || time === 0){
        userScore();
        endScreen.appendChild(userName);
        saveUserScore();
        getUserScores();
        introScreen.classList.add('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.remove('hidden'); 
    }
}


  function displayQestion(number){

    currentQ = randomQuestions[number];

    if(number < randomQuestions.length) {
        questionTitle.textContent = currentQ.question;
        answerChoice1.textContent = currentQ.choice1;
        answerChoice2.textContent = currentQ.choice2;
        answerChoice3.textContent = currentQ.choice3;
        answerChoice4.textContent = currentQ.choice4;  
    }
    else{
        endScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
        playerScore.textContent = score;
        timeEl.textContent = '';
        stopTimer();
    }
   
    
  }
  function stopTimer(){

    clearInterval(timerInterval);
    timerInterval = null;
    timeEl.textContent = "";

}
  

function correctAnswerClicked(){
    correctAnswer = currentQ.correct;
    console.log(correctAnswer)
    for(var i=0; i<answerChoices.length; i++){
        answerChoices[i].addEventListener("click",function(event) {
            key = event.target.id;
            
            if(key == correctAnswer){
                console.log(key);
                ++score; 
                console.log(score);
            }
            else {
                time = time - 15;
                if(time == 0 || questionNumber === 10){
                    stopTimer();
                    endGame();
                    endScreen.classList.remove('hidden')
                }
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



function clickViewHighScores(){
    var highScoresButton = document.getElementById('highScores');
    var lastScoresScreen = document.getElementById('lastScores');

    highScoresButton.addEventListener("click", function(){
        lastScoresScreen.classList.remove('hidden');
        introScreen.classList.add('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden'); 
        previous.textContent = JSON.parse(localStorage.getItem("score"));
        

    })
}
clickViewHighScores();



function onSaveScores(){
    
    submitScoresButton.addEventListener("click", function(){
        previous.textContent = score + playerInitials;
        lastScoresScreen.classList.remove('hidden');
        introScreen.classList.add('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden'); 
        localStorage.setItem("player", JSON.stringify(score));
        
    });
    

}


function displayLastScore(){

}

function onstartButton() {
    startButton.addEventListener("click",function(){
        introScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        chooseRandomQuestion();
        displayQestion(questionNumber);
        correctAnswerClicked();
        setTimer();
    });
  }
  onstartButton();
  onSaveScores();



