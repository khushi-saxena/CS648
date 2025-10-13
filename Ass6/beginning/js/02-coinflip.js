// Problem 2: The "Coin Flip" Game (10 points)

let coinFlip = Math.random();


let choice = prompt("Select 'Heads' or 'Tails':").toLowerCase();

let coinResult = Math.round(Math.random());


let isTails = Boolean(coinResult);

if (!isTails && choice === "heads") {
 
    alert("The flip was heads and you chose heads...you win!");
} else if (!isTails && choice === "tails") {
   
    alert("The flip was heads but you chose tails...you lose!");
} else if (isTails && choice === "heads") {
   
    alert("The flip was tails but you chose heads...you lose!");
} else if (isTails && choice === "tails") {
  
    alert("The flip was tails and you chose tails...you win!");
} else {

    alert("Invalid choice. Please enter 'Heads' or 'Tails'.");
}
