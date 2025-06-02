let userScore = 0;
let computerScore = 0;

playRound();

function playRound() {
  let userInput = getUserInput();
  let userChoice = getUserChoice(userInput);
  let computerChoice = getComputerChoice();
  let result = compareChoices(userChoice, computerChoice);
  updateScore(result);
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
    console.log('You must input a valid option');
  }

  let userChoice = input.toLowerCase();

  if (userChoice != 'rock' || userChoice != 'paper' || userChoice != 'scissors') {
    alert('Please enter a valid option (rock, paper, scissors)');
  }

  return userChoice;
}

function getUserInput() {
  let userInput = prompt('Ready ? Type your choice !');
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