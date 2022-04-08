async function getWeatherData(city) {
  city = city.replace(' ', '+');
  const apiKey = '174b71bd2afaabb6bd0b45076a49b6cb';
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(weatherURL, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    const temp = weatherData.main.temp;
    const description = weatherData.weather[0].description;
    return {temp, description};
  } catch (error) {
    console.error(error);
  }
}

async function displayWeatherGIF(description) {
  const apiKey = `OvCaiHWeCF5r3YjoxkGdqJDECFnlDDmD`;
  const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${description}`;
  const img = document.querySelector('img');
  try {
    const response = await fetch(url, {mode: 'cors'});
    const data = await response.json();
    img.src = data.data.images.original.url; 
  } catch (e) {
    console.error(e);
  }
}

function kelvinToCelsius(k) {
  return k - 273.15;
}

function kelvinToFahrenheit(k) {
  return 1.8 * (k - 273) + 32;
}

const city = document.getElementById('city');
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
  const cityString = city.value;
  city.value = '';
  
  getWeatherData(cityString)
    .then(data => {
      console.log(data);
      const h1 = document.querySelector('.city-text');
      const temp = document.querySelector('.temp');
      const descrip = document.querySelector('.description');

      h1.textContent = cityString;
      temp.textContent = data.temp;
      descrip.textContent = data.description;
      
      displayWeatherGIF(data.description);
    });
});