require.context("../src/images/", true, /\.(jpg|jpeg|gif|png|svg|webp)$/);
import "./style.scss";
import { displayNewCrop, refreshCurrentCrops } from "./domDrawing.js";
import { myCrops, addWeatherToCrops, createNewCrop } from "./trackCrops.js";
import { weatherTypes } from "./weathertypes.js";
import { cropId } from "./crop.js";

const findWeatherType = function () {
  const button = this.closest(".weather-button");

  const chosenWeather = weatherTypes.find(
    (type) => type.weather === button.getAttribute("data-weather")
  );

  addWeatherToCrops(chosenWeather);
  refreshCurrentCrops();
};

const addCrop = function (event) {
  event.preventDefault();
  let crop = Object.fromEntries(new FormData(event.target).entries());
  let newCrop = createNewCrop(crop.type);
  displayNewCrop(newCrop);
};

const addListeners = function () {
  const weatherButtons = document.querySelectorAll(".weather-button img");
  weatherButtons.forEach((button) => {
    button.addEventListener("click", findWeatherType);
  });

  const addCropForm = document.getElementById("add-crops-form");
  addCropForm.addEventListener("submit", (e) => addCrop(e));
};

// LocalStorage test from MDN
const storageAvailable = function (type) {
  var storage;
  try {
    storage = window[type];
    var x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
};

const checkStorage = function () {
  if (storageAvailable("localStorage")) {
    let storedCropsList = localStorage.getItem("localMyCrops");
    let storedCropId = localStorage.getItem("localCropId");

    if (storedCropsList) {
      myCrops.replaceWithLocalCrops(storedCropsList);
      for (let crop of myCrops.getCrops()) {
        displayNewCrop(crop);
      }
      if (storedCropId) {
        cropId.updateIdWithLocal(storedCropId);
      }
    }
  }
};

const launchApp = (function () {
  const calculator = document.getElementById("calculator-body");

  if (calculator) {
    addListeners();
    checkStorage();
  }
})();
