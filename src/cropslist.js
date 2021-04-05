class Crop {
  constructor() {
    this._totalDays = 0;
    this._totalWater = 0;
    this._totalSun = 0;
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

  getAge() {
    return this.ages[this.currentAge];
  }

  nextDay(weather) {
    this.increaseDays();
    this.increaseWater(weather.water);
    this.increaseSun(weather.sun);

    this.checkStatus();
  }

  matureCrop() {
    console.log("The crop has matured");
  }

  witherCrop() {
    console.log("The crop has withered");
  }

  checkStatus() {
    let age = this.getAge();

    if (this._totalWater > age.water.max || this._totalSun > age.sun.max) {
      this.witherCrop();
      return;
    }

    if (this._totalDays >= age.days) {
      if (this._totalWater >= age.water.min && this._totalSun >= age.sun.min) {
        this.matureCrop();
      }
    }
  }
}

class Turnip extends Crop {
  constructor() {
    super();
    this.seed = {
      days: 2,
      sun: { min: 3, max: 19 },
      water: { min: 2, max: 19 },
    };
    this.sprout = {
      days: 2,
      sun: { min: 3, max: 19 },
      water: { min: 2, max: 19 },
    };
    this.ages = [this.seed, this.sprout];
    this.currentAge = 0;
  }
}

class Cucumber extends Crop {
  constructor() {
    super();
    this.seed = {
      days: 4,
      sun: { min: 7, max: 29 },
      water: { min: 3, max: 11 },
    };
    this.sprout = {
      days: 3,
      sun: { min: 5, max: 23 },
      water: { min: 2, max: 7 },
    };
    this.sprout2 = {
      days: 2,
      sun: { min: 4, max: 17 },
      water: { min: 2, max: 9 },
    };
    this.ages = [this.seed, this.sprout, this.sprout2];
    this.currentAge = 0;
  }
}

const crops = {
  turnip: {
    seed: {
      days: 2,
      sun: { min: 3, max: 19 },
      water: { min: 2, max: 19 },
    },
    sprout: {
      days: 2,
      sun: { min: 3, max: 19 },
      water: { min: 2, max: 19 },
    },
  },
  potato: {
    seed: {
      days: 3,
      sun: { min: 4, max: 19 },
      water: { min: 3, max: 19 },
    },
    sprout: {
      days: 4,
      sun: { min: 6, max: 27 },
      water: { min: 4, max: 27 },
    },
  },
  cucumber: {
    seed: {
      days: 4,
      sun: { min: 7, max: 29 },
      water: { min: 3, max: 11 },
    },
    sprout: {
      days: 3,
      sun: { min: 5, max: 23 },
      water: { min: 2, max: 7 },
    },
    sprout2: {
      days: 2,
      sun: { min: 4, max: 17 },
      water: { min: 2, max: 9 },
    },
  },
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
  cabbage: {
    seed: {
      days: 4,
      sun: { min: 9, max: 24 },
      water: { min: 3, max: 11 },
    },
    sprout: {
      days: 5,
      sun: { min: 12, max: 29 },
      water: { min: 4, max: 11 },
    },
    sprout2: {
      days: 5,
      sun: { min: 12, max: 26 },
      water: { min: 5, max: 15 },
    },
  },
};

export { Crop, Turnip, Cucumber };
