import express from 'express';
const router = express.Router();
import forgotPasswordSchema from '../Json_Schema/forgotPasswordSchema.js';
import resetPasswordSchema from '../Json_Schema/resetPasswordSchema.js';
import validateSchema from '../middleware/validateSchema.js'
import forgotPasswordController from '../controllers/forgotPasswordController.js';
router.post('/forgot-password',validateSchema(forgotPasswordSchema),forgotPasswordController.forgotPassword);
router.post('/verify-otp',forgotPasswordController.verifyOtp);
router.post('/reset-password',validateSchema(resetPasswordSchema),forgotPasswordController.resetPassword);
export default router;