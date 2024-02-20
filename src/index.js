const express = require("express");
const connect = require("./config/database");
const app = express();

const {TweetRepository,HashtagRepository}=require('./repository/index');
const TweetSevice = require("./services/tweet-service");

app.listen(3000, async () => {
  console.log("listening on port 3000");
  await connect();
  console.log("connected to database");

  let service = new TweetSevice();
  const tweet=await service.create({content:'#Hello #world #coding #newJob is fun'});

  
});
