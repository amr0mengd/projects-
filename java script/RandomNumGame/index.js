const numInput = document.getElementById('num');
const submit = document.getElementById('btn');
const answer = document.getElementById('answer');

const max = 100;
const min = 1;

let random = Math.floor(Math.random() * max) + min;

submit.onclick = function(){
  const Num = Number(numInput.value);
  if(Num < 0 || Num > 100){
    answer.textContent = "The number you submitted is out of range pls try again!";
    numInput.value = '';
  }
  else if(Num < random){
    answer.textContent = "The random number is higher than what you submitted";
    numInput.value = '';
  }
  else if(Num > random){
    answer.textContent = "The random number is lower than what you submitted";
    numInput.value = '';
  }
  else{
    answer.textContent = "Congrats you successfully predicted the random number reload the page and try again :)";
    numInput.value = '';
  }
}