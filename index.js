async function getWeatherData(city) {
  city = city.replace(' ', '+');
  const apiKey = '174b71bd2afaabb6bd0b45076a49b6cb';
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(weatherURL, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
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

getWeatherData('san diego');