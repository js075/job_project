import {DataTypes} from "sequelize";
import sequelize from "../db.js"; 
const Post=sequelize.define("Post",{
postContent:{
  type:DataTypes.TEXT,
  allowNull:false
},
postUserId:{//user who is posting 
  type:DataTypes.INTEGER,
  allowNull:false,
  references: {
    model: "Users",
    key: "id",
  },
}
},
{
  timestamps: true,  
});
export default Post;


