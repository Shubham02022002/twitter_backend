const express = require("express");
const connect = require("./config/database");
const app = express();

const TweetRepository = require("./repository/tweet-repository.js");
// const CommentRepository =require('./repository/comment-repository.js');
const Comment = require("./models/comment");
app.listen(3000, async () => {
  console.log("listening on port 3000");
  await connect();
  console.log("connected to database");

  const tweetRepository = new TweetRepository();

  // const tweet =await tweetRepository.create({
  //     content: 'Hello World',
  //     user:'new user here ',
  //     comments:[
  //         {
  //             content: "this is my comment ",
  //             user: 'i am the same user '
  //         }
  //     ]
  // },);
  // const tweet =await tweetRepository.getById('65d35ed9da069a51a113d42e');
  // tweet.comments.push({
  //     content: "this is my comment ",
  //     user: 'user x '
  // });

  // await tweet.save();
  // console.log(tweet);
  
// const tweet = await tweetRepository.getWithComment('65d36413df8add17c3fb9a2b');

  // const tweet = await tweetRepository.create({
  //   content: "new tweet content",
  //   user: "userX",
  // });
  
  // const comment = await Comment.create({
  //   content: "this is a comment",
  //   user: "dev",
  // });

  // const comment2=await Comment.create({
  //   content:"this is the second comment",
  //   user:"dev2"
  // })
  // tweet.comments.push(comment);
  // tweet.comments.push(comment2);
  // await tweet.save();
  // console.log(tweet);  
  const tweet= await tweetRepository.getAll(0,10);
  console.log(tweet[0].contentByUser);
});
