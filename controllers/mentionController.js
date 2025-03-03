
import Post from'../models/post.js';
import Mention from'../models/mention.js';

// get all mention in particular post 

const getAllMentions=async(req,res)=>{
  const {id}=req.params;
  if (!id) {
    return res.status(400).json({ message: "Error: Post ID is required" });
  }

  try {
     const checkpost=await Post.findByPk(id);
    if(!checkpost){
      return res.status(404).json({ message: "Post not found" });
    }
    const mentions=await Mention.findAll({where:{mentionPostId:id}})

    res.status(201).json({ message:`mentions for post id ${id} is:`, data:mentions});
  } catch (error) {
    res.status(500).json({error:error.message});
  }
};
export default {getAllMentions};