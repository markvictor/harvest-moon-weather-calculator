import { Crop } from "./crop.js";

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
    this._regrow = "sprout2";
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

class Strawberry extends Crop {
  constructor() {
    super();
    this._ages.unshift(
      {
        stage: "seed",
        days: 4,
        sun: { min: 4, max: 9 },
        water: { min: 4, max: 11 },
      },
      {
        stage: "sprout",
        days: 3,
        sun: { min: 3, max: 9 },
        water: { min: 3, max: 11 },
      },
      {
        stage: "sprout2",
        days: 2,
        sun: { min: 3, max: 5 },
        water: { min: 2, max: 7 },
      },
      {
        stage: "mature",
        days: 10,
        sun: { max: 9 },
        water: { max: 9 },
      }
    );
    this._regrow = "sprout2";
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

const allCrops = { Turnip, Potato, Cucumber, Cabbage, Strawberry };

export { Crop, allCrops };
