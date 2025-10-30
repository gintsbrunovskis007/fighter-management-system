import express from "express";
import Fighter from "../fighter/fighterSchema.js";

const router = express.Router();

// GET all fighters
router.get("/", async (req, res) => {
  try {
    const fighters = await Fighter.find();
    res.json(fighters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET fighter by ID
router.get("/:id", async (req, res) => {
  try {
    const fighter = await Fighter.findById(req.params.id);
    if (!fighter) {
      return res.status(404).json({ message: "Fighter not found" });
    }
    res.json(fighter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create new fighter
router.post("/", async (req, res) => {
  try {
    const fighter = new Fighter(req.body);
    await fighter.save();
    res.status(201).json(fighter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update fighter
router.put("/:id", async (req, res) => {
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
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const fighter = await Fighter.findByIdAndDelete(req.params.id);
    if (!fighter) {
      return res.status(404).json({ message: "Fighter not found" });
    }
    res.json({ message: "Fighter deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
