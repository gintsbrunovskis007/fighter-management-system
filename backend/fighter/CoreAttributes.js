class CoreAttributes {
  constructor(
    strength = 0,
    speed = 0,
    stamina = 0,
    durability = 0,
    intelligence = 0,
    cardio = 0,
    reflexes = 0,
    agility = 0,
    conditioning = 0
  ) {
    this.strength = strength;
    this.speed = speed;
    this.stamina = stamina;
    this.durability = durability;
    this.intelligence = intelligence;
    this.cardio = cardio;
    this.reflexes = reflexes;
    this.agility = agility;
    this.conditioning = conditioning;
  }

  getStrength() {
    return this.strength;
  }

  setStrength(strength) {
    this.strength = strength;
  }

  getSpeed() {
    return this.speed;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  getStamina() {
    return this.stamina;
  }

  setStamina(stamina) {
    this.stamina = stamina;
  }

  getDurability() {
    return this.durability;
  }

  setDurability(durability) {
    this.durability = durability;
  }

  getIntelligence() {
    return this.intelligence;
  }

  setIntelligence(intelligence) {
    this.intelligence = intelligence;
  }

  getCardio() {
    return this.cardio;
  }

  setCardio(cardio) {
    this.cardio = cardio;
  }

  getReflexes() {
    return this.reflexes;
  }

  setReflexes(reflexes) {
    this.reflexes = reflexes;
  }

  getAgility() {
    return this.agility;
  }

  setAgility(agility) {
    this.agility = agility;
  }

  getConditioning() {
    return this.conditioning;
  }

  setConditioning(conditioning) {
    this.conditioning = conditioning;
  }
}

module.exports = CoreAttributes;
