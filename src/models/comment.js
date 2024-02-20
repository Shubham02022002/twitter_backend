import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
