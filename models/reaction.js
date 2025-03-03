import { DataTypes } from "sequelize";
import sequelize from "../db.js";
const Reaction=sequelize.define("Reaction",{
  reactionType:{
    type:DataTypes.ENUM('Like','Love','Happy','Sad','Angry','Celebrate','Funny'),
    allowNull:false
  },
  postId:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  userId:{//userWhoReactioned
    type:DataTypes.INTEGER,
    allowNull:false
  }
},{
  timestamps:true
});
export default Reaction;