class TechnicalStats {
  constructor(
    strikingAccuracy = 0,
    strikingDefense = 0,
    grapplingAccuracy = 0,
    grapplingDefense = 0,
    takedownAccuracy = 0,
    takedownDefense = 0,
    submissionSkill = 0,
    groundGame = 0,
    clinchSkill = 0
  ) {
    this.strikingAccuracy = strikingAccuracy;
    this.strikingDefense = strikingDefense;
    this.grapplingAccuracy = grapplingAccuracy;
    this.grapplingDefense = grapplingDefense;
    this.takedownAccuracy = takedownAccuracy;
    this.takedownDefense = takedownDefense;
    this.submissionSkill = submissionSkill;
    this.groundGame = groundGame;
    this.clinchSkill = clinchSkill;
  }

  getStrikingAccuracy() {
    return this.strikingAccuracy;
  }

  setStrikingAccuracy(strikingAccuracy) {
    this.strikingAccuracy = strikingAccuracy;
  }

  getStrikingDefense() {
    return this.strikingDefense;
  }

  setStrikingDefense(strikingDefense) {
    this.strikingDefense = strikingDefense;
  }

  getGrapplingAccuracy() {
    return this.grapplingAccuracy;
  }

  setGrapplingAccuracy(grapplingAccuracy) {
    this.grapplingAccuracy = grapplingAccuracy;
  }

  getGrapplingDefense() {
    return this.grapplingDefense;
  }

  setGrapplingDefense(grapplingDefense) {
    this.grapplingDefense = grapplingDefense;
  }

  getTakedownAccuracy() {
    return this.takedownAccuracy;
  }

  setTakedownAccuracy(takedownAccuracy) {
    this.takedownAccuracy = takedownAccuracy;
  }

  getTakedownDefense() {
    return this.takedownDefense;
  }

  setTakedownDefense(takedownDefense) {
    this.takedownDefense = takedownDefense;
  }

  getSubmissionSkill() {
    return this.submissionSkill;
  }

  setSubmissionSkill(submissionSkill) {
    this.submissionSkill = submissionSkill;
  }

  getGroundGame() {
    return this.groundGame;
  }

  setGroundGame(groundGame) {
    this.groundGame = groundGame;
  }

  getClinchSkill() {
    return this.clinchSkill;
  }

  setClinchSkill(clinchSkill) {
    this.clinchSkill = clinchSkill;
  }
}

module.exports = TechnicalStats;
