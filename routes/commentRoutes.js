import express from 'express';
const router = express.Router();
import commentController from '../controllers/commentController.js';
import validateSchema from '../middleware/validateSchema.js';
import commentSchema from '../Json_Schema/commentSchema.js';
import authmiddleware from '../middleware/auth.js';
router.post('/:postid',authmiddleware,validateSchema(commentSchema),commentController.createComment);
router.get('/all/:postid',authmiddleware,commentController.getAllComment);
router.put('/:postid',authmiddleware,validateSchema(commentSchema),commentController.updateComment);
router.delete('/:postid',authmiddleware,commentController.deleteComment);


export default router;
