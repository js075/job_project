
import Post from'../models/post.js';
import Share from'../models/share.js';
const createShare = async (req, res) => {
  const { postid } = req.params;
  const { shareType } = req.body;
  
  if (!postid) {
    return res.send("post id is not mentioned");
  }
  

  const id = parseInt(postid, 10);
  console.log("Parsed Post ID:", id);

  try {
    const checkpost = await Post.findByPk(id);
    if (!checkpost) return res.send("post is not available");

    const sharedPost = await Share.create({ shareType, sharePostId: id });
    res.status(201).json({ message: "shared successfully", data: sharedPost });
    
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
};

//get all shares for particular post

const getAllShares=async(req,res)=>{
  const {id}=req.params;
  
if(!id){
  return res.send("post id is not mentioned");
}
// const postid=parseInt(id, 10);
try {
  const post=await Post.findByPk(id);
if(!post) return  res.send("post is not availbale");
const getsharedPost=await Share.findAll({where:{sharePostId:id}});
res.status(201).json({message:`shared data for post id ${id}is `,data:getsharedPost});
  
} catch (err) {
  res.status(500).json({error:err.message});
}
}
export default {getAllShares,createShare};