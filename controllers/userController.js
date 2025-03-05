import User from '../models/user.js';
import bcrypt from "bcrypt.js";
import jwt from 'jsonwebtoken';
import "dotenv/config";
const secret_key = process.env.SECRET_KEY;

//  User Registration
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ message: "User is already registered" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });

        res.status(201).json(newUser);
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ error: err.message });
    }
};

//  User Login
const loginUser = async (req, res) => {
    const { email, password } = req.body; 
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: "User not found, please register" });
        }

        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) {
            return res.status(401).json({ message: "Invalid password" });
        }

        const token = jwt.sign({ id: user.id,email: user.email }, secret_key, { expiresIn: '7d' });
        res.status(200).json({ token });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ error: err.message });
    }
};

//  Delete User
const deleteUser = async (req, res) => {
    const { email } = req.params;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const user = await User.destroy({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ error: err.message });
    }
};

//  Update User
const updateUser = async (req, res) => {
    const { email } = req.params;

    if (!email) {
        return res.status(400).json({ message: "Email is required" });
    }

    try {
        const user = await User.update(req.body, { where: { email } });

        if (user[0] === 0) {
            return res.status(404).json({ message: "User not found or no changes made" });
        }

        res.status(200).json({ message: "User updated successfully" });
    } catch (err) {
        console.log("Error:", err);
        res.status(500).json({ error: err.message });
    }
};

//get all user  //doubt in pagination
const getAllUser=async(req,res)=>{

  try{
    // {limit: 10,offset: 0}
const user=await User.findAll();
  res.status(200).json(user);
}
catch(err){
  console.log("error is ",err);
  res.status(500).json({error:err.message});
}
}


export default {createUser,getAllUser,loginUser,updateUser,deleteUser};