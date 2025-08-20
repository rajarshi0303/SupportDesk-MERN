import { SupportRequest } from "../models/index.js";

// Create a new support request
export const createSupportRequest = async (req, res) => {
  try {
    const { subject, description, category, priority } = req.body;
    const userId = req.user.id;
    const attachmentUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!subject || !description || !category || !priority) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRequest = await SupportRequest.create({
      userId,
      subject,
      description,
      category,
      priority,
      attachmentUrl,
    });

    res.status(201).json(newRequest);
  } catch (err) {
    console.error("Error creating support request:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get all support requests for logged-in user
export const getSupportRequests = async (req, res) => {
  try {
    const userId = req.user.id;

    const requests = await SupportRequest.findAll({
      where: { userId },
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json(requests);
  } catch (err) {
    console.error("Error fetching support requests:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get single request by ID (owned by user)
export const getSupportRequestById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const request = await SupportRequest.findOne({
      where: { id, userId },
    });

    if (!request) {
      return res.status(404).json({ message: "Support request not found" });
    }

    res.status(200).json(request);
  } catch (err) {
    console.error("Error fetching support request:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
