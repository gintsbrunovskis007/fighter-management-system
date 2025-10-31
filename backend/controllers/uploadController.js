import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createUploadDirectories = () => {
  const directories = [
    path.join(__dirname, "../uploads/images"),
    path.join(__dirname, "../uploads/songs"),
    path.join(__dirname, "../uploads/temp"),
  ];

  directories.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });
};

// Create directories on startup
createUploadDirectories();

// Configure storage for fighter images
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/images/"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, "fighter-image-" + uniqueSuffix + extension);
  },
});

// Configure storage for entrance songs
const songStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/songs/"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "entrance-song-" + uniqueSuffix + ".mp3");
  },
});

// Configure storage for multiple fighter images
const multipleImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads/images/"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    const fieldName = file.fieldname; // fullHeight, closeUp, or headToWaist

    cb(null, `fighter-${fieldName}-${uniqueSuffix}${extension}`);
  },
});

// File filters
const imageFileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Only image files (JPEG, JPG, PNG, GIF, WebP) are allowed!"));
  }
};

const songFileFilter = (req, file, cb) => {
  const allowedTypes = /mp3/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb(new Error("Only MP3 files are allowed for entrance songs!"));
  }
};

// Multer configurations
export const uploadImage = multer({
  storage: imageStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: imageFileFilter,
});

export const uploadSong = multer({
  storage: songStorage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: songFileFilter,
});

// For uploading multiple fighter images at once
export const uploadMultipleImages = multer({
  storage: multipleImageStorage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB per file
  },
  fileFilter: imageFileFilter,
});

// Handle file upload errors
export const handleUploadError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        message: "File too large. Images: 5MB max, Songs: 10MB max",
      });
    }
    if (err.code === "LIMIT_FILE_COUNT") {
      return res.status(400).json({
        message: "Too many files uploaded",
      });
    }
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({
        message: "Unexpected file field",
      });
    }
  }

  if (err.message) {
    return res.status(400).json({ message: err.message });
  }

  next(err);
};

export const fileController = {
  uploadFighterImage: (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const imageUrl = `/uploads/images/${req.file.filename}`;

      res.json({
        message: "Image uploaded successfully",
        imageUrl: imageUrl,
        filename: req.file.filename,
        size: req.file.size,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error uploading image: " + error.message });
    }
  },

  // Upload entrance song
  uploadEntranceSong: (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }

      const songUrl = `/uploads/songs/${req.file.filename}`;

      res.json({
        message: "Entrance song uploaded successfully",
        songUrl: songUrl,
        filename: req.file.filename,
        size: req.file.size,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error uploading song: " + error.message });
    }
  },

  // Upload multiple fighter images (fullHeight, closeUp, headToWaist)
  uploadFighterImages: (req, res) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ message: "No files uploaded" });
      }

      const imageUrls = {};

      if (req.files.fullHeight) {
        imageUrls.fullHeightImageUrl = `/uploads/images/${req.files.fullHeight[0].filename}`;
      }
      if (req.files.closeUp) {
        imageUrls.closeUpImageUrl = `/uploads/images/${req.files.closeUp[0].filename}`;
      }
      if (req.files.headToWaist) {
        imageUrls.headToWaistImageUrl = `/uploads/images/${req.files.headToWaist[0].filename}`;
      }

      res.json({
        message: "Fighter images uploaded successfully",
        imageUrls: imageUrls,
        files: req.files,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error uploading images: " + error.message });
    }
  },

  // Delete uploaded file
  deleteFile: async (req, res) => {
    try {
      const { filename, type } = req.params;
      let filePath;

      if (type === "image") {
        filePath = path.join(__dirname, "../uploads/images/", filename);
      } else if (type === "song") {
        filePath = path.join(__dirname, "../uploads/songs/", filename);
      } else {
        return res.status(400).json({ message: "Invalid file type" });
      }

      if (!fs.existsSync(filePath)) {
        return res.status(404).json({ message: "File not found" });
      }

      fs.unlinkSync(filePath);

      res.json({ message: "File deleted successfully" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error deleting file: " + error.message });
    }
  },

  // Get list of uploaded files (for admin purposes)
  getUploadedFiles: async (req, res) => {
    try {
      const imageDir = path.join(__dirname, "../uploads/images/");
      const songDir = path.join(__dirname, "../uploads/songs/");

      const images = fs.existsSync(imageDir) ? fs.readdirSync(imageDir) : [];
      const songs = fs.existsSync(songDir) ? fs.readdirSync(songDir) : [];

      const imageFiles = images
        .filter((file) => !file.startsWith("."))
        .map((file) => {
          const stat = fs.statSync(path.join(imageDir, file));
          return {
            filename: file,
            size: stat.size,
            uploaded: stat.birthtime,
          };
        });

      const songFiles = songs
        .filter((file) => !file.startsWith("."))
        .map((file) => {
          const stat = fs.statSync(path.join(songDir, file));
          return {
            filename: file,
            size: stat.size,
            uploaded: stat.birthtime,
          };
        });

      res.json({
        images: imageFiles,
        songs: songFiles,
        totalSize: {
          images: imageFiles.reduce((sum, file) => sum + file.size, 0),
          songs: songFiles.reduce((sum, file) => sum + file.size, 0),
        },
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error reading uploaded files: " + error.message });
    }
  },
};

// Utility function to clean up orphaned files (can be run periodically)
export const cleanupOrphanedFiles = async () => {
  try {
    const imageDir = path.join(__dirname, "../uploads/images/");
    const songDir = path.join(__dirname, "../uploads/songs/");

    const images = fs.existsSync(imageDir) ? fs.readdirSync(imageDir) : [];
    const songs = fs.existsSync(songDir) ? fs.readdirSync(songDir) : [];

    console.log(
      `Cleanup: ${images.length} images, ${songs.length} songs found`
    );
    return { images: images.length, songs: songs.length };
  } catch (error) {
    console.error("Error during file cleanup:", error);
    throw error;
  }
};
