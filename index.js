async function getWeatherData(city) {
  city = city.replace(' ', '+');
  const apiKey = '174b71bd2afaabb6bd0b45076a49b6cb';
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(weatherURL, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    const temp = weatherData.main.temp;
    console.log(temp);
    const description = weatherData.weather[0].description;
    console.log(description);
    return {temp,};
  } catch (error) {
    console.error(error);
  }
}

function kelvinToCelsius(k) {
  return k - 273.15;
}

function kelvinToFahrenheit(k) {
  return 1.8 * (k - 273) + 32;
}

const weatherData = getWeatherData('san diego');
