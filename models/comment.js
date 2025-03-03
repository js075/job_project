import { DataTypes } from "sequelize";
import sequelize from "../db.js";
const Comment=sequelize.define("Comment",{
  commentContent:{
type:DataTypes.TEXT,
allowNull:false
  },
  postId:{
    type:DataTypes.INTEGER,
allowNull:false
  },
  userId:{  
    type:DataTypes.INTEGER,
allowNull:false
},

},{
  timestamps:true
});
export default Comment;