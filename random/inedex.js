const roll = document.getElementById("roll");
const dice = document.getElementById("dice");
const dice2 = document.getElementById("dice2");

roll.onclick = function () {
    let random = Math.floor(Math.random()* 6) + 1;
    let random2 = Math.floor(Math.random()* 6) + 1;
    dice.textContent = random;
    dice2.textContent = random2;
}