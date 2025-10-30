import FighterCountry from "./Country.js";
import FighterActivityStatus from "./ActivityStatus.js";
import FighterWeightClass from "./WeightClass.js";
import FightingStyle from "./Style.js";
import FightingStance from "./Stance.js";
import FighterRecord from "./Record.js";
import FighterImage from "./FighterImages.js";
import FighterCoreAttributes from "./CoreAttributes.js";
import FighterTechnicalStats from "./TechnicalSkills.js";
import FighterTraits from "./Traits.js";
import FighterSimulationStats from "./SimulationStats.js";
import FighterGym from "./Gym.js";
import FighterOrganization from "./Organization.js";

export default class Fighter {
  constructor(
    id = null,
    overallRating = 0,
    name = "",
    nickname = "",
    surname = "",
    age = null,
    dateOfBirth = null,
    fighterCountry = null,
    fightingOutOf = "",
    byWayOf = "",
    fighterGym = null,
    fighterOrganization = null,
    fighterImage = new FighterImage(),
    fighterRecord = new FighterRecord(),
    fighterWeightClass = null,
    height = null,
    weight = null,
    armReach = null,
    legReach = null,
    fightingStyle = null,
    fightingStance = null,
    winsByKO = 0,
    winsBySubmission = 0,
    winsByDecision = 0,
    entranceSong = "",
    debutDate = null,
    fighterActivityStatus = FighterActivityStatus.ACTIVE,
    fighterCoreAttributes = new FighterCoreAttributes(),
    fighterTechnicalSkills = new FighterTechnicalStats(),
    fighterTraits = new FighterTraits(),
    fighterSimulationStats = new FighterSimulationStats()
  ) {
    this.id = id;
    this.overallRating = overallRating;
    this.name = name;
    this.nickname = nickname;
    this.surname = surname;
    this.age = age;
    this.dateOfBirth = dateOfBirth;
    this.fighterCountry = fighterCountry;
    this.fightingOutOf = fightingOutOf;
    this.byWayOf = byWayOf;
    this.fighterGym = fighterGym;
    this.fighterOrganization = fighterOrganization;
    this.fighterImage = fighterImage;
    this.fighterRecord = fighterRecord;
    this.fighterWeightClass = fighterWeightClass;
    this.height = height;
    this.weight = weight;
    this.armReach = armReach;
    this.legReach = legReach;
    this.fightingStyle = fightingStyle;
    this.fightingStance = fightingStance;
    this.winsByKO = winsByKO;
    this.winsBySubmission = winsBySubmission;
    this.winsByDecision = winsByDecision;
    this.entranceSong = entranceSong;
    this.debutDate = debutDate;
    this.fighterActivityStatus = fighterActivityStatus;
    this.fighterCoreAttributes = fighterCoreAttributes;
    this.fighterTechnicalSkills = fighterTechnicalSkills;
    this.fighterTraits = fighterTraits;
    this.fighterSimulationStats = fighterSimulationStats;
  }

  getId() {
    return this.id;
  }
  setId(id) {
    this.id = id;
  }

  getOverallRating() {
    return this.overallRating;
  }
  setOverallRating(overallRating) {
    this.overallRating = overallRating;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getNickname() {
    return this.nickname;
  }
  setNickname(nickname) {
    this.nickname = nickname;
  }

  getSurname() {
    return this.surname;
  }
  setSurname(surname) {
    this.surname = surname;
  }

  getAge() {
    return this.age;
  }
  setAge(age) {
    this.age = age;
  }

  getDateOfBirth() {
    return this.dateOfBirth;
  }
  setDateOfBirth(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  getFighterCountry() {
    return this.fighterCountry;
  }
  setFighterCountry(fighterCountry) {
    this.fighterCountry = fighterCountry;
  }

  getFightingOutOf() {
    return this.fightingOutOf;
  }
  setFightingOutOf(fightingOutOf) {
    this.fightingOutOf = fightingOutOf;
  }

  getByWayOf() {
    return this.byWayOf;
  }
  setByWayOf(byWayOf) {
    this.byWayOf = byWayOf;
  }

  getFighterGym() {
    return this.fighterGym;
  }
  setFighterGym(fighterGym) {
    this.fighterGym = fighterGym;
  }

  getFighterOrganization() {
    return this.fighterOrganization;
  }
  setFighterOrganization(fighterOrganization) {
    this.fighterOrganization = fighterOrganization;
  }

  getFighterImage() {
    return this.fighterImage;
  }
  setFighterImage(fighterImage) {
    this.fighterImage = fighterImage;
  }

  getFighterRecord() {
    return this.fighterRecord;
  }
  setFighterRecord(fighterRecord) {
    this.fighterRecord = fighterRecord;
  }

  getFighterWeightClass() {
    return this.fighterWeightClass;
  }
  setFighterWeightClass(fighterWeightClass) {
    this.fighterWeightClass = fighterWeightClass;
  }

  getHeight() {
    return this.height;
  }
  setHeight(height) {
    this.height = height;
  }

  getWeight() {
    return this.weight;
  }
  setWeight(weight) {
    this.weight = weight;
  }

  getArmReach() {
    return this.armReach;
  }
  setArmReach(armReach) {
    this.armReach = armReach;
  }

  getLegReach() {
    return this.legReach;
  }
  setLegReach(legReach) {
    this.legReach = legReach;
  }

  getFightingStyle() {
    return this.fightingStyle;
  }
  setFightingStyle(fightingStyle) {
    this.fightingStyle = fightingStyle;
  }

  getFightingStance() {
    return this.fightingStance;
  }
  setFightingStance(fightingStance) {
    this.fightingStance = fightingStance;
  }

  getWinsByKO() {
    return this.winsByKO;
  }
  setWinsByKO(winsByKO) {
    this.winsByKO = winsByKO;
  }

  getWinsBySubmission() {
    return this.winsBySubmission;
  }
  setWinsBySubmission(winsBySubmission) {
    this.winsBySubmission = winsBySubmission;
  }

  getWinsByDecision() {
    return this.winsByDecision;
  }
  setWinsByDecision(winsByDecision) {
    this.winsByDecision = winsByDecision;
  }

  getEntranceSong() {
    return this.entranceSong;
  }
  setEntranceSong(entranceSong) {
    this.entranceSong = entranceSong;
  }

  getDebutDate() {
    return this.debutDate;
  }
  setDebutDate(debutDate) {
    this.debutDate = debutDate;
  }

  getFighterActivityStatus() {
    return this.fighterActivityStatus;
  }
  setFighterActivityStatus(fighterActivityStatus) {
    this.fighterActivityStatus = fighterActivityStatus;
  }

  getFighterCoreAttributes() {
    return this.fighterCoreAttributes;
  }
  setFighterCoreAttributes(fighterCoreAttributes) {
    this.fighterCoreAttributes = fighterCoreAttributes;
  }

  getFighterTechnicalSkills() {
    return this.fighterTechnicalSkills;
  }
  setFighterTechnicalSkills(fighterTechnicalSkills) {
    this.fighterTechnicalSkills = fighterTechnicalSkills;
  }

  getFighterTraits() {
    return this.fighterTraits;
  }
  setFighterTraits(fighterTraits) {
    this.fighterTraits = fighterTraits;
  }

  getFighterSimulationStats() {
    return this.fighterSimulationStats;
  }
  setFighterSimulationStats(fighterSimulationStats) {
    this.fighterSimulationStats = fighterSimulationStats;
  }
}
