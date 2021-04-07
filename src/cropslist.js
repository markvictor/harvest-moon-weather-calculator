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

class Tomato extends Crop {
  constructor() {
    super();
    this._ages.unshift(
      {
        stage: "seed",
        days: 3,
        sun: { min: 7, max: 24 },
        water: { min: 3, max: 11 },
      },
      {
        stage: "sprout",
        days: 3,
        sun: { min: 7, max: 24 },
        water: { min: 2, max: 9 },
      },
      {
        stage: "sprout2",
        days: 3,
        sun: { min: 7, max: 19 },
        water: { min: 2, max: 9 },
      },
      {
        stage: "sprout3",
        days: 3,
        sun: { min: 9, max: 24 },
        water: { min: 2, max: 11 },
      },
      {
        stage: "mature",
        days: 10,
        sun: { max: 19 },
        water: { max: 7 },
      }
    );
    this._regrow = "sprout3";
  }
}

class Corn extends Crop {
  constructor() {
    super();
    this._ages.unshift(
      {
        stage: "seed",
        days: 3,
        sun: { min: 5, max: 9 },
        water: { min: 3, max: 11 },
      },
      {
        stage: "sprout",
        days: 4,
        sun: { min: 8, max: 19 },
        water: { min: 4, max: 19 },
      },
      {
        stage: "sprout2",
        days: 4,
        sun: { min: 8, max: 24 },
        water: { min: 4, max: 19 },
      },
      {
        stage: "sprout3",
        days: 3,
        sun: { min: 8, max: 24 },
        water: { min: 3, max: 15 },
      },
      {
        stage: "mature",
        days: 10,
        sun: { max: 19 },
        water: { max: 19 },
      }
    );
    this._regrow = "sprout3";
  }
}

class Onion extends Crop {
  constructor() {
    super();
    this._ages.unshift(
      {
        stage: "seed",
        days: 3,
        sun: { min: 3, max: 14 },
        water: { min: 3, max: 9 },
      },
      {
        stage: "sprout",
        days: 4,
        sun: { min: 4, max: 29 },
        water: { min: 4, max: 13 },
      },
      {
        stage: "mature",
        days: 10,
        sun: { max: 14 },
        water: { max: 9 },
      }
    );
  }
}

class Pumpkin extends Crop {
  constructor() {
    super();
    this._ages.unshift(
      {
        stage: "seed",
        days: 4,
        sun: { min: 12, max: 29 },
        water: { min: 4, max: 11 },
      },
      {
        stage: "sprout",
        days: 5,
        sun: { min: 13, max: 39 },
        water: { min: 5, max: 13 },
      },
      {
        stage: "sprout2",
        days: 5,
        sun: { min: 16, max: 39 },
        water: { min: 5, max: 15 },
      },
      {
        stage: "mature",
        days: 10,
        sun: { max: 19 },
        water: { max: 5 },
      }
    );
  }
}

class Pineapple extends Crop {
  constructor() {
    super();
    this._ages.unshift(
      {
        stage: "seed",
        days: 5,
        sun: { min: 12, max: 34 },
        water: { min: 5, max: 15 },
      },
      {
        stage: "sprout",
        days: 5,
        sun: { min: 12, max: 29 },
        water: { min: 6, max: 19 },
      },
      {
        stage: "sprout2",
        days: 5,
        sun: { min: 10, max: 34 },
        water: { min: 6, max: 15 },
      },
      {
        stage: "mature",
        days: 10,
        sun: { max: 19 },
        water: { max: 11 },
      }
    );
    this._regrow = "sprout2";
  }
}

const allCrops = {
  Turnip,
  Potato,
  Cucumber,
  Cabbage,
  Strawberry,
  Tomato,
  Corn,
  Onion,
  Pumpkin,
  Pineapple,
};

export { Crop, allCrops };
