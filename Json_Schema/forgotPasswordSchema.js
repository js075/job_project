const forgotPasswordSchema={
  type:'object',
properties:{
  email:{type:'string',format:'email'},
},
required:["email"]
};
export default forgotPasswordSchema;
