const userSchema={
  type:'object',
properties:{
  
  email:{type:'string',format:'email'},
  password:{type:'string',minLength: 4},
},
required:["email","password"]
};
export default userSchema;
