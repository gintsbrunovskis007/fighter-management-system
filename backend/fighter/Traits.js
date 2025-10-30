class Traits {
  constructor(
    knockoutPower = 0,
    comebackKid = false,
    aggression = 0,
    composure = 0
  ) {
    this.knockoutPower = knockoutPower;
    this.comebackKid = comebackKid;
    this.aggression = aggression;
    this.composure = composure;
  }

  getKnockoutPower() {
    return this.knockoutPower;
  }

  setKnockoutPower(knockoutPower) {
    this.knockoutPower = knockoutPower;
  }

  isComebackKid() {
    return this.comebackKid;
  }

  setComebackKid(comebackKid) {
    this.comebackKid = comebackKid;
  }

  getAggression() {
    return this.aggression;
  }

  setAggression(aggression) {
    this.aggression = aggression;
  }

  getComposure() {
    return this.composure;
  }

  setComposure(composure) {
    this.composure = composure;
  }
}

module.exports = Traits;
