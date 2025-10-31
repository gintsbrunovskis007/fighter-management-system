import Fighter from "../fighter/fighterSchema.js";

export const fighterController = {
  // GET all fighters
  getAllFighters: async (req, res) => {
    try {
      const fighters = await Fighter.find();
      res.json(fighters);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // GET fighter by ID
  getFighterById: async (req, res) => {
    try {
      const fighter = await Fighter.findById(req.params.id);
      if (!fighter) {
        return res.status(404).json({ message: "Fighter not found" });
      }
      res.json(fighter);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // POST create new fighter
  createFighter: async (req, res) => {
    try {
      const fighterData = req.body;

      if (req.files) {
        if (req.files.fullHeight) {
          fighterData.fighterImage = {
            ...fighterData.fighterImage,
            fullHeightImageUrl: `/uploads/images/${req.files.fullHeight[0].filename}`,
          };
        }
        if (req.files.closeUp) {
          fighterData.fighterImage = {
            ...fighterData.fighterImage,
            closeUpImageUrl: `/uploads/images/${req.files.closeUp[0].filename}`,
          };
        }
        if (req.files.headToWaist) {
          fighterData.fighterImage = {
            ...fighterData.fighterImage,
            headToWaistImageUrl: `/uploads/images/${req.files.headToWaist[0].filename}`,
          };
        }
        if (req.files.song) {
          fighterData.entranceSong = `/uploads/songs/${req.files.song[0].filename}`;
        }
      }

      const fighter = new Fighter(fighterData);
      await fighter.save();

      res.status(201).json(fighter);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // PUT update fighter
  updateFighter: async (req, res) => {
    try {
      const fighter = await Fighter.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!fighter) {
        return res.status(404).json({ message: "Fighter not found" });
      }

      res.json(fighter);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // DELETE fighter
  deleteFighter: async (req, res) => {
    try {
      const fighter = await Fighter.findByIdAndDelete(req.params.id);
      if (!fighter) {
        return res.status(404).json({ message: "Fighter not found" });
      }
      res.json({ message: "Fighter deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
