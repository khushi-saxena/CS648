//  Problem 8: Countdown (5 points)

let userNumber = parseInt(prompt("Enter a number for countdown:"));


if (isNaN(userNumber) || userNumber < 0) {
    console.log("Please enter a valid positive number.");
} else {
    
    for (let i = userNumber; i >= 0; i--) {
        console.log(i);
    }
}
