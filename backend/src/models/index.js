import { sequelize } from "../config/db.js";
import { User } from "./User.js";
import { SupportRequest } from "./SupportRequest.js";

// Associations
User.hasMany(SupportRequest, { foreignKey: "userId", onDelete: "CASCADE" });
SupportRequest.belongsTo(User, { foreignKey: "userId" });

export { User, SupportRequest, sequelize };
