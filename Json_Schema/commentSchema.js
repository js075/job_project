const commentSchema={
  type:'object',
properties:{
  commentContent:{type:'string', minLength: 2}
},
required:["commentContent"]
};
export default commentSchema;
