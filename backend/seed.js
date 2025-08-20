import bcrypt from "bcryptjs";
import { sequelize } from "./src/models/index.js";
import { User, SupportRequest } from "./src/models/index.js";

async function seed() {
  try {
    await sequelize.sync({ force: true });

    console.log("Database synced");

    // Seed users
    const passwordHash = await bcrypt.hash("password123", 10);

    const users = await User.bulkCreate(
      [
        {
          name: "Alice",
          email: "alice@example.com",
          passwordHash,
          role: "user",
        },
        {
          name: "Bob",
          email: "bob@example.com",
          passwordHash,
          role: "admin",
        },
      ],
      { returning: true }
    );

    console.log("Users seeded");

    await SupportRequest.bulkCreate([
      {
        userId: users[0].id,
        subject: "Billing Issue",
        description: "I was charged twice for my subscription.",
        category: "Billing",
        priority: "High",
        status: "Pending",
      },
      {
        userId: users[0].id,
        subject: "App Crashing",
        description: "The mobile app crashes on startup.",
        category: "Technical",
        priority: "Medium",
        status: "Pending",
      },
      {
        userId: users[1].id,
        subject: "Feature Request",
        description: "Can we add dark mode support?",
        category: "General",
        priority: "Low",
        status: "Resolved",
      },
    ]);

    console.log("Support requests seeded");

    process.exit(0);
  } catch (err) {
    console.error("Seeding error", err);
    process.exit(1);
  }
}

seed();
