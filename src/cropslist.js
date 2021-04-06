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

  get waterNeeded() {
    if (!this.age.water) {
      return "Water N/A";
    }

    const water = this.age.water.min - this._totalWater;
    if (water >= 0) {
      return `Water Needed: ${water}`;
    } else {
      return `Max Water: ${this.age.water.max - this._totalWater}`;
    }
  }

  get sunNeeded() {
    if (!this.age.sun) {
      return "Sun N/A";
    }

    const sun = this.age.sun.min - this._totalSun;
    if (sun >= 0) {
      return `Sun Needed: ${sun}`;
    } else {
      return `Max Sun: ${this.age.sun.max - this._totalSun}`;
    }
  }

  get daysNeeded() {
    if (!this.age.days) {
      return "Days N/A";
    }

    const days = this.age.days - this._totalDays;
    if (days >= 0) {
      return `Days Left: ${days}`;
    } else {
      return `Days Left: 0`;
    }
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

    // Don't do anything if crop is withered
    if (age.stage === "withered") {
      return;
    }

    // If crop has exceeded either maximum, wither it
    if (this._totalWater > age.water.max || this._totalSun > age.sun.max) {
      this.witherCrop();
      return;
    }

    // If crop has met its # of days requirement...
    if (this._totalDays >= age.days) {
      // If it's already a mature crop, wither it
      if (age.stage === "mature") {
        this.witherCrop();
        return;
      }
      // If it's not a mature crop, and it's met its other minimums, age it
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
      },
      {
        stage: "mature",
        days: 10,
        sun: { max: 39 },
        water: { max: 19 },
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
      },
      {
        stage: "mature",
        days: 10,
        sun: { max: 19 },
        water: { max: 9 },
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
      },
      {
        stage: "mature",
        days: 10,
        sun: { max: 19 },
        water: { max: 7 },
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
      },
      {
        stage: "mature",
        days: 10,
        sun: { max: 9 },
        water: { max: 9 },
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
