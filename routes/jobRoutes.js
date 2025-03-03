import express from 'express';
const router = express.Router();
import  jobController from '../controllers/jobController.js';
import validateSchema from '../middleware/validateSchema.js';
import jobSchema from '../Json_Schema/jobSchema.js';
import updateJobSchema from '../Json_Schema/updateUserSchema.js';

router.post('/',validateSchema(jobSchema),jobController.createJob);
router.get('/all',jobController.getAllJob);
router.get('/',jobController.getAllJobbyKeyword);
router.put('/:id',validateSchema(updateJobSchema),jobController.updateJob);
router.delete('/:id',jobController.deleteJob);
export default  router; 
