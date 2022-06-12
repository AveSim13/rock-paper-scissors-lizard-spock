//computer choices
const choices = ["rock", "paper", "scissors"]
const winners = [];

function game() {
    for (let i = 1; i <= 5; i++){
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round)
}

function playerChoice() {
    let input = prompt("Choose your fighter: Rock, Paper, or Scissors?");
    while (input == null) {
        input = prompt("Choose your fighter: Rock, Paper, or Scissors?");  
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Please choose a valid fighter: Rock, Paper, or Scissors?");
        while (input == null) {
            input = prompt("Choose your fighter: Rock, Paper, or Scissors?");  
        }
        input =  input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice() {
   return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
    return choices.includes(choice);
}

function checkWinner(pChoice, cChoice){
    if(pChoice === cChoice) {
        return 'There are no winners today. (Tie)';
    } else if(
        (pChoice === "rock" && cChoice == "scissors") ||
        (pChoice === "paper" && cChoice == "rock") || 
        (pChoice === "scissors" && cChoice == "paper")
     ) {
        return "Player";
    } else{
        return "Computer";
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "There are no winners today. (Tie)").length; 
    console.log('Results:');
    console.log('Player Wins: ',playerWins);
    console.log('Computer Wins: ',computerWins);
    console.log('Ties: ',ties); 
}

function logRound(playerChoice,computerChoice,winner,round){
    console.log('Round: ',);
    console.log('Players Chose: ',playerChoice);
    console.log('Computer Chose: ',computerChoice);
    console.log('--------------------------------')
}




