
import Post from'../models/post.js';
import Reaction from'../models/reaction.js';

const createReaction=async(req,res)=>{
  const {id}=req.params;
  const {reactionType}=req.body;
  if(!id){
    return res.send("post id is not mentioned")
  }
  try {
    const post=await Post.findByPk(id);
    if(!post){
      return res.send("post doesnt exist");
    }
    const reactionPost=await Reaction.create({reactionType,postId:id,userId:req.user.id});
    res.status(201).json(`${reactionType} successfully`);
  } catch (err) {
    res.status(500).json({error:err.message});
  }
};


const deleteReaction=async(req,res)=>{
  const {id}=req.params;
  if(!id){
    return res.send("post id is not mentioned")
  }
  try {
    const post=await Post.findByPk(id);
    if(!post){
      return res.send("post doesnt exist");
    }
    const deletereaction=await Reaction.destroy({where:{postId:id,userId:req.user.id}});
    res.status(201).json("reaction deleted successfully");

  } catch (err) {
    res.status(500).json({error:err.message});
  }
};



const updateReaction=async(req,res)=>{
  const {id}=req.params;
  const {reactionType}=req.body;
  if(!id){
    return res.send("post id is not mentioned")
  }
  try {
   
    const post=await Post.findByPk(id);
    if(!post){
      return res.send("post doesnt exist");
    }
    const updatereaction=await Reaction.update(reactionType,{where:{postId:id,userId:req.user.id}});
    res.status(201).json({message:`${reactionType} updated successfully`})
  } catch (err) {
    res.status(500).json({error:err.message});
  }
};



const getAllReaction=async(req,res)=>{
  const {id}=req.params;

  if(!id){
    return res.send("post id is not mentioned")
  }
  try {

    const post=await Post.findByPk(id);

    if(!post){
      return res.send("post doesnt exist");
    }
    const allreaction=await Reaction.findAll({where:{postId:id}});
    res.status(201).json({message:"all reaction for posts",data:allreaction});
  } catch (err) {
    res.status(500).json({error:err.message});
  }
};

export default {getAllReaction,createReaction,updateReaction,deleteReaction};