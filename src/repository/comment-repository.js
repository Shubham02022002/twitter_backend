// const Comment =require('../models/comment');


// class CommentRepository{
//     async create(data){         
//         try {
//             const comment = await Comment.create(data);
//             return comment;
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     async update(id, data) {
//         try {
//             const comment = await Comment.findByIdAndUpdate(id, data, { new: true });
//             return comment;
//         } catch (error) {
//             console.log(error);
//         }
//     }    
//     async getById(id){
//         try {
//             const comment = await Comment.findById(id);
//             return comment;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     async getAll(){
//         try {
//             const comment = await Comment.find();
//             return comment;
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     async delete(id) {
//         try {
//             const comment = await Comment.findByIdAndDelete(id);
//             return comment;
//         } catch (error) {
//             console.log(error);
//         }
//     }    
    
// }

// module.exports=CommentRepository;