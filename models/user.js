import mongoose, { Schema, models } from "mongoose";

const userScema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    posts: [],
  },
  { timestamps: true }
);
const User = models.User || mongoose.model("User", userScema);
export default User;
