const taggedSchema={
  type:'object',
properties:{
  tagPostId:{type:'integer'},

  taggedUserId:{type:'integer'}
},
required:["tagPostId","taggedUserId"],
};
export default taggedSchema;
