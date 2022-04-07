async function getWeather(city) {
  city = city.replace(' ', '+');
  const apiKey = '174b71bd2afaabb6bd0b45076a49b6cb';
  let weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(weatherURL, {mode: 'cors'});
  const weatherData = await response.json();
  console.log(weatherData);
}

getWeather('los angeles');