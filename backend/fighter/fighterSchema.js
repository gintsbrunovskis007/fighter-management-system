import mongoose from "mongoose";
import { FighterCalculations } from "../utils/calculations.js";

const fighterSchema = new mongoose.Schema(
  {
    overallRating: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    nickname: {
      type: String,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      min: 0,
      max: 100,
    },
    dateOfBirth: {
      type: Date,
    },
    fighterCountry: {
      type: String,
      enum: [
        "UNITED_STATES",
        "RUSSIA",
        "BRAZIL",
        "AUSTRALIA",
        "NEW_ZEALAND",
        "NIGERIA",
        "ENGLAND",
        "LATVIA",
        "CANADA",
        "NEUTRAL",
      ],
      required: true,
    },
    fightingOutOf: {
      type: String,
      trim: true,
    },
    byWayOf: {
      type: String,
      trim: true,
    },
    fighterGym: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FighterGym",
    },
    fighterOrganization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FighterOrganization",
    },
    fighterImage: {
      fullHeightImageUrl: String,
      closeUpImageUrl: String,
      headToWaistImageUrl: String,
    },
    fighterRecord: {
      wins: { type: Number, default: 0, min: 0 },
      losses: { type: Number, default: 0, min: 0 },
      draws: { type: Number, default: 0, min: 0 },
      noContests: { type: Number, default: 0, min: 0 },
    },
    fighterWeightClass: {
      type: String,
      enum: [
        "FLYWEIGHT",
        "BANTAMWEIGHT",
        "FEATHERWEIGHT",
        "LIGHTWEIGHT",
        "WELTERWEIGHT",
        "MIDDLEWEIGHT",
        "LIGHT_HEAVYWEIGHT",
        "HEAVYWEIGHT",
      ],
    },
    height: { type: Number, min: 0 },
    weight: { type: Number, min: 0 },
    armReach: { type: Number, min: 0 },
    legReach: { type: Number, min: 0 },
    fightingStyle: {
      type: String,
      enum: [
        "BOXING",
        "MUAY_THAI",
        "KICKBOXING",
        "KARATE",
        "TAEKWONDO",
        "BJJ",
        "WRESTLING",
        "JUDO",
        "SAMBO",
        "FREESTYLE_WRESTLING",
        "GRECO_ROMAN",
        "SANDA",
        "CAPOEIRA",
        "MMA",
        "JEET_KUNE_DO",
        "KUNG_FU",
        "CATCH_WRESTLING",
        "SHOOTFIGHTING",
        "LETHWEI",
      ],
    },
    fightingStance: {
      type: String,
      enum: ["ORTHODOX", "SOUTHPAW", "SWITCH"],
    },
    winsByKO: { type: Number, default: 0, min: 0 },
    winsBySubmission: { type: Number, default: 0, min: 0 },
    winsByDecision: { type: Number, default: 0, min: 0 },
    entranceSong: { type: String, trim: true },
    debutDate: { type: Date },
    fighterActivityStatus: {
      type: String,
      enum: ["ACTIVE", "RETIRED", "INJURED", "SUSPENDED"],
      default: "ACTIVE",
    },
    fighterCoreAttributes: {
      strength: { type: Number, default: 0, min: 0, max: 100 },
      speed: { type: Number, default: 0, min: 0, max: 100 },
      stamina: { type: Number, default: 0, min: 0, max: 100 },
      durability: { type: Number, default: 0, min: 0, max: 100 },
      intelligence: { type: Number, default: 0, min: 0, max: 100 },
      cardio: { type: Number, default: 0, min: 0, max: 100 },
      reflexes: { type: Number, default: 0, min: 0, max: 100 },
      agility: { type: Number, default: 0, min: 0, max: 100 },
      conditioning: { type: Number, default: 0, min: 0, max: 100 },
    },
    fighterTechnicalSkills: {
      strikingAccuracy: { type: Number, default: 0, min: 0, max: 100 },
      strikingDefense: { type: Number, default: 0, min: 0, max: 100 },
      grapplingAccuracy: { type: Number, default: 0, min: 0, max: 100 },
      grapplingDefense: { type: Number, default: 0, min: 0, max: 100 },
      takedownAccuracy: { type: Number, default: 0, min: 0, max: 100 },
      takedownDefense: { type: Number, default: 0, min: 0, max: 100 },
      submissionSkill: { type: Number, default: 0, min: 0, max: 100 },
      groundGame: { type: Number, default: 0, min: 0, max: 100 },
      clinchSkill: { type: Number, default: 0, min: 0, max: 100 },
    },
    fighterTraits: {
      knockoutPower: { type: Number, default: 0, min: 0, max: 100 },
      comebackKid: { type: Boolean, default: false },
      aggression: { type: Number, default: 0, min: 0, max: 100 },
      composure: { type: Number, default: 0, min: 0, max: 100 },
    },
    fighterSimulationStats: {
      simulationRating: { type: Number, default: 0, min: 0, max: 100 },
      currentHP: { type: Number, default: 100, min: 0, max: 100 },
      energy: { type: Number, default: 100, min: 0, max: 100 },
      morale: { type: Number, default: 100, min: 0, max: 100 },
    },
  },
  {
    timestamps: true,
  }
);

fighterSchema.pre("validate", function (next) {
  console.log("Pre-validate hook triggered");

  if (this.dateOfBirth) {
    this.age = FighterCalculations.calculateAge(this.dateOfBirth);
    console.log(`TIME TO HANG UP THE GLOVES... AGE: ${this.age}`);
  }

  if (
    this.isModified("fighterCoreAttributes") ||
    this.isModified("fighterTechnicalSkills") ||
    this.isModified("fighterTraits")
  ) {
    this.overallRating = FighterCalculations.calculateOverallRating(this);
    console.log(`YOU HAVE A OVERALL RATING OF: ${this.overallRating}`);
  }

  if (this.weight) {
    console.log(
      `DANIEL CORMIER IS HEAVIER, ALL GOOD DUDE, WEIGHT: ${this.weight}`
    );
    this.fighterWeightClass = FighterCalculations.getWeightClass(this.weight);
    console.log(`YOU ARE IN THIS WEIGHT CLASS: ${this.fighterWeightClass}`);
  } else {
    console.log("NO WEIGHT CLASS");
  }

  next();
});

fighterSchema.index({ name: 1, surname: 1 });
fighterSchema.index({ overallRating: -1 });
fighterSchema.index({ fighterWeightClass: 1 });

const Fighter = mongoose.model("Fighter", fighterSchema);

export default Fighter;
