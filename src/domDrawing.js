import { myCrops } from "./trackCrops.js";
import { allCrops } from "./cropslist.js";

// const seasonTotals = (function () {
//   let totalSun = 0;
//   let totalWater = 0;

//   const getSun = () => totalSun;
//   const getWater = () => totalWater;

//   const increaseTotals = function (amounts) {
//     totalSun += amounts.sun;
//     totalWater += amounts.water;
//   };

//   return { getSun, getWater, increaseTotals };
// })();

// const updateTotals = function () {
//   document.getElementById(
//     "sun-points-total"
//   ).textContent = seasonTotals.getSun();
//   document.getElementById(
//     "water-points-total"
//   ).textContent = seasonTotals.getWater();
// };

// const addWeatherToTotal = function (weather) {
//   seasonTotals.increaseTotals(weather);
//   updateTotals();
// };

const createElementWithClass = function (type, className) {
  const newElement = document.createElement(type);
  newElement.classList.add(className);

  return newElement;
};

const setCropText = function (divElement, divType, crop) {
  const textTypes = {
    name: `${crop.constructor.name}`,
    stage: `Stage: ${crop.age.stage}`,
    days: `${crop.daysNeeded}`,
    water: `${crop.waterNeeded}`,
    sun: `${crop.sunNeeded}`,
  };

  divElement.innerText = textTypes[divType];
};

const checkHarvestStatus = function (button, crop) {
  if (crop.age.stage === "mature") {
    button.classList.remove("hidden");
  } else {
    button.classList.add("hidden");
  }
};

const updateCropDisplay = function (cropDiv, crop) {
  const stageSpan = cropDiv.querySelector(".growing-crop-stage");
  setCropText(stageSpan, "stage", crop);

  const harvestButton = cropDiv.querySelector(".harvest-button");
  checkHarvestStatus(harvestButton, crop);

  const daysSpan = cropDiv.querySelector(".growing-crop-days");
  setCropText(daysSpan, "days", crop);

  const waterSpan = cropDiv.querySelector(".growing-crop-water");
  setCropText(waterSpan, "water", crop);

  const sunSpan = cropDiv.querySelector(".growing-crop-sun");
  setCropText(sunSpan, "sun", crop);
};

const getCropsContainer = function () {
  return document.getElementById("current-crops");
};

const removeCropFromPage = function (crop) {
  const cropsContainer = getCropsContainer();
  cropsContainer.removeChild(crop);
};

const getCropDiv = function (crop) {
  return crop.closest(".growing-crop");
};

const scytheCrop = function () {
  const cropToRemove = getCropDiv(this);

  if (confirm("Really remove?")) {
    myCrops.removeCrop(cropToRemove);
    removeCropFromPage(cropToRemove);
  }
};

const harvestCrop = function () {
  const cropToHarvest = getCropDiv(this);

  if (confirm("Harvest crop?")) {
    let cropRegrows = myCrops.checkRegrow(cropToHarvest);

    if (cropRegrows) {
      updateCropDisplay(cropToHarvest, cropRegrows);
    } else {
      myCrops.removeCrop(cropToHarvest);
      removeCropFromPage(cropToHarvest);
    }
  }
};

const createNewCropButtons = function () {
  const cropButtons = createElementWithClass("div", "growing-crop-buttons");
  const cropHarvestButton = createElementWithClass("button", "harvest-button");
  const cropScytheButton = createElementWithClass("button", "scythe-button");

  cropHarvestButton.innerText = "Harvest";
  cropHarvestButton.classList.add("hidden");
  cropScytheButton.innerText = "Scythe";

  cropHarvestButton.addEventListener("click", harvestCrop);
  cropScytheButton.addEventListener("click", scytheCrop);

  cropButtons.appendChild(cropHarvestButton);
  cropButtons.appendChild(cropScytheButton);

  return cropButtons;
};

const createNewCropDiv = function (crop) {
  const newCropDiv = createElementWithClass("div", "growing-crop");
  newCropDiv.setAttribute("data-id", crop.id);

  const cropNameSpan = createElementWithClass("span", "growing-crop-name");
  setCropText(cropNameSpan, "name", crop);

  const cropStageSpan = createElementWithClass("span", "growing-crop-stage");
  const cropDaysSpan = createElementWithClass("span", "growing-crop-days");
  const cropWaterCount = createElementWithClass("span", "growing-crop-water");
  const cropSunCount = createElementWithClass("span", "growing-crop-sun");

  const cropButtons = createNewCropButtons();

  const childDivs = [
    cropNameSpan,
    cropStageSpan,
    cropDaysSpan,
    cropWaterCount,
    cropSunCount,
    cropButtons,
  ];

  childDivs.forEach((child) => newCropDiv.appendChild(child));

  updateCropDisplay(newCropDiv, crop);

  return newCropDiv;
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

const addNewCropSelections = (function () {
  const newCropSelector = document.getElementById("new-crop-dropdown");
  if (newCropSelector) {
    for (let crop in allCrops) {
      let option = document.createElement("option");
      option.value = crop;
      option.setAttribute("name", crop);
      option.innerText = crop;
      newCropSelector.appendChild(option);
    }
  }
})();

export { displayNewCrop, refreshCurrentCrops };
