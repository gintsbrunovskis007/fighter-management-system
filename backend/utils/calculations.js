import WeightClass from "../fighter/WeightClass.js";

export class FighterCalculations {
  static calculateOverallRating(fighter) {
    const { fighterCoreAttributes, fighterTechnicalSkills, fighterTraits } =
      fighter;

    const weights = {
      core: 0.4,
      technical: 0.4,
      traits: 0.2,
    };

    const coreAvg =
      (fighterCoreAttributes.strength +
        fighterCoreAttributes.speed +
        fighterCoreAttributes.stamina +
        fighterCoreAttributes.durability +
        fighterCoreAttributes.intelligence +
        fighterCoreAttributes.cardio +
        fighterCoreAttributes.reflexes +
        fighterCoreAttributes.agility +
        fighterCoreAttributes.conditioning) /
      9;

    const technicalAvg =
      (fighterTechnicalSkills.strikingAccuracy +
        fighterTechnicalSkills.strikingDefense +
        fighterTechnicalSkills.grapplingAccuracy +
        fighterTechnicalSkills.grapplingDefense +
        fighterTechnicalSkills.takedownAccuracy +
        fighterTechnicalSkills.takedownDefense +
        fighterTechnicalSkills.submissionSkill +
        fighterTechnicalSkills.groundGame +
        fighterTechnicalSkills.clinchSkill) /
      9;

    const traitsAvg =
      (fighterTraits.knockoutPower +
        fighterTraits.aggression +
        fighterTraits.composure +
        (fighterTraits.comebackKid ? 20 : 0)) /
      3;

    return Math.round(
      coreAvg * weights.core +
        technicalAvg * weights.technical +
        traitsAvg * weights.traits
    );
  }

  static calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  static getWeightClass(weight) {
    return WeightClass.getWeightClass(weight);
  }

  static validateLegReach(height, legReach) {
    const minLegReach = height * 0.4;
    const maxLegReach = height * 0.6;
    return legReach >= minLegReach && legReach <= maxLegReach;
  }

  static calculateTotalAllocatedPoints(fighter) {
    const { fighterCoreAttributes, fighterTechnicalSkills, fighterTraits } =
      fighter;

    let total = 0;

    Object.values(fighterCoreAttributes).forEach((value) => (total += value));
    Object.values(fighterTechnicalSkills).forEach((value) => (total += value));

    total +=
      fighterTraits.knockoutPower +
      fighterTraits.aggression +
      fighterTraits.composure;
    if (fighterTraits.comebackKid) total += 20;

    return total;
  }
}
