
let timer = 0;
let scoreId = setInterval(function(){
timer++
}, 1000);


function gameOver(){
    clearInterval(scoreId);
}


let questions = [{question: "", answers: ["ans1", "ans2", "ans3", "ans4"], correctAnswer: 1},
{question: "", answers: ["ans1", "ans2", "ans3", "ans4"], correctAnswer: 1},
{question: "", answers: ["ans1", "ans2", "ans3", "ans4"], correctAnswer: 1}]

let currentQuestion = 0;
let questionsDisplayBox = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let questionChoice = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");

startButton.addEventListener("click", function (e){

    //change class- hiden
    console.log("gowno");
    startScreen.setAttribute("class", "hide");
    questionsDisplayBox.setAttribute("class", "start");

})

function chnageQuestion (){




}
