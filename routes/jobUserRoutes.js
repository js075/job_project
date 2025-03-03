import express from 'express';
const router = express.Router();
import  jobUserController from '../controllers/jobUserController.js';
import  authmiddleware from '../middleware/auth.js';
router.post('/',authmiddleware,jobUserController.userSavedJob);
router.get('/:id',authmiddleware,jobUserController.GetalljobsavedbyUser);
router.put('/',authmiddleware,jobUserController.updatejobsavedbyUser);
router.delete('/:user_id/:job_id',authmiddleware,jobUserController.userDeleteJob);














export default router;