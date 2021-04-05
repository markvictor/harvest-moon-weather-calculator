const cropId = (function () {
  let id = 0;

  const getNewId = () => {
    id++;
    return id;
  };

  return { getNewId };
})();

class Crop {
  constructor() {
    this._totalDays = 0;
    this._totalWater = 0;
    this._totalSun = 0;
    this._ages = [
      {
        stage: "mature",
      },
      {
        stage: "withered",
      },
    ];
    this._currentAge = 0;
    this._id = cropId.getNewId();
  }

  increaseDays() {
    this._totalDays++;
  }

  increaseWater(water) {
    this._totalWater += water;
  }

  increaseSun(sun) {
    this._totalSun += sun;
  }

  get age() {
    return this._ages[this._currentAge];
  }

  get id() {
    return this._id;
  }

  get water() {
    return this._totalWater;
  }

  get sun() {
    return this._totalSun;
  }

  nextDay(weather) {
    this.increaseDays();
    this.increaseWater(weather.water);
    this.increaseSun(weather.sun);

    this.checkStatus();
  }

  resetTotals() {
    this._totalDays = 0;
    this._totalWater = 0;
    this._totalSun = 0;
  }

  ageCrop() {
    this._currentAge++;
    this.resetTotals();
  }

  witherCrop() {
    // While we could do "this.currentAge = this.ages.length - 1",
    // as we are putting withered stage last in all crops
    // this will allow us to change the order of ages if we want to in the future
    let witheredStage = this._ages.find((age) => age.stage === "withered");
    this._currentAge = this._ages.indexOf(witheredStage);
  }

  checkStatus() {
    let age = this.age;

    if (age.stage === "mature" || age.stage === "withered") {
      console.log("Crop is max age");
      return;
    }

    if (this._totalWater > age.water.max || this._totalSun > age.sun.max) {
      this.witherCrop();
      return;
    }

    if (this._totalDays >= age.days) {
      if (this._totalWater >= age.water.min && this._totalSun >= age.sun.min) {
        this.ageCrop();
      }
    }
  }
}

class Turnip extends Crop {
  constructor() {
    super();
    this._ages.unshift(
      {
        stage: "seed",
        days: 2,
        sun: { min: 3, max: 19 },
        water: { min: 2, max: 19 },
      },
      {
        stage: "sprout",
        days: 2,
        sun: { min: 3, max: 19 },
        water: { min: 2, max: 19 },
      }
    );
  }
}

class Potato extends Crop {
  constructor() {
    super();
    this._ages.unshift(
      {
        stage: "seed",
        days: 3,
        sun: { min: 4, max: 19 },
        water: { min: 3, max: 19 },
      },
      {
        stage: "sprout",
        days: 4,
        sun: { min: 6, max: 27 },
        water: { min: 4, max: 27 },
      }
    );
  }
}

class Cucumber extends Crop {
  constructor() {
    super();
    this._ages.unshift(
      {
        stage: "seed",
        days: 4,
        sun: { min: 7, max: 29 },
        water: { min: 3, max: 11 },
      },
      {
        stage: "sprout",
        days: 3,
        sun: { min: 5, max: 23 },
        water: { min: 2, max: 7 },
      },
      {
        stage: "sprout2",
        days: 2,
        sun: { min: 4, max: 17 },
        water: { min: 2, max: 9 },
      }
    );
  }
}

class Cabbage extends Crop {
  constructor() {
    super();
    this._ages.unshift(
      {
        stage: "seed",
        days: 4,
        sun: { min: 9, max: 24 },
        water: { min: 3, max: 11 },
      },
      {
        stage: "sprout",
        days: 5,
        sun: { min: 12, max: 29 },
        water: { min: 4, max: 11 },
      },
      {
        stage: "sprout2",
        days: 5,
        sun: { min: 12, max: 26 },
        water: { min: 5, max: 15 },
      }
    );
  }
}

const crops = {
  strawberry: {
    seed: {
      days: 4,
      sun: { min: 4, max: 9 },
      water: { min: 4, max: 11 },
    },
    sprout: {
      days: 3,
      sun: { min: 3, max: 9 },
      water: { min: 3, max: 11 },
    },
    sprout2: {
      days: 2,
      sun: { min: 3, max: 5 },
      water: { min: 2, max: 7 },
    },
  },
};

const allCrops = { Turnip, Potato, Cucumber, Cabbage };

export { Crop, allCrops };
