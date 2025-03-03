import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';
import authmiddleware from '../middleware/auth.js';
import validateSchema from '../middleware/validateSchema.js';
import userSchema from '../Json_Schema/userSchema.js';
import updateUserSchema from '../Json_Schema/updateUserSchema.js';
import userLoginSchema from '../Json_Schema/userLoginSchema.js';

router.get('/',userController.getAllUser);
router.post('/login',validateSchema(userLoginSchema),userController.loginUser);
router.post('/register',validateSchema(userSchema),userController.createUser);
router.put('/update/:email',authmiddleware,validateSchema(updateUserSchema ),userController.updateUser);
router.delete('/delete/:email',authmiddleware,userController.deleteUser);

export default router;