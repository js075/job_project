import User from '../models/user.js';
import Post from '../models/post.js';
import Tagged from '../models/tagged.js';
import Comment from '../models/comment.js';
import Mention from '../models/mention.js';
import { sendPostEmail } from '../utils/email.js';

const createPost=async(req,res)=>{
  const {content,taggedusers}=req.body;
  const{id}=req.params;
  try {
    const checkuser = await User.findByPk(id);
    if(!checkuser){
return res.send("user doesn't found");
    }
    const postCreated = await Post.create({
      postUserId: checkuser.id, 
      postContent: content,
    });
    if(taggedusers && taggedusers.length>0){
      const tagged = taggedusers.map((taggedUserId) => ({
        tagPostId:postCreated.id,
        taggedUserId: taggedUserId,
      }));
      await Tagged.bulkCreate(tagged);
    }
    
    await sendPostEmail(checkuser.email,postCreated);
    res.status(201).json({ message:"post created successfully:", data:postCreated});
  } catch (error) {
    res.status(500).json({error:error.message});
  }
}

const deletePost = async (req, res) => {
  const { id } = req.params; 
  if (!id) {
    return res.status(400).json({ message: "Post ID is required" });
  }

  try {
    const checkpost = await Post.findByPk(id);
    if (!checkpost) {
      return res.status(404).json({ message: "Post not found" });
    }

    await Post.destroy({ where: { id } });

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePost=async(req,res)=>{
  const {id}=req.params;
  const {content,taggedusers} = req.body;
  if(!id){
    res.send("id is not there");
  }
  try {
     const checkpost=await Post.findByPk(id);
    if(!checkpost){
return res.send("post doesn't found");
    }
    const [updatedCount, updatedPosts] = await Post.update(
      { postContent: content },
      { where: { id }, returning: true }
    );

    if (updatedCount === 0) {
      return res.status(400).json({ message: "Post update failed" });
    }
    if(taggedusers && taggedusers.length>0){
      const tagged = taggedusers.map((taggedUserId) => ({
        tagPostId:id,
        taggedUserId: taggedUserId,
      }));
      await Tag.bulkCreate(tagged);
    }
    res.status(201).json({ message:"post updated  successfully:",data: updatedPosts[0],});
  } catch (error) {
    res.status(500).json({error:error.message});
  }
}


const getAllPost = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "User ID is required" });
  }
  try {
    const checkpost = await Post.findAll({
      where: { postUserId: id },
      limit: 10,
      offset: 0,
    });

    if (checkpost.length === 0) {
      return res.status(404).json({ message: "No posts found for this user" });
    }

    const postIds = checkpost.map(post => post.id);

    const checkcomments = await Comment.findAll({
      where: { postId: postIds },
      limit: 10,
      offset: 0,
    });

    const checkmentions = await Mention.findAll({
      where: { mentionPostId: postIds },
      limit: 10,
      offset: 0,
    });

    const checktags = await Tagged.findAll({
      where: { tagPostId: postIds },
      limit: 10,
      offset: 0,
    });

    res.status(200).json({
      message: "Success",
      posts: checkpost,
      comments: checkcomments,
      mentions: checkmentions,
      tags: checktags,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {createPost,deletePost,updatePost,getAllPost};

