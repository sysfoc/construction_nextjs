import mongoose from "mongoose";

const quoteScheama = new mongoose.Schema(
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
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "completed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

quoteScheama.index({ createdAt: -1 });

const Quote = mongoose.models.Quote || mongoose.model("Quote", quoteScheama);
export default Quote;
