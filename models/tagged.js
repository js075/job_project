import { DataTypes } from "sequelize";
import sequelize from "../db.js";
const Tagged=sequelize.define('Tagged',{
 
  tagPostId:{//post where a user been tagged 
    type:DataTypes.INTEGER,
    allowNull:true
  },
  
taggedUserId:{
  //person who is been tagged by another
    type:DataTypes.INTEGER,
    allowNull:true
  }

},{timestamp:true});
export default Tagged;