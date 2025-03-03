import SavedJob from '../models/savedjob.js';


//job saved by user

const userSavedJob=async(req,res)=>{

  const {job_id,user_id,note,status}=req.body;
  if(!job_id || !user_id || !note || !status){
    return res.send("all fields are required");
  }

  try{
    const validStatuses = ["applied", "interviewing", "accepted", "rejected"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }
    const existingSavedJob = await SavedJob.findOne({ where: { job_id, user_id } });

    if (existingSavedJob) {
      return res.status(400).json({ message: "Job already saved" });
    }
const savedJobData=await SavedJob.create({job_id,user_id,note,status});
return res.status(201).json({ message: "Job saved successfully", data: savedJobData });
  }
  catch(err){
    res.status(500).send({error:err.message});
  }
}
//delete job by user
const userDeleteJob = async (req, res) => {
  try {
    const { job_id, user_id } = req.params;

    if (!job_id || !user_id) {
      return res.status(400).json({ message: "All fields (job_id, user_id) are required" });
    }

    const deletesavedJobData = await SavedJob.destroy({ where: { job_id, user_id } });

    if (deletesavedJobData === 0) {
      return res.status(404).json({ message: "Job not found or already deleted" });
    }

    return res.json({ message: "Job deleted successfully" });

  } catch (err) {
    console.error("Error deleting job:", err);
    return res.status(500).json({ error: err.message });
  }
};


//get AlljobsavedbyUser
const GetalljobsavedbyUser = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const userData = await SavedJob.findAll({ where: { user_id: id } ,limit: 10,offset: 0});

    if (userData.length === 0) {
      return res.status(404).json({ message: "No saved jobs found for this user" });
    }

    return res.json(userData);
  } catch (err) {
    console.error("Error fetching saved jobs:", err);
    return res.status(500).json({ error: err.message });
  }
};



//add a note or put some status

const updatejobsavedbyUser = async (req, res) => {
  try {
    const { note, status, job_id, user_id } = req.body;

    if (!job_id || !user_id || !note || !status) {
      return res.status(400).json({ message: "All fields (job_id, user_id, note, status) are required" });
    }

    const updateData = await SavedJob.update(
      { note, status },
      { where: { user_id, job_id } }
    );

    if (updateData[0] === 0) {
      return res.status(404).json({ message: "No record updated. Job may not exist for this user." });
    }

    return res.json({ message: "Job updated successfully" });

  } catch (err) {
    console.error("Error updating saved job:", err);
    return res.status(500).json({ error: err.message });
  }
};



export default {userSavedJob,userDeleteJob,GetalljobsavedbyUser,updatejobsavedbyUser};