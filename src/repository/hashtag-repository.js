const HashTag =require('../models/hashtags');
class HashtagReposiotry{
    async create(data){                 
        try {
            const tag = await HashTag.create(data);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }

    
    async getById(id){
        try {
            const tag = await HashTag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }
    async bulkCreate(data){
        try {
            const tags= await HashTag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
    async delete(id) {
        try {
            const response = await HashTag.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    } 
    
    async findByName(titleList){
        try {
            const tags= await HashTag.find({
                title:titleList
            });
            return tags; 
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports=HashtagReposiotry; 