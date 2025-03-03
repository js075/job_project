import express from 'express';
const router = express.Router();
import validateSchema from '../middleware/validateSchema.js';
import shareSchema from '../Json_Schema/shareSchema.js';
import  shareController from '../controllers/shareController.js';
router.get('/:id',shareController.getAllShares);
router.post('/:postid',validateSchema(shareSchema),shareController.createShare);
export default  router; 
