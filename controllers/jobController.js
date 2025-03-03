import Job from '../models/job.js';
import { Op } from 'sequelize';
//create job 
const createJob=async(req,res)=>{
    try{
      const{title,company,location,experienceLevel,description,expire_days,salary}=req.body;
         const currentDate=new Date();;
         const expireDate=new Date();
         const expiryDate = expireDate.setDate(expireDate.getDate() + expire_days);
      const jobdata=await Job.create({title,company,location,experienceLevel,salary,description,expireDate:expiryDate});

      if(!jobdata){
        return res.send("problem in creating data");
      }
      res.status(200).json({jobcreated:jobdata});
    }
    catch(err){
      res.status(500).send({error:err.message})
    }
  }




  //delete job
  const deleteJob=async(req,res)=>{
    const{id}=req.params;
    if(!id){
      return res.send("id is invalid");
    }
      try{
        const jobdata=await Job.findOne({where:{id}});
        if(!jobdata){
          return res.send("no job found");
        }
        const deleteJobData=await Job.destroy({where:{id}});
        res.status(200).json("job deleted successfully");
      }
      catch(err){
        res.status(500).send({error:err.message})
      }
    }

//update a job

const updateJob=async(req,res)=>{
  const{id}=req.params;
  if(!id){
    return res.send("id is invalid");
  }
    try{
      const jobdata=await Job.findOne({where:{id}});
      if(!jobdata){
        return res.send("no job found");
      }
      const updateJobData=await Job.update(req.body,{where:{id}});//ek baar check karna
      res.status(200).json({"job update successfully":updateJobData});
    }
    catch(err){
      res.status(500).send({error:err.message})
    }
  }

//get all job 
const getAllJob=async(req,res)=>{
    try{
      const jobdata=await Job.findAll({limit: 10,offset: 0});
      if(!jobdata){
        return res.send("no job found");
      }
      res.status(200).json(jobdata);
    }
    catch(err){
      res.status(500).send({error:err.message})
    }
  }


//get job by a specific keyword

const getAllJobbyKeyword = async (req, res) => {
  const { keyword } = req.query; 

  try {
    if (!keyword) {
      return res.status(400).send("Keyword is required");
    }

    const jobData = await Job.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.iLike]: `%${keyword}%` } },
          { description: { [Op.iLike]: `%${keyword}%` } }
        ]
      }
    });

    if (jobData.length === 0) {
      return res.status(404).json({ message: "No jobs found" });
    }

    res.status(200).json(jobData); 
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};


export default{createJob,getAllJobbyKeyword,getAllJob,deleteJob,updateJob};
