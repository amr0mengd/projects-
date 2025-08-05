const display = document.getElementById('display');


function AppendToDisplay(input){
  display.value += input;
}

function clearIt(){
  display.value = "";
}

function calculate(){
  display.value = eval(display.value);
}