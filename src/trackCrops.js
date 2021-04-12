import { allCrops } from "./cropslist.js";

const myCrops = (function () {
  let crops = [];

  const setLocalCrops = () => {
    localStorage.setItem("localMyCrops", JSON.stringify(crops));
  };

  const getCrops = () => crops;
  const addCrop = (crop) => crops.push(crop);

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
      return cropToCheck;
    }
  };

  const waterCrop = (crop) => {
    let cropToWater = findCropFromDOM(crop);
    cropToWater.increaseWater(1);
    setLocalCrops();
    return cropToWater;
  };

  const replaceWithLocalCrops = (cropsList) => {
    let newCropsList = [];
    let parsed = JSON.parse(cropsList);

    for (let crop of parsed) {
      let newVeg = new allCrops[crop.cropType](crop);
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
    replaceWithLocalCrops,
    setLocalCrops,
  };
})();

const addWeatherToCrops = function (weather) {
  myCrops.getCrops().forEach((crop) => crop.nextDay(weather));
  myCrops.setLocalCrops();
};

const createNewCrop = function (type) {
  const cropType = allCrops[type];
  const newCrop = new cropType();
  myCrops.addCrop(newCrop);
  myCrops.setLocalCrops();

  return newCrop;
};

export { addWeatherToCrops, createNewCrop, myCrops };
