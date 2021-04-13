# README

# Harvest Moon: Sunshine Islands Weather Calculator

This calculator is specifically designed for use with _Harvest Moon: Sunshine Islands_ or _Harvest Moon: Island of Happiness_ (both for the Nintendo DS). In these games, crops require a specific number of **days**, **water** points, and **sun** points in order to progress through their respective growth stages. This calculator allows you to keep track of your currently-growing crops and how many more points of **water**, **sun**, and **days** each needs to reach its next growth stage, as well as apply a day's weather points to all active crops by pressing a single button.

This project is a work-in-progress: see the [Future Features](#future-features) section below for items that will hopefully be added soon.

## Functionality

The buttons at the top of the calculator utilize the weather icons used in-game and correspond to the matching amount of **water**/**sun** points a given weather type will provide (available in [weathertypes.js](src/weathertypes.js)):

- Sunny: 3 **sun** & 0 **water**
- Clear: 2 **sun** & 0 **water**
- Cloudy: 1 **sun** & 0 **water**
- Drizzle: 0 **sun** & 1 **water**
- Rainy: 0 **sun** & 2 **water**
- Snowy: 0 **sun** & 3 **water**
- Hurricane: 0 **sun** & 3 **water**
- Blizzard: 0 **sun** & 3 **water**

There are three variations to a crop's display:

1. If the crop is still _growing_ and needs more **sun**, **water**, or **days**, the crop total for the outstanding value(s) will count down from the **minimum** amount needed. For example: if a turnip had 0 **sun** and was in the seed stage, meaning it still needed 3 **sun** to reach the next stage (sprout), its info would say "Sun Needed: 3." Clicking on the "Clear" day button would add +1 sun to its total, and change its display to "Sun Needed: 2."
2. If a crop has reached _maturity_ and can be harvested, its display will change to "Max" values: the max amount you can give it (assuming you don't harvest it in the meanwhile) before it will _wither_. Max values also count down as weather points are applied, displaying the remainder you can safely give to a crop.
3. If a crop is _withered_ -- reached by giving it too many **sun** or **water** points, or exceeding its **days** limit when _mature_ -- it is merely dead: there are no values to track any longer as the crop will remain _withered_ until it is removed. Currently the values are simply changed to "N/A" when a _withered_ state is reached.

The values required by each crop type and its stages are stored in [cropslist.js](src/cropslist.js) within each crop Class.

## Usage

To add a crop to your crop list, pick the crop type from the dropdown positioned below the calculator buttons and hit "Add." Currently, crops are listed in the order they are added, but a possible future feature will allow you to choose crops' "placement."

To add a new day and its' respective weather points to all current crops, click the button that corresponds to the type of weather you're experiencing in-game. At the moment there is no undo button if you accidentally hit a weather button, but I plan to add one in the future.

If you want to remove a crop from your list -- for example, one you added by mistake or one that is withered -- click the "Scythe" button.

If you want to harvest a crop from your list, click the "Harvest" button. If a crop does not regrow, this is essentially identical to using "Scythe" to remove a crop. However, if a crop regrows upon harvesting (like strawberries or cucumbers), then clicking "Harvest" will reset the crop to its regrowth stage and allow you to continue tracking its required points. At the moment the "Harvest" button is always available, but in the future it will only show up if a crop is at its _mature_ stage, which could serve as a helpful reminder of what crops you can harvest that day.

**Note: crop data is currently maintained in LocalStorage, so it will only persist on the same device & browser.**

## Future Features

Features I intend to add in the near future:

- [x] Hide "Harvest" button unless a crop is _mature_
- [x] Auto-populate dropdown form based on [cropslist.js](src/cropslist.js) list (generate with JS and remove hard-coded HTML)
- [x] Add "Water" button to crops so you can track additional water applied via watering can
- [x] Set up data storage for crop list persistence across sessions ~~/ devices~~
- [ ] Add crop images/icons next to name
- [ ] Add "Undo" button in case you accidentally hit a weather icon
- [x] Add all missing crop types (except trees and grains)
- [x] Separate crops by season
- [ ] Mobile-specific: an anchor button to jump to the next crop and/or an overlaid navigation menu
- [ ] General design improvements / optimizations

Nice-to-have features that are lower priority:

- [ ] Add a separate crop list for Greenhouse crops that is not affected by weather buttons and has sunstone buttons instead (crops in the Greenhouse are not impacted by outside weather and get their **sun** points from the sunstones you store inside; the only water they receive is from your watering can)
- [ ] Add stage icons next to crop stage that change based on growth level
- [ ] Add trees and grains
- [ ] Make crop separator / border change length based on how much water a crop has received for a given stage, acting as a progress bar (and add a "sun" border that provides the same view / changes based on sun points)
- [ ] Add animation when pressing buttons: water sprinkle or sunshine or snow flurries, etc.
- [ ] Allow "equipping" yellow wonderfuls to make the "Water" button add more water with each press (wonderfuls are in-game stones you can slot into equipment: the yellow version make your watering can more "powerful" and apply more water points with each watering can usage)
- [ ] Create a visual grid where you can "place" crops instead of simply adding them to a list in order, allowing you to match where they are planted in-game: e.g., a 6x6 grid and you can choose to put Turnips in row 6, column 1 and Potatoes in row 1, column 6, etc.

## Technologies

This Harvest Moon calculator is built with HTML, SCSS, and JavaScript. It uses webpack for module bundling and SCSS-to-CSS compiling and minifying. Weather and crop images, as well as values for crop growth stages, were taken from [Fogu.com](https://fogu.com/hm8/basics/weather.php) (the most useful Harvest Moon / Story of Seasons site on the web, in my huge-fan opinion). The font is "Chango" from [Google Fonts](https://fonts.google.com/specimen/Chango).

I intend to use this app primarily on my phone (while playing Sunshine Islands), so it's designed mobile-first with CSS Grid. The desktop version is slightly more spread out but not really optimized for larger screen viewing.
