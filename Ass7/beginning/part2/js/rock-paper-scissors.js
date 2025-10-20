var userChoice = prompt("Choose rock, paper, or scissors:");
userChoice = userChoice.toLowerCase();

var computerChoiceNum = Math.floor(Math.random() * 3);
var computerChoice;

if (computerChoiceNum === 0) {
    computerChoice = "rock";
} else if (computerChoiceNum === 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

console.log("User chose: " + userChoice);
console.log("Computer chose: " + computerChoice);

var result;

if (userChoice === computerChoice) {
    result = "It's a tie!";
} else if (userChoice === "rock" && computerChoice === "scissors") {
    result = "You win!";
} else if (userChoice === "paper" && computerChoice === "rock") {
    result = "You win!";
} else if (userChoice === "scissors" && computerChoice === "paper") {
    result = "You win!";
} else {
    result = "Computer wins!";
}

alert(result + "\nYou chose: " + userChoice + "\nComputer chose: " + computerChoice);
console.log(result);
