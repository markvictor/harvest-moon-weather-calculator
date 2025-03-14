import { Tree } from "./crop.js";

class Peach extends Tree {
    constructor(veggieObject = {}) {
        super(veggieObject);
        this.cropType = "Peach";
        this.flowerSeason = "Spring";
        this.fruitSeason = "Summer";
        this._ages.unshift(
            {
                stage: "seed",
                days: 8,
                sun: { min: 12, max: 79 },
                water: { min: 4, max: 39 },
            },
            {
                stage: "sprout",
                days: 10,
                sun: { min: 24, max: 119 },
                water: { min: 20, max: 99 },
            },
            {
                stage: "sprout2",
                days: 39,
                sun: { min: 56, max: 119 },
                water: {min: 30, max: 119 },
            },
            {
                stage: "dormant",
                days: 999,
                sun: { max: 119 },
                water: { max: 119 },
            },
            {
                stage: "flowering",
                days: 3,
                sun: { min: 6, max: 59 },
                water: { min: 3, max: 19 },
            },
            {
                stage: "blooming",
                days: 999,
                sun: { max: 999 },
                water: { max: 999 },
            },{
                stage: "fruit",
                days: 1,
                sun: { min: 4, max: 29 },
                water: { min: 4, max: 15 },
            },
            {
                stage: "mature",
                days: 999,
                sun: { max: 999 },
                water: { max: 999 },
            }
        );
        this._regrow = "fruit";
    }
}

class Apple extends Tree {
    constructor(veggieObject = {}) {
        super(veggieObject);
        this.cropType = "Apple";
        this.flowerSeason = "Summer";
        this.fruitSeason = "Fall";
        this._ages.unshift(
            {
                stage: "seed",
                days: 9,
                sun: { min: 12, max: 79 },
                water: { min: 20, max: 99 },
            },
            {
                stage: "sprout",
                days: 12,
                sun: { min: 20, max: 79 },
                water: { min: 25, max: 119 },
            },
            {
                stage: "sprout2",
                days: 30,
                sun: { min: 50, max: 119 },
                water: {min: 60, max: 119 },
            },
            {
                stage: "dormant",
                days: 999,
                sun: { max: 119 },
                water: { max: 119 },
            },
            {
                stage: "flowering",
                days: 3,
                sun: { min: 7, max: 59 },
                water: { min: 10, max: 59 },
            },
            {
                stage: "blooming",
                days: 999,
                sun: { max: 999 },
                water: { max: 999 },
            },{
                stage: "fruit",
                days: 2,
                sun: { min: 4, max: 19 },
                water: { min: 5, max: 29 },
            },
            {
                stage: "mature",
                days: 999,
                sun: { max: 999 },
                water: { max: 999 },
            }
        );
        this._regrow = "fruit";
    }
}

class Banana extends Tree {
    constructor(veggieObject = {}) {
        super(veggieObject);
        this.cropType = "Banana";
        this.flowerSeason = "Spring";
        this.fruitSeason = "Summer";
        this._ages.unshift(
            {
                stage: "seed",
                days: 9,
                sun: { min: 12, max: 79 },
                water: { min: 4, max: 19 },
            },
            {
                stage: "sprout",
                days: 6,
                sun: { min: 20, max: 119 },
                water: { min: 3, max: 19 },
            },
            {
                stage: "sprout2",
                days: 24,
                sun: { min: 60, max: 119 },
                water: {min: 12, max: 59 },
            },
            {
                stage: "dormant",
                days: 999,
                sun: { max: 119 },
                water: { max: 59 },
            },
            {
                stage: "flowering",
                days: 3,
                sun: { min: 7, max: 59 },
                water: { min: 3, max: 19 },
            },
            {
                stage: "blooming",
                days: 999,
                sun: { max: 999 },
                water: { max: 999 },
            },{
                stage: "fruit",
                days: 3,
                sun: { min: 4, max: 29 },
                water: { min: 2, max: 15 },
            },
            {
                stage: "mature",
                days: 999,
                sun: { max: 999 },
                water: { max: 999 },
            }
        );
        this._regrow = "fruit";
    }
}

class Orange extends Tree {
    constructor(veggieObject = {}) {
        super(veggieObject);
        this.cropType = "Orange";
        this.flowerSeason = "Spring";
        this.fruitSeason = "Summer";
        this._ages.unshift(
            {
                stage: "seed",
                days: 3,
                sun: { min: 7, max: 49 },
                water: { min: 6, max: 39 },
            },
            {
                stage: "sprout",
                days: 21,
                sun: { min: 28, max: 119 },
                water: { min: 30, max: 99 },
            },
            {
                stage: "sprout2",
                days: 18,
                sun: { min: 25, max: 109 },
                water: {min: 30, max: 59 },
            },
            {
                stage: "dormant",
                days: 999,
                sun: { max: 119 },
                water: { max: 119 },
            },
            {
                stage: "flowering",
                days: 3,
                sun: { min: 6, max: 39 },
                water: { min: 6, max: 23 },
            },
            {
                stage: "blooming",
                days: 999,
                sun: { max: 999 },
                water: { max: 999 },
            },{
                stage: "fruit",
                days: 3,
                sun: { min: 4, max: 19 },
                water: { min: 6, max: 23 },
            },
            {
                stage: "mature",
                days: 999,
                sun: { max: 999 },
                water: { max: 999 },
            }
        );
        this._regrow = "fruit";
    }
}

class Grape extends Tree {
    constructor(veggieObject = {}) {
        super(veggieObject);
        this.cropType = "Grape";
        this.flowerSeason = "Summer";
        this.fruitSeason = "Fall";
        this._ages.unshift(
            {
                stage: "seed",
                days: 3,
                sun: { min: 10, max: 79 },
                water: { min: 10, max: 50 },
            },
            {
                stage: "sprout",
                days: 21,
                sun: { min: 60, max: 119 },
                water: { min: 65, max: 99 },
            },
            {
                stage: "sprout2",
                days: 33,
                sun: { min: 80, max: 119 },
                water: {min: 80, max: 119 },
            },
            {
                stage: "dormant",
                days: 999,
                sun: { max: 119 },
                water: { max: 119 },
            },
            {
                stage: "flowering",
                days: 3,
                sun: { min: 15, max: 79 },
                water: { min: 15, max: 79 },
            },
            {
                stage: "blooming",
                days: 999,
                sun: { max: 999 },
                water: { max: 999 },
            },{
                stage: "fruit",
                days: 3,
                sun: { min: 10, max: 39 },
                water: { min: 10, max: 49 },
            },
            {
                stage: "mature",
                days: 999,
                sun: { max: 999 },
                water: { max: 999 },
            }
        );
        this._regrow = "fruit";
    }
}

const allTrees = {
    Peach,
    Grape,
    Banana,
    Orange,
    Apple,
};

const floweringTrees = {
    Spring: ["Peach", "Orange", "Banana"],
    Summer: ["Apple", "Grape"],
};

const fruitingTrees = {
    Spring: [],
    Summer: ["Peach", "Orange", "Banana"],
    Fall: ["Apple", "Grape"],
};

const allTreeOptions = ["Peach", "Orange", "Banana", "Apple", "Grape"];

export { allTrees, allTreeOptions, floweringTrees, fruitingTrees };
