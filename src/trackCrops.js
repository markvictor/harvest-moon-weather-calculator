import { allCrops } from "./cropslist.js";

const myCrops = (function () {
  let crops = [];

  const getCrops = () => crops;
  const addCrop = (crop) => crops.push(crop);
  const removeCrop = (crop) => {
    let cropToRemove = crops.find(
      (c) => c.id === Number(crop.getAttribute("data-id"))
    );
    let removeAtIndex = crops.indexOf(cropToRemove);
    crops.splice(removeAtIndex, 1);
  };

  return { getCrops, addCrop, removeCrop };
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
