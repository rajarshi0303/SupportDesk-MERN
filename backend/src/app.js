// src/app.js
import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import path from "path";

import { requestLogger } from "./middleware/requestLogger.js";

import authRoutes from "./routes/auth.routes.js";
import supportRoutes from "./routes/supportRequest.routes.js";

const app = express();

// Security, CORS, JSON, Cookies
app.use(
  cors({
    origin: "http://localhost:5173", // frontend
    credentials: true,
  })
);
app.use(helmet());
app.use(cookieParser());
app.use(express.json());

// Rate limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: "Too many requests, try again later",
});
app.use(limiter);

// Request logger
app.use(requestLogger);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/support-requests", supportRoutes);

// File download route (force download)
app.get("/download/:filename", (req, res) => {
  const filePath = path.join(process.cwd(), "uploads", req.params.filename);

  res.download(filePath, (err) => {
    if (err) {
      console.error("Download error:", err);
      res.status(404).json({ message: "File not found" });
    }
  });
});

// 404 handler
app.use((req, res) => res.status(404).json({ message: "Route Not Found" }));

// Error handler
export function errorHandler(err, _req, res, _next) {
  const status = err.status || 500;
  const message = err.message || "Server error";
  res.status(status).json({ message });
}
app.use(errorHandler);

export default app;
