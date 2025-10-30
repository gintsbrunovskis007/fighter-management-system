export default class FighterRecord {
  constructor(wins = 0, losses = 0, draws = 0, noContests = 0) {
    this.wins = wins;
    this.losses = losses;
    this.draws = draws;
    this.noContests = noContests;
  }

  getWins() {
    return this.wins;
  }

  setWins(wins) {
    this.wins = wins;
  }

  getLosses() {
    return this.losses;
  }

  setLosses(losses) {
    this.losses = losses;
  }

  getDraws() {
    return this.draws;
  }

  setDraws(draws) {
    this.draws = draws;
  }

  getNoContests() {
    return this.noContests;
  }

  setNoContests(noContests) {
    this.noContests = noContests;
  }
}
