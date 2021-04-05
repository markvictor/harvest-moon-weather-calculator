import { myCrops } from "./trackCrops.js";

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

const createElementWithClass = function (type, className) {
  const newElement = document.createElement(type);
  newElement.classList.add(className);

  return newElement;
};

const setCropText = function (divElement, divType, crop) {
  const textTypes = {
    name: `${crop.constructor.name}`,
    stage: `Stage: ${crop.age.stage}`,
    water: `Water: ${crop.water}`,
    sun: `Sun: ${crop.sun}`,
  };

  divElement.innerText = textTypes[divType];
};

const updateCropDisplay = function (cropDiv, crop) {
  const stageSpan = cropDiv.querySelector(".growing-crop-stage");
  setCropText(stageSpan, "stage", crop);

  const waterSpan = cropDiv.querySelector(".growing-crop-water");
  setCropText(waterSpan, "water", crop);

  const sunSpan = cropDiv.querySelector(".growing-crop-sun");
  setCropText(sunSpan, "sun", crop);
};

const createNewCropDiv = function (crop) {
  const newCropDiv = createElementWithClass("div", "growing-crop");
  newCropDiv.setAttribute("data-id", crop.id);

  const cropNameSpan = createElementWithClass("span", "growing-crop-name");
  setCropText(cropNameSpan, "name", crop);

  const cropStageSpan = createElementWithClass("span", "growing-crop-stage");
  const cropWaterCount = createElementWithClass("span", "growing-crop-water");
  const cropSunCount = createElementWithClass("span", "growing-crop-sun");

  const childDivs = [cropNameSpan, cropStageSpan, cropWaterCount, cropSunCount];

  childDivs.forEach((child) => newCropDiv.appendChild(child));

  updateCropDisplay(newCropDiv, crop);

  return newCropDiv;
};

const getCropsContainer = function () {
  return document.getElementById("current-crops");
};

const displayNewCrop = function (crop) {
  const cropsContainer = getCropsContainer();
  const newCropDiv = createNewCropDiv(crop);

  cropsContainer.appendChild(newCropDiv);
};

const refreshCurrentCrops = function () {
  myCrops.getCrops().forEach((crop) => {
    const cropDiv = document.querySelector(`[data-id="${crop.id}"]`);
    updateCropDisplay(cropDiv, crop);
  });
};

export { addWeatherToTotal, displayNewCrop, refreshCurrentCrops };
