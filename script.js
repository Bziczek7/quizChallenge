
let timer = 0;
let scoreId = setInterval(function(){
timer++
}, 1000);


function gameOver(){
    clearInterval(scoreId);
}


let questions = [{question: "this is question number 1", answers: ["ans1a", "ans2a", "ans3a", "ans4"], correctAnswer: 1},
{question: "QUESTION NO 2", answers: ["ans1b", "ans2b", "ans3b", "ans4"], correctAnswer: 1},
{question: "Numero 3 question", answers: ["ans1c", "ans2c", "ans3c", "ans4"], correctAnswer: 1}]

let currentQuestion = 0;
let questionsDisplayBox = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let questionChoice = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#start-screen");
let endScreen = document.querySelector("#end-screen");
let j = 0;
let timerCount = document.querySelector("#time");

startButton.addEventListener("click", function (e){

    //change class- hiden
    console.log("gowno");
    startScreen.setAttribute("class", "hide");
    questionsDisplayBox.setAttribute("class", "start");
    
        
                   
                    
                    

//
})
//renderquestion()?
changeQuestion();
function changeQuestion (){
    if (j < 3){
    questionTitle.textContent = questions[j].question;



    for (let i = 0; i < 4; i++){

        let option = document.createElement("button");
        option.setAttribute("data-index", i);
        option.setAttribute("class", "answerButton");
        option.textContent = questions[j].answers[i];
        
        questionChoice.appendChild(option);
        }
        checkAnswer();

    }
//render score

}

 //check answer
function checkAnswer(){
    questionsDisplayBox.addEventListener("click", function (e){
                        e.preventDefault();
        
        if(e.target.matches(".answerButton")){
            console.log(e.target)
            let answerChoice = e.target.getAttribute("data-index");
        console.log(answerChoice);
        if (answerChoice == questions[j].correctAnswer){
            j++;
            // clearButtons();
        questionChoice.textContent = ""
            
            changeQuestion();
                //render()
        } else {timer - 10;
        j++; 
        // clearButtons();
        questionChoice.textContent = ""

        changeQuestion();}
    //render()
}
// clearButtons();
    })
   
}

//  function clearButtons() {
// //     let answerButton = document.querySelector(".answerButton");
  
//   for (let i = 0; i < 4; i++){

//     let option = document.querySelector(".answerButton");
    
//     option.innerHTML = "";
    
   
//     }
//    questionChoice.parentNode.removeChild(answerButton);

//  }
function renderScore() {
    questionsDisplayBox.setAttribute("class", "hide");
    endScreen.setAttribute("class", "start");
    let finalScore = document.querySelector("#final-score");
    gameOver();
    finalScore.textContent = timer;

}

