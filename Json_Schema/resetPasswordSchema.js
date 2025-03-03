const resetPasswordSchema={
  type:'object',
properties:{
  email:{type:'string',format:'email'},
  newpassword:{type:'string',minLength: 4},
},
required:["email","newpassword"]
};
export default resetPasswordSchema;
