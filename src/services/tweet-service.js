import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    const content = data.content;
    let tags = content.match(/#[a-zA-Z0-9_]+/g); // this regex extracts hashtags
    if (tags) {
      tags = tags.map((tag) => tag.substring(1).toLowerCase()); // removes the # symbol and converts all tags to lowercase
      let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
      let titleOfPresentTags = alreadyPresentTags.map((tags) => tags.title);

      let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
      newTags = newTags.map((tag) => {
        return { title: tag, tweets: [tweet.id] };
      });
      await this.hashtagRepository.bulkCreate(newTags);
      alreadyPresentTags.forEach((tag) => {
        tag.tweets.push(tweet.id);
        tag.save();
      });
    }
    const tweet = await this.tweetRepository.create(data);
    return tweet;
  }

  async get(tweetId) {
    const tweet = await this.tweetRepository.getWithComments(tweetId);
    return tweet;
  }
}

export default TweetService;
