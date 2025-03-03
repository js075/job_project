import express from 'express';
const router = express.Router();
import postController from '../controllers/postController.js';
import validateSchema from '../middleware/validateSchema.js';
import postSchema from '../Json_Schema/postSchema.js';
import authmiddleware from '../middleware/auth.js';

router.post('/:id',authmiddleware,validateSchema(postSchema),postController.createPost);
router.get('/all/:id',postController.getAllPost);
router.put('/:id',authmiddleware,validateSchema(postSchema),postController.updatePost);
router.delete('/:id',authmiddleware,postController.deletePost);


export default router;
