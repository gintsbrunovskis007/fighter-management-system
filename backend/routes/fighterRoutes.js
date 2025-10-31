import express from "express";
import { fighterController } from "../controllers/fighterController.js";
import {
  uploadImage,
  uploadSong,
  handleUploadError,
} from "../controllers/uploadController.js";
import {
  validateFighterData,
  validateFileUploads,
} from "../middleware/validation.js";

const router = express.Router();

// GET routes
router.get("/", fighterController.getAllFighters);
// router.get("/active", fighterController.getActiveFighters);
// router.get(
//   "/weight-class/:weightClass",
//   fighterController.getFightersByWeightClass
// );
router.get("/:id", fighterController.getFighterById);

// POST create fighter
router.post(
  "/",
  uploadImage.fields([{ name: "image", maxCount: 1 }]),
  uploadSong.fields([{ name: "song", maxCount: 1 }]),
  handleUploadError,
  validateFileUploads,
  validateFighterData,
  fighterController.createFighter
);

// PUT update fighter
router.put("/:id", validateFighterData, fighterController.updateFighter);

// DELETE fighter
router.delete("/:id", fighterController.deleteFighter);

export default router;
