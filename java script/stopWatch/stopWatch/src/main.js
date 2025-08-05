const watch = document.getElementById('stopwatch');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false; 


function start(){
  if (!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10)
    isRunning = true;
  }
}

function stop(){
  if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset(){
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  watch.textContent = "00:00:00:00";
}

function update(){
  elapsedTime = Date.now() - startTime;
  let hours = String(Math.floor(elapsedTime / (60 * 60 * 1000))).padStart(2,0);
  let minutes = String(Math.floor(elapsedTime / (60 * 1000) % 60)).padStart(2,0);
  let seconds = String(Math.floor(elapsedTime / 1000 % 60)).padStart(2,0);
  let milliseconds = String(Math.floor(elapsedTime % 1000 / 10)).padStart(2,0);
  watch.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;

}