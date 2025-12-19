import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    category: String,
    status: {
      type: String,
      enum: ["Want to Read", "Reading", "Completed"],
      default: "Want to Read",
    },
    progress: { type: Number, default: 0 },
    rating: { type: Number, min: 1, max: 5 }, // ⭐ NEW
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
