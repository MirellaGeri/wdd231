document.getElementById("year").innerHTML = (new Date().getFullYear());
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const apiKey = '751efabb354db4e99cfca762dd35362b'; 
const city = 'Madrid'; 
const weatherContainer = document.querySelector('#text_weather');
const forecastContainer = document.querySelector('#text_weatherforecast');

async function getCurrentWeather() {
  try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
      const data = await response.json();
      
      const temperature = Math.round(data.main.temp);
      const description = data.weather[0].description;
      const high = Math.round(data.main.temp_max);
      const low = Math.round(data.main.temp_min);
      const humidity = data.main.humidity;

      weatherContainer.innerHTML = `
          <p>${temperature}° F</p>
          <p>${description.charAt(0).toUpperCase() + description.slice(1)}</p>
          <p>High: ${high}°</p>
          <p>Low: ${low}°</p>
          <p>Humidity: ${humidity}%</p>
      `;
  } catch (error) {
      console.error('Error fetching current weather:', error);
  }
}
async function getWeatherForecast() {
  try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`);
      const data = await response.json();

      const forecastData = data.list.filter((entry, index) => index % 8 === 0); // Cada 3 horas hay una entrada, así que seleccionamos cada 8vo elemento para un pronóstico diario.

      forecastContainer.innerHTML = '';
      forecastData.forEach(entry => {
          const date = new Date(entry.dt * 1000);
          const temperature = Math.round(entry.main.temp);
          const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // Nombre del día

          forecastContainer.innerHTML += `
              <p>${day}: ${temperature}° F</p>
          `;
      });
  } catch (error) {
      console.error('Error fetching weather forecast:', error);
  }
}

getCurrentWeather();
getWeatherForecast();

function myFunction() {
    var x = document.getElementById("myheader");
    if (x.className === "header-right") {
      x.className += " responsive";
    } else {
      x.className = "header-right";
    }
  }