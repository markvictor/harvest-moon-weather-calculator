const getPointsTotal = function (type) {
  const points = Number(
    document.getElementById(`${type}-points-total`).textContent
  );

  return points;
};

const updateTotals = function (sun, water) {
  document.getElementById("sun-points-total").textContent = sun;
  document.getElementById("water-points-total").textContent = water;
};

const addWeatherToTotal = function (weather) {
  let currentSun = getPointsTotal("sun");
  let currentWater = getPointsTotal("water");

  let newSun = currentSun + weather.sun;
  let newWater = currentWater + weather.water;

  updateTotals(newSun, newWater);
};

const findWeatherType = function () {
  const weatherTypes = [
    {
      weather: "sunny",
      sun: 3,
      water: 0,
    },
    {
      weather: "clear",
      sun: 1,
      water: 0,
    },
    {
      weather: "cloudy",
      sun: 0,
      water: 0,
    },
    {
      weather: "drizzle",
      sun: 0,
      water: 1,
    },
    {
      weather: "rainy",
      sun: 0,
      water: 2,
    },
    {
      weather: "snowy",
      sun: 0,
      water: 2,
    },
    {
      weather: "blizzard",
      sun: 0,
      water: 3,
    },
    {
      weather: "hurricane",
      sun: 0,
      water: 3,
    },
  ];

  const chosenWeather = weatherTypes.find(
    (type) => type.weather === this.getAttribute("data-weather")
  );

  addWeatherToTotal(chosenWeather);
};

weatherButtons = document.querySelectorAll(".weather-button");
weatherButtons.forEach((button) => {
  button.addEventListener("click", findWeatherType);
});
