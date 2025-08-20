import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db.js";

export class SupportRequest extends Model {}

SupportRequest.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    subject: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    category: {
      type: DataTypes.ENUM("Billing", "Technical", "General"),
      allowNull: false,
    },
    priority: {
      type: DataTypes.ENUM("Low", "Medium", "High"),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "Resolved"),
      allowNull: false,
      defaultValue: "Pending",
    },
    attachmentUrl: { type: DataTypes.STRING },
  },
  { sequelize, modelName: "SupportRequest", tableName: "support_requests" }
);
