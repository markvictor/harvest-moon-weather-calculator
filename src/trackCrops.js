import { allCrops } from "./cropslist.js";

const myCrops = (function () {
  let crops = [];

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

  return { getCrops, addCrop, removeCrop, checkRegrow };
})();

const addWeatherToCrops = function (weather) {
  myCrops.getCrops().forEach((crop) => crop.nextDay(weather));
};

const createNewCrop = function (type) {
  const cropType = allCrops[type];
  const newCrop = new cropType();
  myCrops.addCrop(newCrop);
  console.log(myCrops.getCrops());
  return newCrop;
};

export { addWeatherToCrops, createNewCrop, myCrops };
