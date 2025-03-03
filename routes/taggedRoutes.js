import express from 'express';
const router = express.Router();
import  taggedController from '../controllers/taggedController.js';
router.get('/:id',taggedController.getAllTagged);
export default  router; 
