function halfNumber(num) {
    var result = num / 2;
    console.log("Half of " + num + " is " + result + ".");
    return result;
}

function squareNumber(num) {
    var result = num * num;
    console.log("The result of squaring the number " + num + " is " + result + ".");
    return result;
}

function percentOf(num1, num2) {
    var result = (num1 / num2) * 100;
    console.log(num1 + " is " + result + "% of " + num2 + ".");
    return result;
}

function findModulus(num1, num2) {
    var result = num1 % num2;
    console.log(result + " is the modulus of " + num1 + " and " + num2 + ".");
    return result;
}

function sumNumbers() {
    var input = prompt("Enter numbers separated by commas:");
    var numbers = input.split(',');
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += parseFloat(numbers[i]);
    }
    console.log("The sum of all numbers is: " + sum);
    return sum;
}

halfNumber(5);
squareNumber(3);
percentOf(2, 4);
findModulus(10, 4);
sumNumbers();