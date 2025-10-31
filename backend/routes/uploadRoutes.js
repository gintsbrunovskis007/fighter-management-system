import express from "express";
import {
  uploadImage,
  uploadSong,
  uploadMultipleImages,
  handleUploadError,
  fileController,
} from "../controllers/uploadController.js";

const router = express.Router();

// Upload single fighter image
router.post(
  "/image",
  uploadImage.single("image"),
  handleUploadError,
  fileController.uploadFighterImage
);

// Upload entrance song
router.post(
  "/song",
  uploadSong.single("song"),
  handleUploadError,
  fileController.uploadEntranceSong
);

// Upload multiple fighter images
router.post(
  "/images",
  uploadMultipleImages.fields([
    { name: "fullHeight", maxCount: 1 },
    { name: "closeUp", maxCount: 1 },
    { name: "headToWaist", maxCount: 1 },
  ]),
  handleUploadError,
  fileController.uploadFighterImages
);

// File management routes
router.delete("/:type/:filename", fileController.deleteFile);
router.get("/files", fileController.getUploadedFiles);

export default router;
