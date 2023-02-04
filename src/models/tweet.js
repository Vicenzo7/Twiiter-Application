import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet cannot be more than 250 characters"],
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    images: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

tweetSchema.virtual("contentWithEmail").get(function process() {
  return `${this.content} \nCreated by: ${this.userEmail}`;
});

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
