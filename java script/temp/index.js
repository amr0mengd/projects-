const textBox = document.getElementById("input");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const submit = document.getElementById("submitbtn");
const result = document.getElementById("result");

let temp;

function convert(){
  if(btn1.checked){
    temp = Number(textBox.value);
    temp = (temp * 9/5) + 32;
    result.textContent = `${temp.toFixed(1)}°F`
  }
  else if(btn2.checked){
    temp = Number(textBox.value);
    temp = (temp - 32) * 5/9;
    result.textContent = `${temp.toFixed(1)}°C`
  }
  else{
    result.textContent = "Please select a unit to convert"
  }
}