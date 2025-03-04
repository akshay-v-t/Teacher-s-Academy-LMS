import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const payload = req.body.toString(); // Convert raw buffer to string
    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"], // Fix missing timestamp header
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(payload, headers);

    const { data, type } = JSON.parse(payload); // Parse JSON after verification

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses?.[0]?.email_address || "",
          name: `${data.first_name || ""} ${data.last_name || ""}`,
          imageUrl: data.image_url || "",
        };

        try {
          await User.create(userData);
        } catch (err) {
          console.error("Error creating user:", err);
        }

        res.json({});
        break;
      }

      case "user.updated": {
        const userData = {
          email: data.email_addresses?.[0]?.email_address || "",
          name: `${data.first_name || ""} ${data.last_name || ""}`,
          imageUrl: data.image_url || "",
        };

        await User.findByIdAndUpdate(data.id, userData);
        res.json({});
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        res.json({});
        break;
      }

      default:
        res.status(400).json({ success: false, message: "Invalid event type" });
        break;
    }
  } catch (error) {
    console.error("Webhook Error:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
