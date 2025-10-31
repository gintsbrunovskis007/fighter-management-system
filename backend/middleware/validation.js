import { FighterCalculations } from "../utils/calculations.js";

export const fighterValidation = {
  // 18+ NO KIDS ALLOWED!
  validateAge: (dateOfBirth) => {
    const age = FighterCalculations.calculateAge(dateOfBirth);
    return age >= 18;
  },

  // NO TIME TRAVELING!
  validateDebutDate: (debutDate, dateOfBirth) => {
    const debut = new Date(debutDate);
    const birth = new Date(dateOfBirth);
    const today = new Date();

    return debut <= today && debut >= birth;
  },

  // YOU DONT HAVE THAT MANY WINS, CMON!
  validateWins: (wins, winsByKO, winsBySubmission, winsByDecision) => {
    const totalWinTypes = winsByKO + winsBySubmission + winsByDecision;
    return totalWinTypes <= wins;
  },

  // IF NOT 183cm+ THEN YOU ARE SHORT KING!
  validateHeight: (height) => {
    return height >= 150 && height <= 220;
  },

  // YOU DONT HAVE THE WINGSPAN OF A GIRAFFES NECK!
  validateWingspan: (height, armReach) => {
    const minWingspan = height * 0.9; // 90% of height
    const maxWingspan = height * 1.2; // 120% of height
    return armReach >= minWingspan && armReach <= maxWingspan;
  },

  // PLEASE HAVE A LONGER LEG REACH THAN STIPE MIOCIC!
  validateLegReach: (height, legReach) => {
    return FighterCalculations.validateLegReach(height, legReach);
  },

  // NO COPYRIGHT SONGS, SORRY!
  validateSongFile: (filename) => {
    if (!filename) return true; // Optional field
    return filename.toLowerCase().endsWith(".mp3");
  },

  // DONT BE A CATFISH!
  validateImageFile: (filename) => {
    if (!filename) return true; // Optional field
    const validExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
    return validExtensions.some((ext) => filename.toLowerCase().endsWith(ext));
  },

  // THIS IS SO YOU DONT BUILD A MEGA FIGHTER!
  validateTotalPoints: (fighter) => {
    const totalPoints =
      FighterCalculations.calculateTotalAllocatedPoints(fighter);
    return totalPoints <= 1500;
  },

  // DONT CHEAT LIKE DC DID WITH THE TOWEL TRICK!
  validateWeight: (weight) => {
    return weight >= 50 && weight <= 150;
  },

  // DONT GIVE ME A FAKE RECORD!
  validateRecordConsistency: (wins, losses, draws, noContests) => {
    const totalFights = wins + losses + draws + noContests;
    return totalFights >= 0 && totalFights <= 1000;
  },

  // CHILDREN, STOP FIGHTING!
  validateCareerStart: (dateOfBirth, debutDate) => {
    // const ageAtDebut = FighterCalculations.calculateAge(dateOfBirth, debutDate);
    // return ageAtDebut >= 16;
    return FighterCalculations.validateCareerStart(dateOfBirth, debutDate);
  },

  // DONT USE CHEATS TO HACK THE GAME!
  validateSimulationStats: (simulationStats) => {
    const { currentHP, energy, morale } = simulationStats;
    return (
      currentHP >= 0 &&
      currentHP <= 100 &&
      energy >= 0 &&
      energy <= 100 &&
      morale >= 0 &&
      morale <= 100
    );
  },
};

export const validateFighterData = (req, res, next) => {
  const fighterData = req.body;

  try {
    // Age validation
    if (
      fighterData.dateOfBirth &&
      !fighterValidation.validateAge(fighterData.dateOfBirth)
    ) {
      return res.status(400).json({
        message: "Fighter must be 18 years or older",
      });
    }

    // Debut date validation
    if (fighterData.dateOfBirth && fighterData.debutDate) {
      if (
        !fighterValidation.validateCareerStart(
          fighterData.dateOfBirth,
          fighterData.debutDate
        )
      ) {
        return res.status(400).json({
          message: "Fighter cannot debut before 16 years of age",
        });
      }
    }

    // Wins distribution validation
    if (
      fighterData.fighterRecord &&
      fighterData.winsByKO !== undefined &&
      fighterData.winsByDecision !== undefined &&
      fighterData.winsBySubmission !== undefined
    ) {
      const { wins, losses, draws, noContests } = fighterData.fighterRecord;
      const winsByKO = fighterData.winsByKO ?? 0;
      const winsBySubmission = fighterData.winsBySubmission ?? 0;
      const winsByDecision = fighterData.winsByDecision ?? 0;

      if (
        !fighterValidation.validateWins(
          wins,
          winsByKO,
          winsBySubmission,
          winsByDecision
        )
      ) {
        return res.status(400).json({
          message:
            "Sum of wins by KO, submission, and decision cannot exceed total wins",
        });
      }
    }

    // Height validation
    if (
      fighterData.height &&
      !fighterValidation.validateHeight(fighterData.height)
    ) {
      return res.status(400).json({
        message: "Height must be between 150cm and 220cm",
      });
    }

    // Wingspan validation
    if (
      fighterData.height &&
      fighterData.armReach &&
      !fighterValidation.validateWingspan(
        fighterData.height,
        fighterData.armReach
      )
    ) {
      return res.status(400).json({
        message: "Arm reach must be between 90% and 120% of height",
      });
    }

    // Leg reach validation
    if (
      fighterData.height &&
      fighterData.legReach &&
      !fighterValidation.validateLegReach(
        fighterData.height,
        fighterData.legReach
      )
    ) {
      return res.status(400).json({
        message: "Leg reach must be between 40% and 60% of height",
      });
    }

    // Weight validation
    if (
      fighterData.weight &&
      !fighterValidation.validateWeight(fighterData.weight)
    ) {
      return res.status(400).json({
        message: "Weight must be between 50kg and 150kg",
      });
    }

    // Points allocation validation
    if (!fighterValidation.validateTotalPoints(fighterData)) {
      return res.status(400).json({
        message: "Total allocated points cannot exceed 1500",
      });
    }

    // Record consistency validation
    if (fighterData.fighterRecord) {
      const { wins, losses, draws, noContests } = fighterData.fighterRecord;
      if (
        !fighterValidation.validateRecordConsistency(
          wins,
          losses,
          draws,
          noContests
        )
      ) {
        return res.status(400).json({
          message:
            "Fighter record is inconsistent or exceeds reasonable limits",
        });
      }
    }

    // Career start validation
    if (fighterData.dateOfBirth && fighterData.debutDate) {
      if (
        !fighterValidation.validateCareerStart(
          fighterData.dateOfBirth,
          fighterData.debutDate
        )
      ) {
        return res.status(400).json({
          message: "Fighter cannot debut before 16 years of age",
        });
      }
    }
    // Simulation stats validation
    if (
      fighterData.fighterSimulationStats &&
      !fighterValidation.validateSimulationStats(
        fighterData.fighterSimulationStats
      )
    ) {
      return res.status(400).json({
        message: "Simulation stats must be between 0 and 100",
      });
    }

    next();
  } catch (error) {
    res.status(400).json({ message: "Validation error: " + error.message });
  }
};

// validation for file uploads
export const validateFileUploads = (req, res, next) => {
  if (req.files) {
    // Validate image files
    if (req.files.image) {
      const imageFile = req.files.image[0];
      if (!fighterValidation.validateImageFile(imageFile.originalname)) {
        return res.status(400).json({
          message: "Only JPG, JPEG, PNG, GIF, and WebP images are allowed",
        });
      }
    }

    // Validate song files
    if (req.files.song) {
      const songFile = req.files.song[0];
      if (!fighterValidation.validateSongFile(songFile.originalname)) {
        return res.status(400).json({
          message: "Only MP3 files are allowed for entrance songs",
        });
      }
    }
  }
  next();
};
