import express from "express";
import {
  getTreatments,
  saveTreatment,
  getRecentActivity,
} from "../controllers/treatmentController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all treatments
router.get("/", authMiddleware, getTreatments);

// Save treatment
router.post("/", authMiddleware, saveTreatment);

// Recent Activity
router.get(
  "/activity",
  authMiddleware,
  getRecentActivity
);

export default router;