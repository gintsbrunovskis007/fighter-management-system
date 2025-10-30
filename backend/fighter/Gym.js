export default class Gym {
  constructor(
    id = null,
    gymName = "",
    trainerName = "",
    country = null,
    address = "",
    logoUrl = "",
    fighters = []
  ) {
    this.id = id;
    this.gymName = gymName;
    this.trainerName = trainerName;
    this.country = country;
    this.address = address;
    this.logoUrl = logoUrl;
    this.fighters = fighters;
  }

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getGymName() {
    return this.gymName;
  }

  setGymName(gymName) {
    this.gymName = gymName;
  }

  getTrainerName() {
    return this.trainerName;
  }

  setTrainerName(trainerName) {
    this.trainerName = trainerName;
  }

  getCountry() {
    return this.country;
  }

  setCountry(country) {
    this.country = country;
  }

  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }

  getLogoUrl() {
    return this.logoUrl;
  }

  setLogoUrl(logoUrl) {
    this.logoUrl = logoUrl;
  }

  getFighters() {
    return this.fighters;
  }

  setFighters(fighters) {
    this.fighters = fighters;
  }
}
