class Turnip {
  constructor() {
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
  }
}

class Cucumber {
  constructor() {
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

  getAge() {
    return this.ages[this.currentAge];
  }

  nextDay() {
    // when weather button is clicked,
    // decrease days left on currentAge
    // and check against water/sun needs for next level
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

export { Cucumber };
