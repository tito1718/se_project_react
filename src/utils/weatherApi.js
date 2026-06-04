export const getWeather = ({ latitude, longitude }, apiKey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error: ${res.status}`);
  });
};

export const filterWeatherData = (data) => {
  const result = {};

  result.city = data.name;
  result.temperature = {
    F: Math.round(data.main.temp),
    C: Math.round(((data.main.temp - 32) * 5) / 9),
  };
  result.type = getWeatherType(result.temperature.F);
  result.condition = getWeatherCondition(data.weather[0].main);
  result.isDay = isDay(data.sys, Date.now());

  return result;
};

const isDay = ({ sunrise, sunset }, now) => {
  return sunrise * 1000 < now && now < sunset * 1000;
};

const getWeatherType = (temperature) => {
  if (temperature >= 80) {
    return "hot";
  } else if (temperature >= 60) {
    return "warm";
  } else if (temperature >= 30) {
    return "cold";
  } else {
    return "freezing";
  }
};

const getWeatherCondition = (condition) => {
  const weatherCondition = condition.toLowerCase();

  if (weatherCondition === "clear") {
    return "clear";
  } else if (weatherCondition === "clouds") {
    return "cloudy";
  } else if (weatherCondition === "rain" || weatherCondition === "drizzle") {
    return "rain";
  } else if (weatherCondition === "snow") {
    return "snow";
  } else if (weatherCondition === "thunderstorm") {
    return "storm";
  } else {
    return "fog";
  }
};
