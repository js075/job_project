
import Post from'../models/post.js';
import Tagged from'../models/tagged.js';

// get all mention in particular post 

const getAllTagged=async(req,res)=>{
  const {id}=req.params;
  if (!id) {
    return res.status(400).json({ message: "Error: Post ID is required" });
  }

  try {
     const checkpost=await Post.findByPk(id);
    if(!checkpost){
      return res.status(404).json({ message: "Post not found" });
    }
    const taggedusers=await Tagged.findAll({where:{tagPostId:id}})

    res.status(201).json({ message:`tagged user for post id ${id} is:`, data:taggedusers});
  } catch (error) {
    res.status(500).json({error:error.message});
  }
};
export default {getAllTagged};