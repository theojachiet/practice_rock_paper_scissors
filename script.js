//Logic Variables
let userScore = 0;
let computerScore = 0;
let userChoice;

//DOM Constants
//Buttons
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

//Score
const resultPanel = document.querySelector('#results');
const displayPlayerScore = document.querySelector('#playerScore');
const displayComputerScore = document.querySelector('#computerScore');

//Current round
const displayRound = document.querySelector('#displayRounds');
const displayPlayerCurrent = document.querySelector('#playerCurrent');
const displayComputerCurrent = document.querySelector('#computerCurrent');
const displayMessage = document.querySelector('#message');


//DOM elements
displayComputerScore.textContent = computerScore;
displayPlayerScore.textContent = userScore;

//Event Listeners
rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

//BO5 Logic

//Commenting out the logic for the rounds System
// while (playAgain) {

//   while (userScore < 3 && computerScore < 3) {
//     playRound();
//   }

//   if (userScore >= 3) {
//     alert('You win the game ! Congrats !');
//   } else if (computerScore >= 3) {
//     alert('You lose... Better luck next time ?');
//   }

//   playAgain = confirm('Do you want to play another game ? Click OK, if not, click Cancel.');
//   if (playAgain) {
//     userScore = 0;
//     computerScore = 0;
//   }
// }

// function playRound() {

//   validInput = false;
//   userInput = getUserInput();
//   userChoice = getUserChoice(userInput);

//   while (!validInput) {
//     userInput = getUserInput();
//     userChoice = getUserChoice(userInput);
//   }

//   let computerChoice = getComputerChoice();
//   showChoices(userChoice, computerChoice);

//   let result = compareChoices(userChoice, computerChoice);

//   updateScore(result);
//   showResult(result);
// }

//Clone function to handle buttons input
function playRound() {
  let userChoice = this.id;

  let computerChoice = getComputerChoice();
  displayComputerCurrent.textContent = computerChoice;
  displayPlayerCurrent.textContent = userChoice;

  let result = compareChoices(userChoice, computerChoice);

  updateScore(result);
  displayComputerScore.textContent = computerScore;
  displayPlayerScore.textContent = userScore;

  if (userScore >= 3) {
    userScore = 0;
    computerScore = 0;
    alert('You win the game ! Congrats !');
  } else if (computerScore >= 3) {
    userScore = 0;
    computerScore = 0;
    alert('You lose... Better luck next time ?');
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function compareChoices(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') return 'computer';
    else return 'user';
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') return 'computer';
    else return 'user';
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') return 'computer';
    else return 'user';
  } else {
    return 'INVALID';
  }
}

function updateScore(result) {
  switch (result) {
    case 'tie':
      displayMessage.textContent = "It's a tie";
      break;
    case 'user':
      displayMessage.textContent = "You win the round !";
      userScore++;
      break;
    case 'computer':
      displayMessage.textContent = "You loose the round";
      computerScore++;
      break;
  }
}