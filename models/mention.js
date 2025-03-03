import { DataTypes } from "sequelize";
import sequelize from "../db.js";
const Mention=sequelize.define('Mention',{

      mentionedCommentId:{
        //comment id in which user is been mentioned
        type:DataTypes.INTEGER,
        allowNull:true
      },
      mentionPostId:{
        type:DataTypes.INTEGER,
        allowNull:true
      },
      // mentionerId:{//user who has mentioned another user 
      //   type:DataTypes.INTEGER,
      //   allowNull:true
      // },
      mentionedUserId:{
        type:DataTypes.INTEGER,
        allowNull:true
      }

},{timestamps:true});
export default Mention;