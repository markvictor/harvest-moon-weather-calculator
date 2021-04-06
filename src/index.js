require.context("../src/images/", true, /\.(jpg|jpeg|gif|png|svg|webp)$/);
import "./style.scss";
import { displayNewCrop, refreshCurrentCrops } from "./domDrawing.js";
import { addWeatherToCrops, createNewCrop } from "./trackCrops.js";
import { weatherTypes } from "./weathertypes.js";

const findWeatherType = function () {
  const button = this.closest(".weather-button");

  const chosenWeather = weatherTypes.find(
    (type) => type.weather === button.getAttribute("data-weather")
  );

  // addWeatherToTotal(chosenWeather);
  addWeatherToCrops(chosenWeather);
  refreshCurrentCrops();
};

const addCrop = function (event) {
  event.preventDefault();
  let crop = Object.fromEntries(new FormData(event.target).entries());
  let newCrop = createNewCrop(crop.type);
  displayNewCrop(newCrop);
};

const weatherButtons = document.querySelectorAll(".weather-button img");
weatherButtons.forEach((button) => {
  button.addEventListener("click", findWeatherType);
});

const addCropForm = document.getElementById("add-crops-form");
addCropForm.addEventListener("submit", (e) => addCrop(e));
