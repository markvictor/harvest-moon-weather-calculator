import { allCrops } from "./cropslist.js";

const myCrops = (function () {
  let crops = [];

  const getCrops = () => crops;
  const addCrop = (crop) => crops.push(crop);

  return { getCrops, addCrop };
})();

const addWeatherToCrops = function (weather) {
  myCrops.getCrops().forEach((crop) => crop.nextDay(weather));
};

const createNewCrop = function (type) {
  const cropType = allCrops[type];
  const newCrop = new cropType();
  myCrops.addCrop(newCrop);

  return newCrop;
};

export { addWeatherToCrops, createNewCrop, myCrops };
