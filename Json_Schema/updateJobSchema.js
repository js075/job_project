const jobSchema={
  type:'object',
properties:{
  title:{type:'string', minLength: 2,maxLength:50},

  company:{type:'string', minLength: 2},

  location:{type:'string', minLength: 2},

  experienceLevel:{type: "number", minimum: 0, maximum: 50 },

  description:{type:'string', minLength: 2},
  
  salary:{type:'string'},
  expire_days:{type:'integer'}
},
required: [], 
  additionalProperties: false,
};
export default jobSchema;
