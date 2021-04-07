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
    this._regrow = false;
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

  /* The following get methods are used for DOM displays */
  get age() {
    return this._ages[this._currentAge];
  }

  get id() {
    return this._id;
  }

  get regrowStatus() {
    return this._regrow;
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
  /* End of DOM display get methods */

  nextDay(weather) {
    this.increaseDays();
    this.increaseWater(weather.water);
    this.increaseSun(weather.sun);

    this.checkStatus();
  }

  resetTotals() {
    // When a crop reaches a new age, its counts start over
    this._totalDays = 0;
    this._totalWater = 0;
    this._totalSun = 0;
  }

  regrowCrop() {
    if (this._regrow) {
      let regrowStage = this._ages.find((age) => age.stage === this._regrow);
      let regrowIndex = this._ages.indexOf(regrowStage);
      this._currentAge = regrowIndex;
    }
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

export { Crop };
