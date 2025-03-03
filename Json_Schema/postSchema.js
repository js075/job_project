
const postSchema={
  type:"object",
  properties:{
    content:{
type:'string',
minLength:1
}

},
  required:["content"]
};
export default postSchema ;