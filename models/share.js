import { DataTypes } from "sequelize";
import sequelize from "../db.js";
const Share=sequelize.define('Share',{
  shareType:{
    type:DataTypes.ENUM('whatsapp','facebook','instagram'),
    allowNull:false
  },
  sharePostId:{//which post user shared
    type:DataTypes.INTEGER,
    allowNull:false
  },
  // shareUserId:{//user who shared the post
  //   type:DataTypes.INTEGER,
  //   allowNull:false
  // }
},{timestamps:true});
export default Share;