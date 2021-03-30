require.context("../src/images/", true, /\.(jpg|jpeg|gif|png|svg|webp)$/);
import "./style.scss";
import { weatherTypes } from "./weathertypes.js";
import { Cucumber } from "./cropslist.js";

const myCuc = new Cucumber();
console.log(myCuc.getAge());

const seasonTotals = (function () {
  let totalSun = 0;
  let totalWater = 0;

  const getSun = () => totalSun;
  const getWater = () => totalWater;

  const increaseTotals = function (amounts) {
    totalSun += amounts.sun;
    totalWater += amounts.water;
  };

  return { getSun, getWater, increaseTotals };
})();

const updateTotals = function () {
  document.getElementById(
    "sun-points-total"
  ).textContent = seasonTotals.getSun();
  document.getElementById(
    "water-points-total"
  ).textContent = seasonTotals.getWater();
};

const addWeatherToTotal = function (weather) {
  seasonTotals.increaseTotals(weather);
  updateTotals();
};

const findWeatherType = function () {
  const button = this.closest(".weather-button");

  const chosenWeather = weatherTypes.find(
    (type) => type.weather === button.getAttribute("data-weather")
  );

  addWeatherToTotal(chosenWeather);
};

const weatherButtons = document.querySelectorAll(".weather-button img");
weatherButtons.forEach((button) => {
  button.addEventListener("click", findWeatherType);
});
