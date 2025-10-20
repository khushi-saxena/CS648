/*eslint-env browser*/

function handleClick1() {
    alert("I have been clicked");
}

function handleClick2() {
    alert("I have been clicked");
}

function handleClick3() {
    alert("I have been clicked");
}

var button2 = document.getElementById('button2');
button2.onclick = handleClick2;

var button3 = document.getElementById('button3');
button3.addEventListener('click', handleClick3);

var button4 = document.getElementById('button4');
button4.addEventListener('click', function() {
    alert("I have been clicked");
});

var button5 = document.getElementById('button5');
button5.addEventListener('click', function() {
    alert("I have been clicked");
});

