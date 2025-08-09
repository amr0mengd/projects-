const weatherForm = document.querySelector('weatherForm');
const Input = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const API = 'ed82224076d9a3e4b3c0cf59f79927d5';

document.addEventListener('DOMContentLoaded', () => {Input.value = '';})

document.addEventListener('submit', async (e) => {
  e.preventDefault(); card.replaceChildren();
  const city = Input.value;

  if(city){
    const weatherData = await getWeatherData(city);
    displayData(weatherData);
  }
  else{
    displayError('Please Enter A City Name');
  }
});

async function getWeatherData(city){
  const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`;
  let data = await fetch(APIurl);
  if(!data.ok){
    displayError('Please Enter A Valid City Name');
    Input.value = '';
  }
  return await data.json();
}

function displayData(data){
  const {name:city , main: {temp, humidity}, weather:[{description, id}]} = data;

  const cityDisplay = document.createElement('h1');
  const tempDisplay = document.createElement('p');
  const humidityDisplay = document.createElement('p');
  const descDisplay = document.createElement('p');
  const emojiDisplay = document.createElement('p');

  cityDisplay.textContent = city;
  tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  descDisplay.textContent = description;
  emojiDisplay.textContent =   toEmoji(id);

  cityDisplay.classList.add('cityDisplay');
  tempDisplay.classList.add('tempDisplay');
  humidityDisplay.classList.add('humidityDisplay');
  descDisplay.classList.add('descDisplay');
  emojiDisplay.classList.add('emojiDisplay');

  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(emojiDisplay);

}

function toEmoji(id){
  switch(true){
    case(id >= 200 && id < 300):
      return "⛈️";
    case(id >= 300 && id < 600):
      return "🌧️";
    case(id >= 600 && id < 700):
      return "❄️";
    case(id >= 700 && id < 800):
      return "🌫️";
    case(id === 800):
      return "☀️";
    case(id >= 800 && id < 810):
      return "☁️";
    default:
      return "❓";
  }
}

function displayError(error){
  const errorDisplay = document.createElement('p');
  errorDisplay.textContent = error;
  errorDisplay.classList.add("errorDisplay");

  card.appendChild(errorDisplay);
}
