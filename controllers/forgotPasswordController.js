
import crypto from "crypto";
import User from "../models/user.js"; 
import bcrypt from 'bcrypt';
import { sendOtpEmail } from "../utils/email.js";


const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const checkUser = await User.findOne({ where: { email } });
    if (!checkUser) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const otp = crypto.randomInt(100000, 999999).toString();
    const expireTime = new Date(Date.now() + 10 * 60 * 1000); 
    checkUser.otp = otp;
    checkUser.otpExpires = expireTime;
    await checkUser.save();
await sendOtpEmail(email,otp);
    res.json({ message: "OTP sent successfully to email", otp });

  } catch (err) {
    res.status(500).json({ message: "Error in sending OTP", error: err.message });
  }
};

const verifyOtp=async(req,res)=>{
const {email,otp}=req.body;
if(!email || !otp){
  return res.send("all fields are required");
}
try{
  const checkUser = await User.findOne({ where: { email } });
  if (!checkUser) {
    return res.status(404).json({ message: "User does not exist" });
  }
  if (checkUser.otp !== otp || new Date() > new Date(checkUser.otpExpires)) {
    return res.status(400).json({ message: "Invalid or expired OTP." });
  }
checkUser.otp=null;
checkUser.otpExpires =null;
    await checkUser.save();
    res.json("otp verified successfuly");
}

catch(err){
  res.status(500).json({ message: "Error in verifying OTP", error: err.message });
}
};

const resetPassword=async(req,res)=>{
  const {email,newpassword}=req.body;
  
try{
  const checkUser = await User.findOne({ where: { email } });
  if (!checkUser) {
    return res.status(404).json({ message: "User does not exist" });
  }
  const hashedpassword=await bcrypt.hash(newpassword,10);
  checkUser.password=hashedpassword;
  await checkUser.save();
  res.json("password updated successfuly");
}

catch(err){
  res.status(500).json({ message: "Error in updating password", error: err.message });
}
};


export default {resetPassword,forgotPassword,verifyOtp};