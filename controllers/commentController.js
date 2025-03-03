
import Post from'../models/post.js';
import Comment from'../models/comment.js';
import Mention from'../models/mention.js';

const createComment=async(req,res)=>{
  const {commentContent,mentionedUsers=[]}=req.body;
  const {postid}=req.params;
  if (!postid) {
    return res.status(400).json({ message: "Error: Post ID is required" });
  }
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "Unauthorized: User ID is missing" });
  }

  try {
     const checkpost=await Post.findByPk(postid);
    if(!checkpost){
return res.send("post doesn't found");
    }
    const commentCreated = await Comment.create({
      commentContent:commentContent,postId:postid,userId:req.user.id
    });
    if (mentionedUsers.length > 0) {
      const mentions = mentionedUsers.map((userId) => ({
        mentionedCommentId: commentCreated.id,
        mentionPostId:postid,
        mentionedUserId:userId,
      }));
      await Mention.bulkCreate(mentions);
    }


    res.status(201).json({ message:"comment created successfully:", data:commentCreated});
  } catch (error) {
    res.status(500).json({error:error.message});
  }
};

const deleteComment=async(req,res)=>{
  const {postid}=req.params;
  if(!postid){
    return res.send("error in getting post id ");
  }
  try {
     const checkPost=await Post.findByPk(postid);
    if(!checkPost){
return res.send("Post doesn't found");
    }
    const commentdelete=await Comment.destroy({where: {postId: postid, userId: req.user.id }});
    res.status(201).json({ message:"comment deleted successfully:"});
  } catch (error) {
    res.status(500).json({error:error.message});
  }
};

const updateComment = async (req, res) => {
  const { postid } = req.params;
  const { commentContent, mentionedUsers = [] } = req.body;

  if (!postid) {
    return res.status(400).json({ message: "Error in getting post ID" });
  }

  try {
    const checkPost=await Post.findByPk(postid);
    if(!checkPost){
return res.send("Post doesn't found");
    }
    const checkComment = await Comment.findOne({ where: { userId: req.user.id, postId: postid } });

    if (!checkComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    await Comment.update(
      { commentContent: commentContent },
      { where: { userId: req.user.id, postId: postid } }
    );


    const updatedComment = await Comment.findOne({ where: { userId: req.user.id, postId: postid } });

    // Handle mentions
    if (mentionedUsers.length > 0) {
      const mentions = mentionedUsers.map((userId) => ({
        mentionedCommentId: updatedComment.id,
        mentionPostId: postid,
        mentionedUserId: userId,
      }));
      await Mention.bulkCreate(mentions);
    }

    return res.status(200).json({ message: "Comment updated successfully", data: updatedComment });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


const getAllComment=async(req,res)=>{
  const {postid}=req.params;
  if(!postid){
    res.send("error in getting post id ");
  }

  try {
     const checkPost=await Post.findByPk(postid);
    if(!checkPost){
return res.send("Post doesn't found");
    }
    const getcomment = await Comment.findAll({ where: { postId: postid } });
    res.status(201).json({ message:"All comments are:", data:getcomment});
  } catch (error) {
    res.status(500).json({error:error.message});
  }
};

 export default {createComment,deleteComment,getAllComment,updateComment};