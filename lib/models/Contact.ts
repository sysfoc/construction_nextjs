import mongoose from "mongoose";

const contactScheama = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

contactScheama.index({ createdAt: -1 });

const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactScheama);
export default Contact;
