import { allCrops } from "./cropslist.js";
import { allTrees } from "./treelist.js";

const trackWeatherButtonPressed = (function () {
  let lastWeather = [];

  const setLocalLastWeather = () => {
    localStorage.setItem(
      "localLastWeatherPressed",
      JSON.stringify(lastWeather[0])
    );
  };

  const getLocalLastWeather = (storedWeather) => {
    let localWeather = JSON.parse(storedWeather);
    lastWeather[0] = localWeather;
  };

  const weatherButton = (weather) => {
    lastWeather[0] = weather;
    setLocalLastWeather();
  };

  const getLastWeather = () => lastWeather[0];

  const removeLastWeather = () => lastWeather.pop();

  return {
    weatherButton,
    getLastWeather,
    getLocalLastWeather,
    removeLastWeather,
  };
})();

const trackSeasonChange = (function () {
  let season = [];

  const setLocalSeason = () => {
    localStorage.setItem(
        "localSeason",
        JSON.stringify(season[0])
    );
  };

  const getLocalSeason = (storedSeason) => {
    let localSeason = JSON.parse(storedSeason);
    season[0] = localSeason;
  };

  const seasonButton = (seasonSelected) => {
    season[0] = seasonSelected;
    setLocalSeason();
  };

  const getSeason = () => season[0];

  const removeSeason = () => season.pop();

  return {
    seasonButton,
    getSeason,
    getLocalSeason,
    removeSeason,
  };
})();

const myCrops = (function () {
  let crops = [];

  const setLocalCrops = () => {
    localStorage.setItem("localMyCrops", JSON.stringify(crops));
  };

  const getCrops = () => crops;

  const addCrop = (crop) => {
    const todaysWeather = trackWeatherButtonPressed.getLastWeather();
    let applyWeatherCheck = document.getElementById("apply-days-weather").checked;
    if(crop._plantType === 'tree') {
      applyWeatherCheck = document.getElementById("apply-days-weather-trees").checked;
    }

    if (applyWeatherCheck && todaysWeather) {
      crop.increaseWater(todaysWeather.water);
      crop.increaseSun(todaysWeather.sun);
    }

    crops.push(crop);
  };

  const findCropFromDOM = (crop) => {
    const arrayCrop = crops.find(
      (veg) => veg.id === Number(crop.getAttribute("data-id"))
    );
    return arrayCrop;
  };

  const removeCrop = (crop) => {
    let cropToRemove = findCropFromDOM(crop);
    let removeAtIndex = crops.indexOf(cropToRemove);
    crops.splice(removeAtIndex, 1);
    setLocalCrops();
  };

  const checkRegrow = (crop) => {
    let cropToCheck = findCropFromDOM(crop);
    if (!cropToCheck.regrowStatus) {
      return false;
    } else {
      cropToCheck.regrowCrop();
      setLocalCrops();
      return cropToCheck;
    }
  };

  const waterCrop = (crop) => {
    let cropToWater = findCropFromDOM(crop);
    cropToWater.increaseWater(1);
    setLocalCrops();
    return cropToWater;
  };

  const editCrop = (crop, values) => {
    let cropToEdit = findCropFromDOM(crop);
    cropToEdit.days = Number(values[0]);
    cropToEdit.water = Number(values[1]);
    cropToEdit.sun = Number(values[2]);
    cropToEdit.age = Number(values[3]);
    setLocalCrops();
    return cropToEdit;
  };

  const undoLastWeather = () => {
    const weatherToUndo = trackWeatherButtonPressed.removeLastWeather();

    if (weatherToUndo) {
      crops.forEach((crop) => crop.removeLastDay());
    }
    setLocalCrops();
  };

  const replaceWithLocalCrops = (cropsList) => {
    let newCropsList = [];
    let parsed = JSON.parse(cropsList);
    let allPlants = {...allCrops, ...allTrees};

    for (let crop of parsed) {
      let newVeg = new allPlants[crop.cropType](crop);
      newCropsList.push(newVeg);
    }

    crops = newCropsList;
  };

  return {
    getCrops,
    addCrop,
    removeCrop,
    checkRegrow,
    waterCrop,
    editCrop,
    undoLastWeather,
    replaceWithLocalCrops,
    setLocalCrops,
  };
})();

const addWeatherToCrops = function (weather) {
  myCrops.getCrops().forEach((crop) => crop.nextDay(weather));
  myCrops.setLocalCrops();
};

const createNewCrop = function (type) {
  const cropSpecies = allCrops[type];
  const newCrop = new cropSpecies();
  myCrops.addCrop(newCrop);
  myCrops.setLocalCrops();

  return newCrop;
};

const createNewTree = function (type) {
  const treeSpecies = allTrees[type];
  const newTree = new treeSpecies();
  myCrops.addCrop(newTree);
  myCrops.setLocalCrops();

  return newTree;
};

export { addWeatherToCrops, trackWeatherButtonPressed, trackSeasonChange, createNewCrop, createNewTree, myCrops };
