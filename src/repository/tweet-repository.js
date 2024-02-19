const Tweet =require('../models/tweet');
// const Comment =require('../models/comment');
class TweetRepository{
    async create(data){                 
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComment(id){
        try {
            const tweet = await Tweet.findById(id).populate({path:'comments'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(id, data, { new: true });
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }    
    async getById(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
        try {
            const tweet = await Tweet.find();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async delete(id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    } 
    
    // async comment(id,data){
    //     try {
    //         const tweet = await Comment.findById(id);
    //         tweet.comments.push(data);
    //         await tweet.save();
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    
}

module.exports=TweetRepository; 