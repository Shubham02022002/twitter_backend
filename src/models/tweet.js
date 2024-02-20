const mongoose = require("mongoose");
const Comment = require("./comment");
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  },
  {
    timestamps: true,
  }
);

tweetSchema.virtual("contentByUser").get(function process(){
  return `${this.content} \nCreated by ${this.user}`;
})

tweetSchema.pre('save',(next)=>{
console.log("Inside a hook");
this.content=this.content+'...';
next();
})

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;


