import sequelize from "../db.js";
import User from "./user.js";
import Job from "./job.js";
import SavedJob from "./savedjob.js";
import Comment from "./coment.js";
import Post from "./post.js";
import Mention from "./mention.js";
import Notification from "./notification.js";
import Reaction from "./reaction.js";
import Share from "./share.js";
import Tagged from "./tagged.js";

// Define associations here
//user job
User.belongsToMany(Job, { through: "SavedJob",foreignKey: "userId", as: "user" });
Job.belongsToMany(User, { through: "SavedJob",foreignKey: "jobId", as: "job" });

//post
User.hasMany(Post, { foreignKey: "postUserId", as: "posts" });
Post.belongsTo(User, { foreignKey: "postUserId", as: "user" });

//reaction
User.belongsToMany(Post,{through: "Reaction",foreignKey: "userId", as: "reactedPosts"});
Post.belongsToMany(User,{through: "Reaction",foreignKey: "postId", as: "reactions"});

//comment 
User.hasMany(Comment, { foreignKey: "userId", as: "comments" });
Comment.belongsTo(User, { foreignKey: "userId", as: "user" });

Post.hasMany(Comment, { foreignKey: "postId", as: "comments" });
Comment.belongsTo(Post, { foreignKey: "postId", as: "post" });


//mention
//user who mentioned another user
User.hasMany(Mention, { foreignKey: "mentionerId", as: "mentionsMade" });
Mention.belongsTo(User, { foreignKey: "mentionerId", as: "mentioner" });

//user who is been mentioned
User.hasMany(Mention, { foreignKey: "mentionedUserId", as: "mentionsReceived" });
Mention.belongsTo(User, { foreignKey: "mentionedUserId", as: "mentionedUser" });

Post.hasMany(Mention, { foreignKey: "mentionPostId", as: "mentions" });
Mention.belongsTo(Post, { foreignKey: "mentionPostId", as: "post" });

Comment.hasMany(Mention, { foreignKey: "mentionedCommentId", as: "mentions" });
Mention.belongsTo(Comment, { foreignKey: "mentionedCommentId", as: "comment" });
//mention end 

//notification
// User receiving the notification
User.hasMany(Notification, { foreignKey: "notifiedUserId", as: "notifications" });
Notification.belongsTo(User, { foreignKey: "notifiedUserId", as: "notifiedUser" });

// User who triggered the notification 
User.hasMany(Notification, { foreignKey: "triggeredByUserId", as: "triggeredNotifications" });
Notification.belongsTo(User, { foreignKey: "triggeredByUserId", as: "triggeredByUser" });


Mention.hasMany(Notification, { foreignKey: "mentionId", as: "notifications" });
Notification.belongsTo(Mention, { foreignKey: "mentionId", as: "mention" });


Tagged.hasMany(Notification, { foreignKey: "taggedId", as: "notifications" });
Notification.belongsTo(Tagged, { foreignKey: "taggedId", as: "taggedEvent" });


Post.hasMany(Notification, { foreignKey: "postId", as: "notifications" });
Notification.belongsTo(Post, { foreignKey: "postId", as: "post" });
//notification end 

//share

User.hasMany(Share, { foreignKey: "shareUserId", as: "shares" });
Share.belongsTo(User, { foreignKey: "shareUserId", as: "sharer" });

Post.hasMany(Share, { foreignKey: "sharePostId", as: "sharedPosts" });
Share.belongsTo(Post, { foreignKey: "sharePostId", as: "post" });

//tagging 
// User who tags another user
User.hasMany(Tagged, { foreignKey: "whotaggedId", as: "tagger" });
Tagged.belongsTo(User, { foreignKey: "whotaggedId", as: "tagger" });

// User who is tagged
User.hasMany(Tagged, { foreignKey: "taggedUserId", as: "tagged" });
Tagged.belongsTo(User, { foreignKey: "taggedUserId", as: "tagged" });

Post.hasMany(Tagged, { foreignKey: "tagPostId", as: "tags" });
Tagged.belongsTo(Post, { foreignKey: "tagPostId", as: "post" });

module.exports = { sequelize, User,Job,SavedJob,Tagged,Notification,Reaction,Mention,Share,Post,Comment};