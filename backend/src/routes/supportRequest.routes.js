import { Router } from "express";
import { authenticate } from "../middleware/auth.js";

import { upload } from "../middleware/upload.js";

import {
  createSupportRequest,
  getSupportRequestById,
  getSupportRequests,
} from "../controllers/supportRequestController.js";

const router = Router();

router.post(
  "/",
  authenticate,
  upload.single("attachment"),
  createSupportRequest
);
router.get("/", authenticate, getSupportRequests);
router.get("/:id", authenticate, getSupportRequestById);

export default router;
