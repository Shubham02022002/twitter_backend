import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetSevice {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    if (!data || !data.content) {
      throw new Error('Invalid data: Content is missing');
    }

    const content = data.content;
    const tags = content.match(/#[a-zA-Z0-9_]+/g) || [];
    const formattedTags = tags.map((tag) => tag.substring(1).toLowerCase());
    
    const tweet = await this.tweetRepository.create(data);
    let alreadyPresentTags = await this.hashtagRepository.findByName(formattedTags);
    
    let newTags = formattedTags.filter((tag) => !alreadyPresentTags.some((t) => t.title === tag));

    newTags = newTags.map(tag => {
      return { title: tag, tweets: [tweet.id] };
    });

    await this.hashtagRepository.bulkCreate(newTags);

    alreadyPresentTags.forEach((tag)=>{
        tag.tweets.push(tweet.id);
        tag.save();
    });

    return tweet;
  }
}

export default TweetSevice;
