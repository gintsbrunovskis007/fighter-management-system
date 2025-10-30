class Stance {
  static ORTHODOX = new FightingStance("Orthodox");
  static SOUTHPAW = new FightingStance("Southpaw");
  static SWITCH = new FightingStance("Switch");

  constructor(stanceName) {
    this.stanceName = stanceName;
  }

  getStanceName() {
    return this.stanceName;
  }
}

module.exports = Stance;
