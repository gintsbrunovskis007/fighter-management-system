export default class Stance {
  static ORTHODOX = new Stance("Orthodox");
  static SOUTHPAW = new Stance("Southpaw");
  static SWITCH = new Stance("Switch");

  constructor(stanceName) {
    this.stanceName = stanceName;
  }

  getStanceName() {
    return this.stanceName;
  }
}
