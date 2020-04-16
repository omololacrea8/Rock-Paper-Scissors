// Variables
//i set the default scores to be 0
var userScore = 0;
var compScore = 0;

// i Created an onclick listener for each of the three buttons 
document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

// I Assign these functions to the event listeners above.
function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

/* i defined the main function
 turn of rock paper scissors.
  a. Take the human player's choice as an argument.
  b. Get the computer's random choice.
  c. Compare the choices to find the winner (using conditionals) which is if and else if.
  d. Declare a winner (or a tie) and increment the score. 
  */

function play(userPlay) {
  
  compPlay = getCompPlay();
  
  document.getElementById('division').innerHTML = "<p>You played <strong>" + userPlay + "</strong>. The cyber played <strong>" + compPlay + "</strong>.</p>";
  
  if(userPlay == 'rock') {
    if(compPlay == 'rock') {
      document.getElementById('division').innerHTML += "<p>You tried. :|</p>";
    } else if (compPlay == 'paper') {
      document.getElementById('division').innerHTML += "<p>You lose. :(</p>";
      compScore++;
    } else if (compPlay == 'scissors') {
      document.getElementById('division').innerHTML += "<p>You win! :)</p>";
      userScore++;
    }
  } else if (userPlay == 'paper') {
    if(compPlay == 'rock') {
      document.getElementById('division').innerHTML += "<p>You win! :)</p>";
      userScore++;
    } else if (compPlay == 'paper') {
      document.getElementById('division').innerHTML += "<p>You tried. :|</p>";
    } else if (compPlay == 'scissors') {
      document.getElementById('division').innerHTML += "<p>You lose. :(</p>";
      compScore++;
    }  
  } else if (userPlay == 'scissors') {
    if(compPlay == 'rock') {
      document.getElementById('division').innerHTML += "<p>You lose. :(</p>";
      compScore++;
    } else if (compPlay == 'paper') {
      document.getElementById('division').innerHTML += "<p>You win! :)</p>";
      userScore++;
    } else if (compPlay == 'scissors') {
      document.getElementById('division').innerHTML += "<p>You tried. :|</p>";
    }  
  }
  /*
  if userPlay is 'rock'
    if compPlay is 'rock'
      it displays "You tied :|"
    if compPlay is 'paper'
      it displays "You lose :("
      compScore = compScore++
    else if compPlay is 'scissors'
      it displays "You won :)"
      userPlay = userScore++

  else if userPlay is 'paper'
    ...
  
  else if userPlay is 'scissors'
    ...

  */
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('compScore').innerHTML = compScore;
  
}

function getCompPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}