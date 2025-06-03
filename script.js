//Logic Variables
let userScore = 0;
let computerScore = 0;
let validInput = false;
let playAgain = true;
let userInput;
let userChoice;

//DOM Constants
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

const resultPanel = document.querySelector('#results');
const displayPlayerScore = document.querySelector('#playerScore');
const displayComputerScore = document.querySelector('#computerScore');

//DOM elements
displayComputerScore.textContent = 0;
displayPlayerScore.textContent = 0;

//Event Listeners
rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);

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
  if (this.id === 'rock') {
    alert('rock');
  } else if (this.id === 'paper') {
    alert('paper');
  } else {
    alert('scissors');
  }

  let computerChoice = getComputerChoice();
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

function getUserChoice(input) {

  if (input == null || input == undefined) {
    alert('You must input a valid option (rock, paper, scissors)');
    return;
  }

  let userChoice = input.toLowerCase();

  if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
    validInput = true;
  } else {
    alert('Please enter a valid option (rock, paper, scissors)');
    return;
  }

  return userChoice;
}

function getUserInput() {
  let userInput = prompt('Ready ? Type your choice ! (rock, paper, scissors)');
  return userInput;
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

function showChoices(userChoice, computerChoice) {
  alert('Rock.. Paper.. Scissors... \nYou play ' + userChoice + ', Computer plays ' + computerChoice);
}

function updateScore(result) {
  switch (result) {
    case 'tie':
      break;
    case 'user':
      userScore++;
      break;
    case 'computer':
      computerScore++;
      break;
  }
}

function showScore() {
  return 'Computer[' + computerScore + '] : You[' + userScore + ']';
}

function showResult(result) {
  switch (result) {
    case 'tie':
      alert('It is a tie ! No one gets points : ' + showScore());
      break;
    case 'user':
      alert('You win ! ' + showScore());
      break;
    case 'computer':
      alert('You lose ! ' + showScore());
      break;
  }
}