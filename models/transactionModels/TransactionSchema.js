import mongoose, { Schema } from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    tDate: {
      type: Date,
      required: true,
    },

    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Transaction", TransactionSchema);
