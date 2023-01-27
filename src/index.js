import express from "express";
import { connect } from "./config/database.js";
const app = express();

import HashtagRepository from "./repository/hashtag-repository.js";
import TweetRepository from "./repository/tweet-repository.js";
import TweetService from "./services/tweet-service.js";

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("Mongo db connected");

  // const service = new TweetService();

  // const response = await service.create({ content: "#FUN test bro" });

  // console.log(response);
});
