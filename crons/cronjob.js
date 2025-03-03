//doubt hai
//cron

import cron from "node-cron";
import { Op } from "sequelize";
import Job from "../models/job.js"; 
import dotenv from "dotenv";

dotenv.config(); 
cron.schedule('0 0 * * *',async()=>{
  try{
    const currentDate = new Date(); 
    const expireDate = new Date();
    const expireyDate=expireDate.setDate(expireDate.getDate()+Number(expire_days));

    const deletedJobs = await Job.destroy({
      where: { expireDate: { [Op.lt]: expireDate } },
    });

    console.log(` ${deletedJobs} expired jobs deleted successfully`);
  }
  catch(err){
    res.json({error:err.message}); 
  }
  });
