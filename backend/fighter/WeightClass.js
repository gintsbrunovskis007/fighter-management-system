export default class WeightClass {
  static FLYWEIGHT = new WeightClass("Flyweight", 52.6, 56.7);
  static BANTAMWEIGHT = new WeightClass("Bantamweight", 57.2, 61.2);
  static FEATHERWEIGHT = new WeightClass("Featherweight", 61.7, 65.8);
  static LIGHTWEIGHT = new WeightClass("Lightweight", 66.2, 70.3);
  static WELTERWEIGHT = new WeightClass("Welterweight", 70.8, 77.1);
  static MIDDLEWEIGHT = new WeightClass("Middleweight", 77.6, 83.9);
  static LIGHT_HEAVYWEIGHT = new WeightClass("Light Heavyweight", 84.4, 93.0);
  static HEAVYWEIGHT = new WeightClass("Heavyweight", 93.4, 120.2);

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
