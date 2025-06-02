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

  if (userChoice != 'rock' || userChoice != 'paper' || userChoice != 'scissors')

  return userChoice;
}

function getUserInput() {
  let userInput = prompt('Ready ? Type your choice !');
  return userInput;
}

function playRound() {
  let userInput = getUserInput();
  getUserChoice(userInput);
  getComputerChoice();
}

playRound();