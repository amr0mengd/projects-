const maxNum = 100; 
const minNum = 1;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = Number(window.prompt(`guess a Number between ${maxNum} - ${minNum}`));
    
    if (isNaN(guess) || guess > maxNum || guess < minNum) {
        window.alert("Pls Enter A Valid Number");
    }
    else {
        attempts++;
        if (guess < answer) {
            window.alert("Too LOW! Guess again");
        }
        else if (guess > answer) {
            window.alert("Too HIGH! Guess again");
        }
        else{
            window.alert(`Congrats Your answer is Indeed Correct You Guessed ${attempts} times`);
            running = false;
        }
    }
}