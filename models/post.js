import mongoose, { Schema, models } from "mongoose";

const postScema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    comments: [],
    likes: [],
  },
  { timestamps: true }
);
const Post = models.User || mongoose.model("Post", postScema);
export default User;
