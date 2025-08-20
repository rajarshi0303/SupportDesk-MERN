import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";

import { requestLogger } from "./middleware/requestLogger.js";

import authRoutes from "./routes/auth.routes.js";
import supportRoutes from "./routes/supportRequest.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100,
  message: "Too many requests, try again later",
});
app.use(limiter);
app.use(requestLogger);

app.use("/api/auth", authRoutes);
app.use("/api/support-requests", supportRoutes);

app.use((req, res) => res.status(404).json({ message: "Route Not Found" }));

export function errorHandler(err, _req, res, _next) {
  const status = err.status || 500;
  const message = err.message || "Server error";
  res.status(status).json({ message });
}

app.use(errorHandler);

export default app;
