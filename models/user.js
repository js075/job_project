
import {DataTypes} from "sequelize";
import  sequelize from "../db.js";
const User=sequelize.define("User", {
      
        name: {
          type:DataTypes.STRING,
          allowNull:false 
      },
    email: {
      type:DataTypes.STRING,
          allowNull:false,

    },
    
    password: {
      type:DataTypes.STRING,
          allowNull:false
  },
  otp:{
    type:DataTypes.STRING,
    allowNull:true
  },
  otpExpires:{
    type:DataTypes.DATE,
    allowNull:true
  }},
  
  {
    timestamps: true,  
  });
  
  export default  User;