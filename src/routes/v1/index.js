import express from "express";
import { toggleLike } from "../../controllers/like-controller.js";
import { createTweet } from "../../controllers/tweet-controller.js";

const router = express.Router();

router.post("/tweets", createTweet);
router.post("/like/toggle", toggleLike);

export default router;
