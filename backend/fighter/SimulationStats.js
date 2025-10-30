export default class SimulationStats {
  constructor(simulationRating = 0, currentHP = 0, energy = 0, morale = 0) {
    this.simulationRating = simulationRating;
    this.currentHP = currentHP;
    this.energy = energy;
    this.morale = morale;
  }

  getSimulationRating() {
    return this.simulationRating;
  }

  setSimulationRating(simulationRating) {
    this.simulationRating = simulationRating;
  }

  getCurrentHP() {
    return this.currentHP;
  }

  setCurrentHP(currentHP) {
    this.currentHP = currentHP;
  }

  getEnergy() {
    return this.energy;
  }

  setEnergy(energy) {
    this.energy = energy;
  }

  getMorale() {
    return this.morale;
  }

  setMorale(morale) {
    this.morale = morale;
  }
}
