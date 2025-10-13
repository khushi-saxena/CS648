// Problem 3: The "Coin Flip" Game Redux (10 points)



let coinFlip;


for (let i = 0; i < 10; i++) {
   
    coinFlip = Math.round(Math.random());
    
 
    if (coinFlip === 0) {
        console.log("Heads");
    } else if (coinFlip === 1) {
        console.log("Tails");
    }
}
