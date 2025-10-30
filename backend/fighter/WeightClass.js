export default class WeightClass {
  static FLYWEIGHT = new WeightClass("Flyweight", 52.6, 56.7);
  static BANTAMWEIGHT = new WeightClass("Bantamweight", 57.2, 61.2);
  static FEATHERWEIGHT = new WeightClass("Featherweight", 61.7, 65.8);
  static LIGHTWEIGHT = new WeightClass("Lightweight", 66.2, 70.3);
  static WELTERWEIGHT = new WeightClass("Welterweight", 70.8, 77.1);
  static MIDDLEWEIGHT = new WeightClass("Middleweight", 77.6, 83.9);
  static LIGHT_HEAVYWEIGHT = new WeightClass("Light Heavyweight", 84.4, 93.0);
  static HEAVYWEIGHT = new WeightClass("Heavyweight", 93.4, 120.2);
  // MAYBE WE SHOULD HAVE THE HEAVYWEIGHT LIMIT TO HAVE NO LIMIT, COULD BE FUN.

  static getWeightClass(weight) {
    const weightClasses = [
      WeightClass.FLYWEIGHT,
      WeightClass.BANTAMWEIGHT,
      WeightClass.FEATHERWEIGHT,
      WeightClass.LIGHTWEIGHT,
      WeightClass.WELTERWEIGHT,
      WeightClass.MIDDLEWEIGHT,
      WeightClass.LIGHT_HEAVYWEIGHT,
      WeightClass.HEAVYWEIGHT,
    ];

    for (const weightClass of weightClasses) {
      if (
        weight >= weightClass.minWeightKG &&
        weight <= weightClass.maxWeightKG
      ) {
        return weightClass.className.toUpperCase().replace(/\s+/g, "_");
      }
    }

    return "DUDE, LOSE MORE WEIGHT OR GAIN MORE, IDK!";
  }

  constructor(className, minWeightKG, maxWeightKG) {
    this.className = className;
    this.minWeightKG = minWeightKG;
    this.maxWeightKG = maxWeightKG;
  }

  getClassName() {
    return this.className;
  }

  getMinWeightKG() {
    return this.minWeightKG;
  }

  getMaxWeightKG() {
    return this.maxWeightKG;
  }
}
