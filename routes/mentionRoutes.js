import express from 'express';
const router = express.Router();
import  mentionController from '../controllers/mentionController.js';
router.get('/:id',mentionController.getAllMentions);
export default  router; 
