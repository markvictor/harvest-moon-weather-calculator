import { myCrops } from "./trackCrops.js";
import { allCrops, seasonalCrops } from "./cropslist.js";

const createElementWithClass = function (type, className) {
  const newElement = document.createElement(type);
  newElement.classList.add(className);

  return newElement;
};

const addSpaces = function (phrase) {
  let letters = phrase.split("");
  let uppercase = letters.slice(1).find((letter) => letter.match(/[A-Z]/));

  if (uppercase) {
    let upperCaseIndex = letters.slice(1).indexOf(uppercase);
    letters.splice(upperCaseIndex + 1, 0, " ");
    return letters.join("");
  } else {
    return phrase;
  }
};

const setCropText = function (divElement, divType, crop) {
  const textTypes = {
    name: `${addSpaces(crop.constructor.name)}`,
    stage: `Stage: ${crop.age.stage}`,
    days: `${crop.daysNeeded}`,
    water: `${crop.waterNeeded}`,
    sun: `${crop.sunNeeded}`,
  };

  divElement.innerText = textTypes[divType];
};

const setOverlayVals = function (divElement, divType, crop) {
  const textTypes = {
    stage: `${crop._currentAge}`,
    days: `${crop._totalDays}`,
    water: `${crop._totalWater}`,
    sun: `${crop._totalSun}`,
  };

  divElement.value = Number(textTypes[divType]);
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

  const overlayAge = cropDiv.querySelector(".overlay-crop-age-input");
  setOverlayVals(overlayAge, "stage", crop);

  const overlayDays = cropDiv.querySelector(".overlay-crop-days-input");
  setOverlayVals(overlayDays, "days", crop);
  const overlayWater = cropDiv.querySelector(".overlay-crop-water-input");
  setOverlayVals(overlayWater, "water", crop);
  const overlaySun = cropDiv.querySelector(".overlay-crop-sun-input");
  setOverlayVals(overlaySun, "sun", crop);
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

const waterCrop = function () {
  const cropToWater = getCropDiv(this);

  let wateredCrop = myCrops.waterCrop(cropToWater);
  updateCropDisplay(cropToWater, wateredCrop);
};

const editCrop = function () {
  const cropDiv = getCropDiv(this);
  const overlay = cropDiv.querySelector(".growing-overlay-crop");
  overlay.classList.remove("hidden");
};

const saveCrop = function () {
  const cropToEdit = getCropDiv(this);

  const overlayAge = cropToEdit.querySelector(".overlay-crop-age-input");
  const overlayDays = cropToEdit.querySelector(".overlay-crop-days-input");
  const overlayWater = cropToEdit.querySelector(".overlay-crop-water-input");
  const overlaySun = cropToEdit.querySelector(".overlay-crop-sun-input");
  const values = [overlayDays.value, overlayWater.value, overlaySun.value, overlayAge.value]

  let editedCrop = myCrops.editCrop(cropToEdit, values);
  updateCropDisplay(cropToEdit, editedCrop);
  const overlay = cropToEdit.querySelector(".growing-overlay-crop");
  overlay.classList.add("hidden");
};

const cancelCrop = function () {
  const cropDiv = getCropDiv(this);
  const overlay = cropDiv.querySelector(".growing-overlay-crop");
  overlay.classList.add("hidden");
};

const createNewCropButtons = function () {
  const cropButtons = createElementWithClass("div", "growing-crop-buttons");
  const cropHarvestButton = createElementWithClass("button", "harvest-button");
  const cropScytheButton = createElementWithClass("button", "scythe-button");
  const cropWaterButton = createElementWithClass("button", "water-button");
  const editButton = createElementWithClass("button", "edit-button");

  cropHarvestButton.innerText = "Harvest";
  cropHarvestButton.classList.add("hidden");
  cropScytheButton.innerText = "Scythe";
  cropWaterButton.innerText = "Water";
  editButton.innerText = "...";

  cropHarvestButton.addEventListener("click", harvestCrop);
  cropScytheButton.addEventListener("click", scytheCrop);
  cropWaterButton.addEventListener("click", waterCrop);
  editButton.addEventListener("click", editCrop);

  cropButtons.appendChild(cropHarvestButton);
  cropButtons.appendChild(cropScytheButton);
  cropButtons.appendChild(cropWaterButton);
  cropButtons.appendChild(editButton);

  return cropButtons;
};

const createNewOverlayButtons = function () {
  const overlayButtons = createElementWithClass("section", "crop-overlay-buttons");
  const saveButton = createElementWithClass("button", "save-button");
  const cancelButton = createElementWithClass("button", "cancel-button");

  saveButton.innerText = "Save";
  cancelButton.innerText = "Cancel";

  saveButton.addEventListener("click", saveCrop);
  cancelButton.addEventListener("click", cancelCrop);

  overlayButtons.appendChild(saveButton);
  overlayButtons.appendChild(cancelButton);

  return overlayButtons;
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

  const newOverlayDiv = createNewCropDivOverlay(crop);
  newOverlayDiv.classList.add("hidden");

  const childDivs = [
    newOverlayDiv,
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

const createNewCropDivOverlay = function (crop) {
  const newOverlayDiv = createElementWithClass("div", "growing-overlay-crop");
  newOverlayDiv.setAttribute("data-id", crop.id+'-overlay');

  const overlaySpan = createElementWithClass("span", "overlay-crop-name");
  overlaySpan.innerText = "Edit " + crop.constructor.name;


  const overlayAgeSpan = createElementWithClass("div", "overlay-crop-age-span");
  const overlayAgeLabel = createElementWithClass("label", "overlay-crop-age-label");
  overlayAgeLabel.innerText = "Stage";
  const overlayAgeInput = createElementWithClass("select", "overlay-crop-age-input");
  crop.stages.forEach((stage, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = stage;
    overlayAgeInput.appendChild(opt);
  });

  overlayAgeSpan.appendChild(overlayAgeLabel);
  overlayAgeSpan.appendChild(overlayAgeInput);

  const overlayDaysSpan = createElementWithClass("div", "overlay-crop-days-span");
  const overlayDaysLabel = createElementWithClass("label", "overlay-crop-days-label");
  overlayDaysLabel.innerText = "Total Days";
  const overlayDaysInput = createElementWithClass("input", "overlay-crop-days-input");
  overlayDaysInput.setAttribute("type", "number");
  overlayDaysSpan.appendChild(overlayDaysLabel);
  overlayDaysSpan.appendChild(overlayDaysInput);

  const overlayWaterSpan = createElementWithClass("div", "overlay-crop-water-span");
  const overlayWaterLabel = createElementWithClass("label", "overlay-crop-water-label");
  overlayWaterLabel.innerText = "Total Water";
  const overlayWaterCount = createElementWithClass("input", "overlay-crop-water-input");
  overlayWaterCount.setAttribute("type", "number");
  overlayWaterSpan.appendChild(overlayWaterLabel);
  overlayWaterSpan.appendChild(overlayWaterCount);

  const overlaySunSpan = createElementWithClass("div", "overlay-crop-sun-span");
  const overlaySunLabel = createElementWithClass("label", "overlay-crop-sun-label");
  overlaySunLabel.innerText = "Total Sun";
  const overlaySunCount = createElementWithClass("input", "overlay-crop-sun-input");
  overlaySunCount.setAttribute("type", "number");
  overlaySunSpan.appendChild(overlaySunLabel);
  overlaySunSpan.appendChild(overlaySunCount); 

  const overlayButtons = createNewOverlayButtons();

  const childDivs = [
    overlaySpan,
    overlayAgeSpan,
    overlayDaysSpan,
    overlayWaterSpan,
    overlaySunSpan,
    overlayButtons,
  ];

  childDivs.forEach((child) => newOverlayDiv.appendChild(child));

  return newOverlayDiv;
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

const getAddCropDropdown = function () {
  return document.getElementById("new-crop-dropdown");
};

const addNewCropSelections = function (season) {
  const newCropSelector = getAddCropDropdown();
  if (newCropSelector) {
    let cropsToDisplay = seasonalCrops[season];
    for (let crop of cropsToDisplay) {
      let option = document.createElement("option");
      option.value = crop;
      option.setAttribute("name", crop);

      option.innerText = addSpaces(crop);
      newCropSelector.appendChild(option);
    }
  }
};

const updateDropdownOptions = function () {
  const newCropSelector = getAddCropDropdown();
  if (newCropSelector) {
    while (newCropSelector.lastChild) {
      newCropSelector.removeChild(newCropSelector.lastChild);
    }
  }

  addNewCropSelections(this.value);
};

const jumpToNextCrop = function () {
  const cropsContainer = document.getElementById("current-crops");
  const cropList = [...cropsContainer.querySelectorAll(".growing-crop")];

  const topOfCropsContainer = cropsContainer.offsetTop;
  let currentScroll = window.pageYOffset;

  let newScrollDestination;

  if (cropList.length === 0) {
    newScrollDestination = cropsContainer.offsetTop;
  } else if (currentScroll < topOfCropsContainer) {
    newScrollDestination = cropList[0].offsetTop;
  } else {
    let cropToScrollTo = cropList.find(
      (crop) => crop.offsetTop > currentScroll
    );
    newScrollDestination = cropToScrollTo.offsetTop;
  }

  window.scrollTo(0, newScrollDestination);
};

const returnToTop = function () {
  const topOfCalculator = document.getElementById("calculator-body").offsetTop;
  window.scrollTo(0, topOfCalculator);
};

export {
  displayNewCrop,
  refreshCurrentCrops,
  addNewCropSelections,
  updateDropdownOptions,
  jumpToNextCrop,
  returnToTop,
};
