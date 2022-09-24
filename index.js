let playing = false;
let score;
let action;
let timeremaining;
let correctAnswer;

//if we click start/reset button
document.getElementById("startreset").onclick = 
function(){
    //if we are playing 
    if(playing == true){
        location.reload(); //reload page
    }
    else{    // if we are not playing 
        playing = true;
        score = 0;   //set score to zero
        
        document.getElementById("scorevalue").innerHTML = score;
        
            show("timeremaining");   // show countdown box
            timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;

        //hide game over box
           hide("gameover");

        document.getElementById("startreset").innerHTML = "Reset Game";

        startCountDown();

        //generate question and answer
          generateQA();
    }
}

for(i=1; i<5;i++){
    //clicking on answer box
document.getElementById("box"+i).onclick = 
function(){
if(playing == true){
    if(this.innerHTML == correctAnswer){
        //correct answer
        score++;
       document.getElementById("scorevalue").innerHTML = score;

       //hide the wrong box
       hide("wrong");
       show("correct");
       setTimeout(function(){
            hide("correct");

       }, 1000)

       //generate new question and Answer
       generateQA();
    }
    else{
        hide("correct");
       show("wrong");
       setTimeout(function(){
            hide("wrong");
       },1000)
        
    }
}
}
}

  
  
     
     
    

 //start conuter
function startCountDown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
           if(timeremaining == 0){
            stopCountDown();
            show("gameover");
        
        
        document.getElementById("gameover").innerHTML = 
        "<p>Game Over!</p><p>Your score is " + score +".</p>";
                   hide("timeremaining");
                   hide("correct");
                   hide("wrong");
                   playing = false;
        document.getElementById("startreset").innerHTML = "Start Game";          
        

           }
    }, 1000)
}


// stop countdown
function stopCountDown(){
    clearInterval(action);
}

function hide(Id)
{
    document.getElementById(Id).style.display = "none";
}

function show(Id)
{
    document.getElementById(Id).style.display = "block";
}

function generateQA(){
  let x = 1 + Math.round(Math.random()*9);
  let y = 1 + Math.round(Math.random()*9);
  correctAnswer = x*y;
  document.getElementById("question").innerHTML = x + "x" + y;

  let correctPosition = 1 + Math.round(Math.random()*3);
  document.getElementById("box"+correctPosition).innerHTML = correctAnswer;//fill one box with correct answer


  //fill other boxes with wrong answer
  

  let answer = [correctAnswer];
  for(i=1;i<5;i++)
  if(i != correctPosition){
     let wrongAnswer;
     do{
        wrongAnswer = (1 + Math.round(Math.random()*9))*(1 + Math.round(Math.random()*9));
     }
    while(answer.indexOf(wrongAnswer)>-1){
        

     document.getElementById("box"+i).innerHTML = wrongAnswer;
                answer.push(wrongAnswer);
  }
}
}