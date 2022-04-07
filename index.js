async function getWeatherData(city) {
  city = city.replace(' ', '+');
  const apiKey = '174b71bd2afaabb6bd0b45076a49b6cb';
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(weatherURL, {mode: 'cors'});
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.error(error);
  }
}

getWeatherData('los angeles');