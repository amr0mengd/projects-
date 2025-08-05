const player = document.getElementById("player");
const computer = document.getElementById('computer');
const result = document.getElementById('result');
const x = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
const playerDisplay = document.getElementById('playerdisplay');
const computerDisplay = document.getElementById('computerdisplay');



function playGame(input){

  let y = x[Math.floor(Math.random() * 3)]

  if(input === y){
    player.textContent = `Player: ${input}`;
    computer.textContent = `Computer: ${y}`;
    result.textContent = "IT'S A TIE!";
  }
  else{
    switch(input){
      case "Rock":
        result.textContent =  (y === "Scissors") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "Paper":
        result.textContent = (y === "Rock") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "Scissors":
        result.textContent = (y === "Paper") ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
    player.textContent = `Player: ${input}`;
    computer.textContent = `Computer: ${y}`;
  }

    switch(result.textContent){
      case "IT'S A TIE!":
        result.style.color = 'black';
        break
      case "YOU WIN!":
        result.style.color = 'green';
        playerScore ++;
        playerDisplay.textContent = `PlayerScore: ${playerScore}`;
        break;
      case "YOU LOSE!":
        result.style.color = 'red';
        computerScore ++;
        computerDisplay.textContent = `ComputerScore: ${computerScore}`;
        break;
    }
}