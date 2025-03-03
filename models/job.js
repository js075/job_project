
import {DataTypes} from "sequelize";
import  sequelize from "../db.js";
const   Job=sequelize.define("Job", {

  title: {
          type:DataTypes.STRING,
          allowNull:false        
      },
      company: {
      type:DataTypes.STRING,
          allowNull:false,
    },
    location: {
      type:DataTypes.STRING,
          allowNull:false,
    },
    experienceLevel: {
      type:DataTypes.INTEGER,
          allowNull:false,
    },
    description: {
      type:DataTypes.TEXT,
          allowNull:false,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    expireDate: {
      type:DataTypes.DATE,
          allowNull:false,
    },
    },
  {
    timestamps: true,  
  });
  
export default Job;