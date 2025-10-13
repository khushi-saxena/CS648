//Problem 1: Larger or Smaller (5 points)


let firstNumber = parseInt(prompt("Enter the first integer:"));


let secondNumber = parseInt(prompt("Enter the second integer:"));


if (isNaN(firstNumber) || isNaN(secondNumber)) {
    document.write("<h2>Error: Please enter valid integers only.</h2>");
} else {

    if (firstNumber > secondNumber) {
        document.write(`<h2>The larger number is: ${firstNumber}</h2>`);
    } else if (secondNumber > firstNumber) {
        document.write(`<h2>The larger number is: ${secondNumber}</h2>`);
    } else {
        document.write(`<h2>Both numbers are equal: ${firstNumber}</h2>`);
    }
}
