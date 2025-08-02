function updateClock(){
  const time = new Date();
  let hour = time.getHours();
  const m = hour >= 12 ? "PM" : "AM"; 
  hour = hour % 12 || 12;
  hour = hour.toString().padStart(2, 0);
  const minutes = time.getMinutes().toString().padStart(2, 0);
  const seconds = time.getSeconds().toString().padStart(2, 0);
  const clock = `${hour}:${minutes}:${seconds} ${m}`;
  document.getElementById("Clock").textContent = clock;
}

updateClock();
setInterval(updateClock, 1000)