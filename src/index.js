require.context("../src/images/", true, /\.(jpg|jpeg|gif|png|svg|webp)$/);
import "./style.scss";
import { weatherTypes } from "./weathertypes.js";

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
  const chosenWeather = weatherTypes.find(
    (type) => type.weather === this.getAttribute("data-weather")
  );

  addWeatherToTotal(chosenWeather);
};

const weatherButtons = document.querySelectorAll(".weather-button");
weatherButtons.forEach((button) => {
  button.addEventListener("click", findWeatherType);
});
